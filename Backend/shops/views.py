from rest_framework import viewsets, status
from .serializers import *
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from .permissions import IsShopOwnerOrReadOnly
from rest_framework.response import Response
from rest_framework.decorators import action
from orders.models import Ordering
from orders.serializers import OrderingSerializer
from products.models import Product
from products.serializers import ProductSerializer

class ShopViewSet(viewsets.ModelViewSet):
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer
    permission_classes = [IsShopOwnerOrReadOnly]

    def get_queryset(self):
        queryset = super().get_queryset()
        adminid = self.request.query_params.get("adminid")
        if adminid:
            queryset = queryset.filter(shopadmin__adminid=adminid)
        return queryset
    
    @action(detail=True, methods=["get"])
    def orders(self, request, pk=None):
        shop = self.get_object()

        # read ?status=Pending (default None)
        status = request.query_params.get("status", None)

        orders = Ordering.objects.filter(
            orderitem__shopproductid__shopid=shop.shopid
        ).distinct()

        if status:
            orders = orders.filter(orderstatus=status)

        serializer = OrderingSerializer(orders, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=["get"])
    def products(self, request, pk=None):
        shop = self.get_object()
        products = Product.objects.filter(shops__shopid=shop.shopid).distinct()

        # Get "name" param from query string (?name=...)
        name_query = request.query_params.get("name")
        if name_query:
            products = products.filter(name__icontains=name_query)

        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    
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
    filterset_fields = ['adminid']