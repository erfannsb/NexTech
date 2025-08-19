from django.contrib import admin
from django.urls import path, include
from users.views import PasswordVerificationView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('products/', include('products.urls')),
    path('shops/', include('shops.urls')),
    path("payments/", include('payments.urls')),
    path('orders/', include("orders.urls")),
    path('users/', include("users.urls")),
    path('users/auth/password/verify/', PasswordVerificationView.as_view()),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)