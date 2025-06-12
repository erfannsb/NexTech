from django.urls import path
from .views import hello
from .views import get_dominant_color

urlpatterns = [
    path("hello/", hello),
    path('dominant-color/', get_dominant_color),
]
