from rest_framework import serializers
from .models import *

class OrderingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ordering
        fields = '__all__'

class OrderitemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orderitem
        fields = '__all__'

class OrderpaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orderpayment
        fields = '__all__'

class ShippingSerializer(serializers.ModelSerializer):
    class Meta:
        models = Shipping
        fields = '__all__'
