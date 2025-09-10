from rest_framework import viewsets, filters
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend
from .models import Product, Category, ProductCategory, Details, ImageurlProduct, Comment
from .serializers import *
from .filters import ProductFilter 
from .permissions import IsCommentOwnerOrReadOnly
from django.db.models import Min

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_class = ProductFilter
    search_fields = ['name', 'brand']

    ordering_fields = ['price', 'createdat', 'rating', 'total_sells']
    ordering = ['-createdat']  # default ordering

    def get_queryset(self):
        from django.db.models import Subquery, OuterRef, Sum
        from shops.models import ShopProduct
        
        # Use subquery to get the minimum price for each product
        min_price_subquery = Subquery(
            ShopProduct.objects.filter(
                productid=OuterRef('pk')
            ).values('productid').annotate(
                min_price=Min('price')
            ).values('min_price')
        )
        
        # Use subquery to get total sells for each product
        total_sells_subquery = Subquery(
            ShopProduct.objects.filter(
                productid=OuterRef('pk')
            ).values('productid').annotate(
                total_sells=Sum('sells')
            ).values('total_sells')
        )
        
        queryset = (
            Product.objects.all()
            .annotate(price=min_price_subquery)
            .annotate(total_sells=total_sells_subquery)
        )
        
        # Handle custom ordering from frontend
        ordering = None
        if hasattr(self.request, 'query_params'):
            # DRF request
            ordering = self.request.query_params.get('ordering', None)
        else:
            # Django request
            ordering = self.request.GET.get('ordering', None)
        
        if ordering:
            queryset = self.apply_custom_ordering(queryset, ordering)
        
        return queryset
    
    def apply_custom_ordering(self, queryset, ordering):
        """Apply custom ordering based on frontend sort options"""
        ordering_map = {
            'mostRelevant': ['-createdat'],  # Default to newest for relevance
            'mostViewed': ['-createdat'],    # Could be based on views if you have that field
            'newest': ['-createdat'],
            'mostSelles': ['-total_sells'],
            'cheapest': ['price'],
            'mostExpensive': ['-price'],
        }
        
        if ordering in ordering_map:
            return queryset.order_by(*ordering_map[ordering])
        
        # If it's a direct field name, use it as is
        return queryset.order_by(ordering)
    
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ProductCategoryViewSet(viewsets.ModelViewSet):
    queryset = ProductCategory.objects.all()
    serializer_class = ProductCategorySerializer

class DetailsViewSet(viewsets.ModelViewSet):
    queryset = Details.objects.all()
    serializer_class = DetailsSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['productid']

class ImageurlProductViewSet(viewsets.ModelViewSet):
    queryset = ImageurlProduct.objects.all()
    serializer_class = ImageurlProductSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['productid']

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.filter(parentcommentnum__isnull=True)  # Only top-level comments
    serializer_class = CommentSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['productid']
    permission_classes = [IsCommentOwnerOrReadOnly, IsAuthenticatedOrReadOnly]  # Custom permission to restrict write access

    def perform_create(self, serializer):
        serializer.save(customerid=self.request.user)