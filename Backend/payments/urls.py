from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()

router.register(r'payments', PaymentViewSet, basename = 'payments') 
router.register(r'installments', InstallmentViewSet, basename = 'installments')
router.register(r'installmentPayments', InstallmentPaymentViewSet, basename = 'installmentPayments')

urlpatterns = router.urls
