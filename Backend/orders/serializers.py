from rest_framework import serializers
from .models import *
from products.serializers import ProductSerializer
from shops.serializers import ShopProductSerializer

class OrderingSerializer(serializers.ModelSerializer):
    items = serializers.SerializerMethodField()
    class Meta:
        model = Ordering
        fields = '__all__'

    def get_items(self, obj):
        order_items = Orderitem.objects.filter(orderid=obj.orderid)
        return OrderitemSerializer(order_items, many=True).data

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

class ShippingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shipping
        fields = '__all__'


class OrderShippingSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderShipping
        fields = '__all__'