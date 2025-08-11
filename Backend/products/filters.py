import django_filters
from .models import Product

class ProductFilter(django_filters.FilterSet):
    category = django_filters.NumberFilter(field_name="categories__categoryid")
    category_name = django_filters.CharFilter(field_name="categories__categoryname", lookup_expr='icontains')

    price_min = django_filters.NumberFilter(field_name="price", lookup_expr='gte')
    price_max = django_filters.NumberFilter(field_name="price", lookup_expr='lte')

    class Meta:
        model = Product
        fields = ['category', 'category_name', 'name', 'brand']
