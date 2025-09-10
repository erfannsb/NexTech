from rest_framework import permissions
from shops.models import ShopAdmin

class IsShopOwnerOrReadOnly(permissions.BasePermission):
    """
    Read-only for everyone.
    Write access for shop admins.
    Creation allowed for authenticated users.
    """

    def has_permission(self, request, view):
        # Always allow safe methods
        if request.method in permissions.SAFE_METHODS:
            return True

        # For other write ops (PUT, PATCH, DELETE), defer to object-level
        return True

    def has_object_permission(self, request, view, obj):
        # Safe methods are always allowed
        if request.method in permissions.SAFE_METHODS:
            return True

        # Only shop admins can modify existing shops
        try:
            return ShopAdmin.objects.filter(
                shopid=obj,
                adminid=request.user.customer
            ).exists()
        except AttributeError:
            return False
