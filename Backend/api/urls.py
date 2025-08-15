from django.urls import path
from .views import get_dominant_color, CustomerLoginView, MeView, CustomerLogoutView, TokenRefreshView

urlpatterns = [
    path('dominant-color/', get_dominant_color),
    path('auth/login/', CustomerLoginView.as_view()),
    path('auth/me/', MeView.as_view()),
    path('auth/logout/', CustomerLogoutView.as_view()),
    path('auth/refresh/', TokenRefreshView.as_view()),
]


