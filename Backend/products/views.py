from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Product
from .serializers import *
from .filters import ProductFilter 

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_class = ProductFilter
    search_fields = ['name', 'brand']

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ProductCategoryViewSet(viewsets.ModelViewSet):
    queryset = ProductCategory.objects.all()
    serializer_class = ProductCategorySerializer

class DetailsViewSet(viewsets.ModelViewSet):
    queryset = Details.objects.all()
    serializer_class = DetailsSerializer


class ImageurlProductViewSet(viewsets.ModelViewSet):
    queryset = ImageurlProduct.objects.all()
    serializer_class = ImageurlProductSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

