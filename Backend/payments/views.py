from rest_framework import viewsets
from .serializers import *
from .permissions import IsInstallmentOwnerOrReadOnly

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
    filterset_fields = ['orderid']
    
class InstallmentViewSet(viewsets.ModelViewSet):
    queryset = Installment.objects.all()
    serializer_class = InstallmentSerializer
    permission_classes = [IsInstallmentOwnerOrReadOnly]
    filterset_fields = ['installmentstatus']


class InstallmentPaymentViewSet(viewsets.ModelViewSet):
    queryset = Installmentpayment.objects.all()
    serializer_class = InstallmentpaymentSerializer