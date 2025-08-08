from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()

router.register(r'customers', CustomerViewSet, basename='customers') 
router.register(r'admins', AdminsViewSet, basename='admins')

urlpatterns = router.urls
