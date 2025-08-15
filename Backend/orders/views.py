from rest_framework import viewsets
from .serializers import *
from .permissions import IsOrderOwnerOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticated
from .permissions import IsOrderItemOwnerOrReadOnly
from rest_framework.exceptions import PermissionDenied

from api.authentication import CookieJWTAuthentication
class OrderingViewSet(viewsets.ModelViewSet):
    queryset = Ordering.objects.all()
    serializer_class = OrderingSerializer
    permission_classes = [IsOrderOwnerOrReadOnly]
    
    def get_queryset(self):
        user = self.request.user
        if user.is_authenticated:
            return Ordering.objects.filter(customerid=user)
        else:
            # For unauthenticated users, maybe return empty or all orders depending on policy
            return Ordering.objects.none()

    def perform_create(self, serializer):
        serializer.save(customerid=self.request.user)

class OrderitemViewSet(viewsets.ModelViewSet):
    queryset = Orderitem.objects.all()
    serializer_class = OrderitemSerializer
    permission_classes = [IsOrderItemOwnerOrReadOnly]

    def get_queryset(self):
        user = self.request.user
        if user.is_authenticated:
            return Orderitem.objects.filter(orderid__customerid=user)
        else:
            return Orderitem.objects.all()

    def perform_create(self, serializer):
        order_id = self.request.data.get("orderid")
        if not order_id:
            raise PermissionDenied("orderid is required")
        
        try:
            order = Ordering.objects.get(orderid=order_id)
        except Ordering.DoesNotExist:
            raise PermissionDenied("Order not found")

        if order.customerid != self.request.user:
            raise PermissionDenied("Cannot add items to someone else's order")

        serializer.save(orderid=order)

class OrderpaymentViewSet(viewsets.ModelViewSet):
    queryset = Orderpayment.objects.all()
    serializer_class = OrderpaymentSerializer

class ShippingViewSet(viewsets.ModelViewSet):
    queryset = Shipping.objects.all()
    serializer_class = ShippingSerializer

class OrderShippingViewSet(viewsets.ModelViewSet):
    queryset = OrderShipping.objects.all()
    serializer_class = OrderShippingSerializer
