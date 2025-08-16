from rest_framework import viewsets
from .serializers import *

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

class InstallmentViewSet(viewsets.ModelViewSet):
    queryset = Installment.objects.all()
    serializer_class = InstallmentSerializer
    permission_classes = [IsInstallmentOwnerOrReadOnly]


class InstallmentPaymentViewSet(viewsets.ModelViewSet):
    queryset = Installmentpayment.objects.all()
    serializer_class = InstallmentpaymentSerializer