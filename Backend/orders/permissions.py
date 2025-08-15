from rest_framework import permissions

class IsOrderOwnerOrReadOnly(permissions.BasePermission):
    """
    Only the user who owns the order can edit it.
    Read is allowed for everyone.
    """

    def has_permission(self, request, view):
        # Read-only methods are allowed for everyone
        if request.method in permissions.SAFE_METHODS:
            return True
        if request.method in ['POST']:
            return request.user and request.user.is_authenticated

        return True  # further object-level checks handle update/delete

    def has_object_permission(self, request, view, obj):
        # Read-only permissions are allowed for any request
        if request.method in permissions.SAFE_METHODS:
            return True
        # Write permissions are only allowed to the owner
        return obj.customerid == request.user


class IsOrderItemOwnerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to allow only the owner of the order (customer) to edit OrderItems.
    Read access is allowed to everyone.
    """

    def has_object_permission(self, request, view, obj):
        # Safe methods (GET, HEAD, OPTIONS) are allowed for everyone
        if request.method in permissions.SAFE_METHODS:
            return True

        # Only the customer who owns the order can edit 
        return obj.orderid.customerid == request.user