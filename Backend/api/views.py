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
from users.serializers import CustomerSerializer as PublicCustomerSerializer


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
        access = make_token(customer, minutes=60, token_type="access")
        refresh = make_token(customer, minutes=60 * 24 * 7, token_type="refresh")
        return Response({"access": access, "refresh": refresh}, status=status.HTTP_200_OK)


class MeView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        # request.user is a CustomerPrincipal (proxy) -> expose underlying fields
        customer = getattr(request.user, "_customer", request.user)
        data = PublicCustomerSerializer(customer).data
        return Response(data)
