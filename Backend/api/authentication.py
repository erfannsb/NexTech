from users.models import Customer
from rest_framework.authentication import BaseAuthentication
from rest_framework import exceptions
import jwt
from django.conf import settings


class CookieJWTAuthentication(BaseAuthentication):
    def authenticate(self, request):
        token = request.COOKIES.get('access_token')
        if not token:
            return None
        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
            if payload.get('typ') != 'access':
                raise exceptions.AuthenticationFailed("Invalid token type")
            customer = Customer.objects.get(customerid=payload['customer_id'])
            return (customer, None)
        except jwt.ExpiredSignatureError:
            raise exceptions.AuthenticationFailed("Access token expired")
        except jwt.InvalidTokenError:
            raise exceptions.AuthenticationFailed("Invalid token")