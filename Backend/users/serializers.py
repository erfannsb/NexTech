from rest_framework import serializers
from .models import Customer, Admins, Shopadmin

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'


class AdminsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admins
        fields = '__all__'


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'


class ShopadminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shopadmin
        fields = '__all__'