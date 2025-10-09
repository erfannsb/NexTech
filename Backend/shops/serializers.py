from rest_framework import serializers
from .models import Shop, ShopAdmin, ShopProduct, Discount
from users.serializers import CustomerPublicSerializer


class ShopAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopAdmin
        fields = '__all__'


class ShopSerializer(serializers.ModelSerializer):
    admins = serializers.SerializerMethodField()
    adminid = serializers.IntegerField(write_only=True) 

    class Meta:
        model = Shop
        fields = '__all__'   # includes shop fields + admins
        extra_fields = ['adminid']

    def get_admins(self, obj):
        shop_admins = ShopAdmin.objects.filter(shopid=obj)
        admin_customers = [shop_admin.adminid for shop_admin in shop_admins]
        return CustomerPublicSerializer(admin_customers, many=True).data
    
    def create(self, validated_data):
        adminid = validated_data.pop('adminid')  # now safe
        shop = Shop.objects.create(
            shopname=validated_data.pop('shopname'),
            postalcode=validated_data.pop('postalcode'),
            rating=validated_data.pop('rating', 0.00)  # optional if you want
        )

        ShopAdmin.objects.create(
            shopid=shop,
            adminid_id=adminid
        )

        return shop   # return shop, not ShopAdmin


class ShopProductSerializer(serializers.ModelSerializer):
    shop = ShopSerializer(source='shopid', read_only=True)

    class Meta:
        model = ShopProduct
        fields = '__all__'

class DiscountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discount
        fields = '__all__'
