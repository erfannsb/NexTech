from rest_framework import serializers
from .models import Shop, ShopAdmin, ShopProduct, Discount, Discountproduct

class ShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop
        fields = '__all__'

class ShopProductSerializer(serializers.ModelSerializer):
    shop = ShopSerializer(source='shopid', read_only=True)

    class Meta:
        model = ShopProduct
        fields = '__all__'

class DiscountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discount
        fields = '__all__'

class DiscountproductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discountproduct
        fields = '__all__'

class ShopAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopAdmin
        fields = '__all__'

        