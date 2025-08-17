from rest_framework import permissions
from shops.models import ShopAdmin

class IsShopOwnerOrReadOnly(permissions.BasePermission):
    """
    Read-only for everyone.
    Write access only for shop admins.
    """
    def has_object_permission(self, request, view, obj):
        # If the request method is safe (GET, HEAD, OPTIONS), allow access
        if request.method in permissions.SAFE_METHODS:
            return True
       
        # For write operations, check if the user is an admin of this shop
        try:
            # Check if there's a ShopAdmin record linking this user to this shop
            return ShopAdmin.objects.filter(
                shopid=obj,
                adminid=request.user.customer
            ).exists()
        except AttributeError:
            # If request.user doesn't have a customer attribute, deny access
            return False