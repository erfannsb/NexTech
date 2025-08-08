import django_filters
from .models import Product

class ProductFilter(django_filters.FilterSet):
    category = django_filters.NumberFilter(field_name="categories__CategoryID")
    category_name = django_filters.CharFilter(field_name="categories__CategoryName", lookup_expr='icontains')

    class Meta:
        model = Product
        fields = ['category', 'category_name', 'price', 'name', 'brand']
