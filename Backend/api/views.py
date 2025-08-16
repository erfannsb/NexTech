from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from PIL import Image
import requests
from io import BytesIO
from django.http import JsonResponse
import jwt
from datetime import timedelta
from django.conf import settings
from django.utils import timezone
from rest_framework.views import APIView
from rest_framework import status, permissions
from .serializers import CustomerLoginSerializer
from users.serializers import CustomerPrivateSerializer
from users.models import Customer

@api_view(["GET"])
def get_dominant_color(request):
    image_url = request.GET.get('url')
    if not image_url:
        return JsonResponse({'error': 'Missing image URL'}, status=400)

    try:
        response = requests.get(image_url)
        image = Image.open(BytesIO(response.content))
        image = image.convert('RGB')
        image = image.resize((50, 50))  # Resize to reduce computation

        pixels = list(image.getdata())
        avg_r = sum(p[0] for p in pixels) // len(pixels)
        avg_g = sum(p[1] for p in pixels) // len(pixels)
        avg_b = sum(p[2] for p in pixels) // len(pixels)

        return JsonResponse({'color': [avg_r, avg_g, avg_b]})

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


# ---- Auth helpers ----

def make_token(customer, minutes=60, token_type="access"):
    now = timezone.now()
    payload = {
        "customer_id": customer.customerid,
        "exp": int((now + timedelta(minutes=minutes)).timestamp()),
        "iat": int(now.timestamp()),
        "typ": token_type,
    }
    return jwt.encode(payload, settings.SECRET_KEY, algorithm="HS256")


class CustomerLoginView(APIView):
    permission_classes = []
    authentication_classes = []
    
    def post(self, request):
        ser = CustomerLoginSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        customer = ser.validated_data["customer"]
        
        # Create tokens with shorter access token lifetime
        access = make_token(customer, minutes=15, token_type="access")  # 15 mins
        refresh = make_token(customer, minutes=60 * 24 * 7, token_type="refresh")  # 7 days
        
        # Create response
        response = Response({
            "message": "Login successful",
            "customer_id": customer.customerid,
            # Don't return tokens in response body for security
        }, status=status.HTTP_200_OK)
        
        response.set_cookie(
            key="access_token",
            value=access,
            httponly=True,
            secure=False,  # False for localhost HTTP
            samesite="Lax",  # Required for cross-origin
        )

        response.set_cookie(
            key="refresh_token",
            value=refresh,
            httponly=True,
            secure=False,
            samesite="Lax",
        )
        
        return response

class CustomerLogoutView(APIView):
    def post(self, request):
        response = Response({"message": "Logged out successfully"}, status=status.HTTP_200_OK)
        response.delete_cookie('access_token')
        response.delete_cookie('refresh_token')
        return response

class TokenRefreshView(APIView):
    permission_classes = []
    authentication_classes = []
    
    def post(self, request):
        refresh_token = request.COOKIES.get('refresh_token')
        
        if not refresh_token:
            return Response({"error": "Refresh token not found"}, status=status.HTTP_401_UNAUTHORIZED)
        
        try:
            payload = jwt.decode(refresh_token, settings.SECRET_KEY, algorithms=["HS256"])
            
            if payload.get('typ') != 'refresh':
                raise jwt.InvalidTokenError("Invalid token type")
            
            customer = Customer.objects.get(customerid=payload['customer_id'])
            
            # Create new access token
            access = make_token(customer, minutes=15, token_type="access")
            
            response = Response({"message": "Token refreshed"}, status=status.HTTP_200_OK)
            response.set_cookie(
                'access_token',
                access,
                max_age=15 * 60,
                httponly=True,
                secure=False,  # False for localhost HTTP
                samesite="Lax",
            )
            
            return response
            
        except (jwt.InvalidTokenError, jwt.ExpiredSignatureError, Customer.DoesNotExist):
            return Response({"error": "Invalid refresh token"}, status=status.HTTP_401_UNAUTHORIZED)

class MeView(APIView):
    permission_classes = []

    def get(self, request):
        access_token = request.COOKIES.get('access_token')
        if not access_token:
            return Response({"error": "Not authenticated"}, status=401)

        try:
            payload = jwt.decode(access_token, settings.SECRET_KEY, algorithms=["HS256"])
            customer = Customer.objects.get(customerid=payload['customer_id'])
        except (jwt.ExpiredSignatureError, jwt.InvalidTokenError, Customer.DoesNotExist):
            return Response({"error": "Not authenticated"}, status=401)

        data = CustomerPrivateSerializer(customer).data
        return Response(data)
    