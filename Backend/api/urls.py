from django.urls import path
from .views import get_dominant_color

urlpatterns = [
    path('dominant-color/', get_dominant_color),
]
