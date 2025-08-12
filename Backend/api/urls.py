from django.urls import path
from .views import get_dominant_color, CustomerLoginView, MeView

urlpatterns = [
    path('dominant-color/', get_dominant_color),
    path('auth/login/', CustomerLoginView.as_view()),
    path('auth/me/', MeView.as_view()),
]


