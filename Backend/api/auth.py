import jwt
from django.conf import settings
from rest_framework.authentication import BaseAuthentication, get_authorization_header
from rest_framework import exceptions
from users.models import Customer


class CustomerPrincipal:
    def __init__(self, customer: Customer):
        self._customer = customer

    def __getattr__(self, name):
        return getattr(self._customer, name)

    @property
    def is_authenticated(self) -> bool:
        return True


class CustomerJWTAuthentication(BaseAuthentication):
    keyword = b"bearer"

    def authenticate(self, request):
        auth = get_authorization_header(request).split()
        if not auth:
            return None
        if auth[0].lower() != self.keyword:
            return None
        if len(auth) != 2:
            raise exceptions.AuthenticationFailed("Invalid Authorization header")

        token = auth[1].decode("utf-8")
        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
        except jwt.ExpiredSignatureError:
            raise exceptions.AuthenticationFailed("Token expired")
        except jwt.InvalidTokenError:
            raise exceptions.AuthenticationFailed("Invalid token")

        customer_id = payload.get("customer_id")
        if not customer_id:
            raise exceptions.AuthenticationFailed("Invalid payload")

        try:
            customer = Customer.objects.get(pk=customer_id)
        except Customer.DoesNotExist:
            raise exceptions.AuthenticationFailed("User not found")

        return (CustomerPrincipal(customer), token)
