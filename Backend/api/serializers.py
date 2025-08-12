from rest_framework import serializers
from users.models import Customer
import hashlib


def verify_password(plain_password: str, customer: Customer) -> bool:
    # TODO: Replace with your real password check (PBKDF2/BCrypt). This is a placeholder.
    # Example placeholder: compare plain password to stored hash (dev only!)
    return plain_password == customer.passwordhash


class CustomerLoginSerializer(serializers.Serializer):
    identifier = serializers.CharField()  # email or phone
    password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        ident = attrs["identifier"].strip()
        try:
            customer = Customer.objects.get(emailaddress=ident)
        except Customer.DoesNotExist:
            try:
                customer = Customer.objects.get(phonenumber=ident)
            except Customer.DoesNotExist:
                raise serializers.ValidationError("Invalid credentials")

        if not verify_password(attrs["password"], customer):
            raise serializers.ValidationError("Invalid credentials")

        attrs["customer"] = customer
        return attrs
