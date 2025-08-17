from rest_framework import serializers
from .models import Shop, ShopAdmin, ShopProduct, Discount, Discountproduct
from users.serializers import CustomerPublicSerializer


class ShopAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopAdmin
        fields = '__all__'

        


class ShopSerializer(serializers.ModelSerializer):
    admins = serializers.SerializerMethodField()

    class Meta:
        model = Shop
        fields = '__all__'

    def get_admins(self, obj):
        # Get all ShopAdmin instances for this shop
        shop_admins = ShopAdmin.objects.filter(shopid=obj)
        # Extract the Customer objects (admin users)
        admin_customers = [shop_admin.adminid for shop_admin in shop_admins]
        # Serialize the admin customers
        return CustomerPublicSerializer(admin_customers, many=True).data


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


        