from rest_framework import serializers
from .models import *

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'

class InstallmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Installment
        fields = '__all__'

class InstallmentpaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Installmentpayment  
        fields = '__all__'