from rest_framework import viewsets
from .serializers import *

class OrderingViewSet(viewsets.ModelViewSet):
    queryset = Ordering.objects.all()
    serializer_class = OrderingSerializer

class OrderitemViewSet(viewsets.ModelViewSet):
    queryset = Orderitem.objects.all()
    serializer_class = OrderitemSerializer

class OrderpaymentViewSet(viewsets.ModelViewSet):
    queryset = Orderpayment.objects.all()
    serializer_class = OrderpaymentSerializer

class ShippingViewSet(viewsets.ModelViewSet):
    queryset = Shipping.objects.all()
    serializer_class = ShippingSerializer

