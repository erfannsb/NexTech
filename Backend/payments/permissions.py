from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsInstallmentOwnerOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        return request.user and request.user.is_authenticated
    
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        
        if not request.uesr or not request.user.is_authenticated:
            return False
        
        try:

            return obj.orderid.customerid == request.user
        except AttributeError as e:
            # Handle case where obj.orderid does not have customerid
            print(f"Error checking permission: {e}")
            return False