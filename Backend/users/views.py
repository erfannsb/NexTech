from rest_framework import viewsets
from .serializers import *
from .permissions import IsOwnerOrReadOnly
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.throttling import AnonRateThrottle
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import check_password

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    
    def get_serializer_class(self):
        if self.action == 'create':
            return CustomerRegistrationSerializer
        elif self.action in ['list', 'retrieve']:
            
            if hasattr(self.request, 'user') and self.request.user.is_authenticated:
                if self.action == 'retrieve' and str(self.kwargs.get('pk')) == str(self.request.user.pk):
                    return CustomerPrivateSerializer
            return CustomerPublicSerializer
        elif self.action in ['update', 'partial_update']:
            return CustomerPrivateSerializer
        return CustomerPublicSerializer
    
    def get_permissions(self):
        """
            Set Permissions based on actions
        """
        if self.action == 'create':
            permission_classes = [AllowAny]
        elif self.action in ['list', 'retrieve']:
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
        
        return [permission() for permission in permission_classes]
    
    def get_throttles_classes(self):
        """Apply rate limmiting to registration"""
        if self.action == 'create':
            return [AnonRateThrottle]
        return []
    
    def get_queryset(self):
        """Filter queryset based on user and action"""
        if self.action in ['update', 'partial_update', 'destroy']:
            if self.request.user.is_authenticated:
                return Customer.objects.filter(pk=self.request.user.pk)
            return Customer.objects.none()
        return Customer.objects.all()
    

class AdminsViewSet(viewsets.ModelViewSet):
    queryset = Admins.objects.all()
    serializer_class = AdminsSerializer

class PasswordVerificationView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        """
        Verify the current password of the authenticated user.
        """

        password = request.data.get('password')


        if not password:
            return Response({
                'error': 'password is required',
                'valid': False
            }, status=status.HTTP_400_BAD_REQUEST)
        
        if check_password(password, request.user.password):
            return Response({
                'valid': True
            }, status=status.HTTP_200_OK)
        else:
            return Response({
                'valid': False,
                'error': 'Invalid password'
            }, status=status.HTTP_400_BAD_REQUEST)
        
        