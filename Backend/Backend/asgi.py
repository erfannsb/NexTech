import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Backend.settings')

from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
from chat import consumers
from chat.middleware import JWTAuthMiddleware
from django.urls import path

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": JWTAuthMiddleware(
        URLRouter([
            path('ws/chat/', consumers.ChatConsumer.as_asgi()),
        ])
    ),
})
