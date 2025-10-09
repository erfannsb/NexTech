from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()

router.register(r'orders', OrderingViewSet, basename = 'orders') 
router.register(r'orderItems', OrderitemViewSet, basename = 'orderItems')
router.register(r'orderPayments', OrderpaymentViewSet, basename = 'orderPayments')
router.register(r'shippings', ShippingViewSet, basename = 'shippings')
router.register(r'orderShippings', OrderShippingViewSet, basename='orderShippings')

urlpatterns = router.urls
