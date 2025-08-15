from rest_framework import viewsets
from .serializers import *
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters

class ShopViewSet(viewsets.ModelViewSet):
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer

class ShopProductViewSet(viewsets.ModelViewSet):
    queryset = ShopProduct.objects.all()
    serializer_class = ShopProductSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['shopid', 'productid']  # filter by ID
    search_fields = ['shopid__ShopName', 'productid__name']  # search text in related objects

class DiscountViewSet(viewsets.ModelViewSet):
    queryset = Discount.objects.all()
    serializer_class = DiscountSerializer

class DiscountProductViewSet(viewsets.ModelViewSet):
    queryset = Discountproduct.objects.all()
    serializer_class = DiscountproductSerializer

class ShopAdminViewSet(viewsets.ModelViewSet):
    queryset = ShopAdmin.objects.all()
    serializer_class = ShopAdminSerializer