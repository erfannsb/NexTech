from rest_framework import serializers
from .models import Product, Category, ProductCategory, Details, ImageurlProduct, Comment
from shops.serializers import ShopProductSerializer
from users.models import Customer
from shops.models import ShopProduct
from django.utils import timezone

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['customerid', 'firstname', 'lastname']

class ProductSerializer(serializers.ModelSerializer):
    shop_products = serializers.SerializerMethodField()
    categories_names = serializers.SerializerMethodField()
    is_available = serializers.SerializerMethodField()  
    shopid = serializers.IntegerField(write_only=True)
    stockquantity = serializers.IntegerField(write_only=True, required=False, default=0)
    price = serializers.SerializerMethodField()
    total_sells = serializers.SerializerMethodField()
    class Meta:
        model = Product
        fields = [
            'productid', 'name', 'description', 'createdat', 'rating', 
            'thumbnail', 'brand', 'countedrates', 'categories', 'shops',
            'shop_products', 'categories_names', 'is_available', 'price', 'total_sells', 'stockquantity', 'shopid'
        ]

    def get_shop_products(self, obj):
        related_qs = getattr(obj, 'shopproduct_set', None)
        if related_qs is None:
            return []
        return ShopProductSerializer(related_qs.all(), many=True).data

    def get_categories_names(self, obj):
        categories = obj.categories.all()
        return [category.categoryname for category in categories] if categories.exists() else []

    def get_is_available(self, obj):
        """
        Returns True if the product exists in at least one shop with stock > 0
        """
        related_qs = getattr(obj, 'shopproduct_set', None)
        if related_qs is None:
            return False
        return related_qs.filter(stockquantity__gt=0).exists()
    
    def get_price(self, obj):
        """
        Returns the minimum price across all shops for this product
        """
        return getattr(obj, 'price', None)
    
    def get_total_sells(self, obj):
        """
        Returns the total sales across all shops for this product
        """
        return getattr(obj, 'total_sells', None)
    
    def create(self, validated_data):
        shop_id = validated_data.pop("shopid")
        stockquantity = validated_data.pop("stockquantity", 0)
        price = validated_data.pop("price", 0.0)

        product = Product.objects.create(**validated_data)

        ShopProduct.objects.create(
            shopid_id=shop_id,
            productid=product,
            stockquantity=stockquantity,
            sells=0,
            price=price,
        )

        return product


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = '__all__'

class DetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Details
        fields = '__all__'

class ImageurlProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageurlProduct
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    customerid = serializers.PrimaryKeyRelatedField(read_only=True)
    customer = CustomerSerializer(source='customerid', read_only=True)
    customer_name = serializers.SerializerMethodField()
    formatted_date = serializers.SerializerMethodField()
    replies = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = '__all__'

    def get_customer_name(self, obj):
        if obj.customerid:
            return f"{obj.customerid.firstname} {obj.customerid.lastname}"
        return "Unknown User"
    
    def get_formatted_date(self, obj):
        if obj.commentdate:
            comment_time = obj.commentdate
            if timezone.is_naive(comment_time):
                comment_time = timezone.make_aware(comment_time, timezone.get_current_timezone())
            
            comment_time = timezone.localtime(comment_time)
            now = timezone.localtime(timezone.now())
            diff = now - comment_time

            if diff.total_seconds() < 60:
                return "Just now"
            if diff.days == 0:
                if diff.seconds < 3600:
                    minutes = diff.seconds // 60
                    return f"{minutes} minute{'s' if minutes != 1 else ''} ago"
                else:
                    hours = diff.seconds // 3600
                    return f"{hours} hour{'s' if hours != 1 else ''} ago"
            elif diff.days == 1:
                return "1 day ago"
            elif diff.days < 7:
                return f"{diff.days} days ago"
            elif diff.days < 30:
                weeks = diff.days // 7
                return f"{weeks} week{'s' if weeks != 1 else ''} ago"
            elif diff.days < 365:
                months = diff.days // 30
                return f"{months} month{'s' if months != 1 else ''} ago"
            else:
                years = diff.days // 365
                return f"{years} year{'s' if years != 1 else ''} ago"
        return "Unknown date"

    
    def get_replies(self, obj):
        # Get all replies to this comment (comments that have this comment as parent)
        replies = Comment.objects.filter(parentcommentnum=obj.commentnum)
        if replies.exists():
            return CommentSerializer(replies, many=True, context=self.context).data
        return []