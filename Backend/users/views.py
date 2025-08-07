from rest_framework import viewsets
from .serializers import *


class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class AdminsViewSet(viewsets.ModelViewSet):
    queryset = Admins.objects.all()
    serializer_class = AdminsSerializer

class ShopadmintViewSet(viewsets.ModelViewSet):
    queryset = Shopadmin.objects.all()
    serializer_class = ShopadminSerializer
