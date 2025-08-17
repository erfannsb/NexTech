from rest_framework import serializers
from .models import Customer, Admins
from django.contrib.auth.hashers import make_password


class CustomerRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
         model = Customer
         fields = ['emailaddress', 'password', 'firstname', 'lastname', 'isshopadmin']
         extra_kwargs = {
             'emailaddress': {'required': True, 'allow_blank': False},
             'password': {'write_only': True, 'required': True, 'allow_blank': False},
             'firstname': {'required': True, 'allow_blank': False},
             'lastname': {'required': True, 'allow_blank': False},
             'isshopadmin': {'required': True}
         }

    def validate(self, attr):
        # Custom validation logic can be added here
        if not attr.get('emailaddress'):
            raise serializers.ValidationError("Email is required")
        if not attr.get('password'):
            raise serializers.ValidationError("Password is required")
        return attr
    
    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)
    
class CustomerPublicSerializer(serializers.ModelSerializer):

    class Meta:
        model = Customer
        fields = ['customerid', 'firstname', 'lastname']
        
class CustomerPrivateSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = Customer
        fields = "__all__"
        extra_kwargs = {
            'password': {'write_only': True, 'required': False},   
        }

    def update(self, instance, validated_data):
        if 'password' in validated_data:
            validated_data['password'] = make_password(validated_data['password'])
        return super().update(instance, validated_data)
    

class AdminsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admins
        fields = '__all__'
