from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()

router.register(r'shops', ShopViewSet, basename = 'shops') 
router.register(r'shopProduct', ShopProductViewSet, basename = 'shopProduct')
router.register(r'discounts', DiscountViewSet, basename = 'discounts')
router.register(r'discountProduct', DiscountProductViewSet, basename = 'discountProduct')

urlpatterns = router.urls
