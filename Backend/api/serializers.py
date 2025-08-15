from rest_framework import serializers
from users.models import Customer
from django.contrib.auth.hashers import check_password


def verify_password(plain_password: str, customer: Customer) -> bool:
    # Use Django's built-in password verification
    return check_password(plain_password, customer.password)


class CustomerLoginSerializer(serializers.Serializer):
    identifier = serializers.CharField()  # email or phone
    password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        ident = attrs["identifier"].strip()

        # --- Debug prints ---
        print(f"Identifier received from request: '{ident}'")
        print("Customer exists by email:", Customer.objects.filter(emailaddress=ident).exists())
        print("Customer exists by phone:", Customer.objects.filter(phonenumber=ident).exists())
        # ---------------------
        try:
            customer = Customer.objects.get(emailaddress=ident)
        except Customer.DoesNotExist:
            try:
                customer = Customer.objects.get(phonenumber=ident)
            except Customer.DoesNotExist:
                raise serializers.ValidationError("Invalid credentials")

        if not verify_password(attrs["password"], customer):
            raise serializers.ValidationError("Invalid pass credentials")

        attrs["customer"] = customer
        return attrs
