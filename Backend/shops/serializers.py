from rest_framework import serializers
from .models import Shop, ShopProduct, Discount, Discountproduct

class ShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop
        fields = '__all__'


class ShopProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopProduct
        fields = '__all__'


class DiscountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discount
        fields = '__all__'


class DiscountProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discountproduct
        fields = '__all__'