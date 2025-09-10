# chat/middleware.py
import jwt
from django.conf import settings

class JWTAuthMiddleware:
    """
    Middleware for Django Channels 4 that authenticates users using JWT from query string.
    """

    def __init__(self, app):
        self.app = app

    async def __call__(self, scope, receive, send):
        # Extract token from query string: ws://.../ws/chat/?token=<jwt>
        query_string = scope.get("query_string", b"").decode()
        token = None
        if "token=" in query_string:
            # Robustly parse token from query string
            # Handles cases like token=abc.def&other=1
            tail = query_string.split("token=", 1)[-1]
            token = tail.split("&", 1)[0]

        # If no token in query params, try to extract access_token from Cookie header
        if not token:
            try:
                headers = dict(scope.get("headers", []))
                cookie_header = headers.get(b"cookie")
                if cookie_header:
                    cookies_str = cookie_header.decode()
                    # Split cookies on ';' and strip whitespace
                    for part in cookies_str.split(';'):
                        name_value = part.strip().split('=', 1)
                        if len(name_value) == 2:
                            name, value = name_value
                            if name == 'access_token':
                                token = value
                                break
            except Exception:
                # Any parsing error -> leave token as None
                token = None

        scope["user"] = None
        if token:
            try:
                payload = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
                customer_id = payload.get("customer_id")
                if customer_id:
                    scope["user"] = await self.get_customer(customer_id)
            except jwt.PyJWTError:
                pass  # leave scope["user"] as None

        return await self.app(scope, receive, send)

    @staticmethod
    async def get_customer(customer_id):
        # Import here to avoid triggering model import before Django apps are ready
        from asgiref.sync import sync_to_async
        from django.apps import apps
        customer_model = apps.get_model('users', 'Customer')
        customer = await sync_to_async(customer_model.objects.get)(pk=customer_id)
        return customer
