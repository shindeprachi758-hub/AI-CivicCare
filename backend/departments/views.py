

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, SAFE_METHODS


from .models import Department
from .serializers import DepartmentSerializer
from accounts.permissions import IsAdmin




class DepartmentPermission(IsAuthenticated):
    def has_permission(self, request, view):
        if not super().has_permission(request, view):
            return False


        if request.method in SAFE_METHODS:
            return True


        return IsAdmin().has_permission(request, view)




class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all().order_by("name")
    serializer_class = DepartmentSerializer
    permission_classes = [DepartmentPermission]