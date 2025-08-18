from rest_framework import serializers
from .models import *
from products.serializers import ProductSerializer
from shops.serializers import ShopProductSerializer
from payments.models import Installment
from payments.serializers import InstallmentSerializer
from users.models import Customer
from users.serializers import CustomerPublicSerializer

class ShippingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shipping
        fields = '__all__'

class OrderingSerializer(serializers.ModelSerializer):
    items = serializers.SerializerMethodField()
    
    shipping = serializers.SerializerMethodField()

    installment = serializers.SerializerMethodField()

    customer = serializers.SerializerMethodField()

    class Meta:
        model = Ordering
        fields = '__all__'

    def get_items(self, obj):
        order_items = Orderitem.objects.filter(orderid=obj.orderid)
        return OrderitemSerializer(order_items, many=True).data
    
    def get_shipping(self, obj):
        try:
            # Since only one shipping per order, use get()
            shipping = Shipping.objects.get(orderid=obj.orderid)
            return ShippingSerializer(shipping).data
        except Shipping.DoesNotExist:
            return None
        
    def get_installment(self, obj):
        try:
            installment = Installment.objects.get(orderid=obj.orderid)
            return InstallmentSerializer(installment).data
        except Installment.DoesNotExist:
            return None
            
    def get_customer(self, obj):
        if obj.customerid:
            return CustomerPublicSerializer(obj.customerid).data
        return None


class OrderitemSerializer(serializers.ModelSerializer):
    shop_product = ShopProductSerializer(source='shopproductid', read_only=True)
    product = serializers.SerializerMethodField()

    class Meta:
        model = Orderitem
        fields = '__all__'

    def get_product(self, obj):
        if obj.shopproductid and obj.shopproductid.productid:
            return ProductSerializer(obj.shopproductid.productid).data
        return None
    
    

class OrderpaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orderpayment
        fields = '__all__'



class OrderShippingSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderShipping
        fields = '__all__'