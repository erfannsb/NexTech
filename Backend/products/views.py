from rest_framework import viewsets, filters
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend
from .models import Product, Category, ProductCategory, Details, ImageurlProduct, Comment
from .serializers import *
from .filters import ProductFilter 
from .permissions import IsCommentOwnerOrReadOnly

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_class = ProductFilter
    search_fields = ['name', 'brand']

    ordering_fields = ['price', 'createdat', 'rating', 'total_sells']
    ordering = ['-createdat']  # default ordering

    
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