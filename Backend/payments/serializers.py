from rest_framework import serializers
from .models import *
from users.serializers import CustomerPublicSerializer

class PaymentSerializer(serializers.ModelSerializer):
    customer = serializers.SerializerMethodField()
    
    class Meta:
        model = Payment
        fields = '__all__'  # This gets all Payment fields
    
    def get_customer(self, obj):
        customer = obj.orderid.customerid
        return CustomerPublicSerializer(customer).data
    
    def to_representation(self, instance):
        # Get the standard representation
        data = super().to_representation(instance)
        # Add the customer field to the fields list
        return data

class InstallmentSerializer(serializers.ModelSerializer):
    customer = serializers.SerializerMethodField()

    class Meta:
        model = Installment
        fields = '__all__'

    def get_customer(self, obj):
        customer = obj.orderid.customerid
        return CustomerPublicSerializer(customer).data
    
    def to_representation(self, instance):
        # Get the standard representation
        data = super().to_representation(instance)
        # Add the customer field to the fields list
        return data
        

class InstallmentpaymentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Installmentpayment  
        fields = '__all__'