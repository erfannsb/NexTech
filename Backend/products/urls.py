from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()

router.register(r'products', ProductViewSet, basename='products') 
router.register(r'categories', CategoryViewSet, basename='categories')
router.register(r'productCategory', ProductCategoryViewSet, basename='productCategory')
router.register(r'details', DetailsViewSet, basename='details')
router.register(r'imageurlProduct', ImageurlProductViewSet, 'imageurlProduct')
router.register(r'comment', CommentViewSet, basename='comment')

urlpatterns = router.urls
