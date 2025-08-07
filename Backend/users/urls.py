from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()

router.register(r'customers', CustomerViewSet, basename='customers') 
router.register(r'admins', AdminsViewSet, basename='admins')
router.register(r'shopAdmin', ShopadmintViewSet, basename='shopAdmin')

urlpatterns = router.urls
