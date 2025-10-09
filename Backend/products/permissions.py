from rest_framework import permissions

class IsCommentOwnerOrReadOnly(permissions.BasePermission):
    """
    Read-only for everyone.
    Write access only for comment owner.
    """

    def has_object_permission(self, request, view, obj):
        # If the request method is safe (GET, HEAD, OPTIONS), allow access
        if request.method in permissions.SAFE_METHODS:
            return True
        
        return obj.customerid == request.user.customer  # Assuming request.user is a Customer instance