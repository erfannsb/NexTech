from rest_framework import viewsets
from .serializers import *

class ShopViewSet(viewsets.ModelViewSet):
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer

class ShopProductViewSet(viewsets.ModelViewSet):
    queryset = ShopProduct.objects.all()
    serializer_class = ShopProductSerializer

class DiscountViewSet(viewsets.ModelViewSet):
    queryset = Discount.objects.all()
    serializer_class = DiscountSerializer

class DiscountProductViewSet(viewsets.ModelViewSet):
    queryset = Discountproduct.objects.all()
    serializer_class = DiscountproductSerializer

class ShopAdminViewSet(viewsets.ModelViewSet):
    queryset = ShopAdmin.objects.all()
    serializer_class = ShopAdminSerializer