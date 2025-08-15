from rest_framework import serializers
from .models import Customer, Admins
from django.contrib.auth.hashers import make_password


class CustomerSerializer(serializers.ModelSerializer):
    # Make password write-only so it's not returned in responses
    password = serializers.CharField(write_only=True)
    
    class Meta:
        model = Customer
        fields = '__all__'
        extra_kwargs = {
            'password': {'write_only': True}
        }
    
    def create(self, validated_data):
        # Hash the password before saving
        if 'password' in validated_data:
            validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)
    
    def update(self, instance, validated_data):
        # Hash the password if it's being updated
        if 'password' in validated_data:
            validated_data['password'] = make_password(validated_data['password'])
        return super().update(instance, validated_data)

class AdminsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admins
        fields = '__all__'
