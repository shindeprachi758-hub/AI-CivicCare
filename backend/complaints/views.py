
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied

from .models import Complaint
from .serializers import ComplaintSerializer, ComplaintStatusSerializer
from accounts.permissions import IsCitizen, IsOfficer, IsAdmin


class ComplaintListCreateView(generics.ListCreateAPIView):
    serializer_class = ComplaintSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user

        if not hasattr(user, "profile"):
            return Complaint.objects.none()

        role = user.profile.role

        if role == "CITIZEN":
            return Complaint.objects.filter(
                citizen=user
            ).order_by("-created_at")

        if role == "OFFICER" and user.profile.department_id:
            return Complaint.objects.filter(
                department_id=user.profile.department_id
            ).order_by("-created_at")

        if role == "ADMIN":
            return Complaint.objects.all().order_by("-created_at")

        return Complaint.objects.none()

    def get_permissions(self):
        if self.request.method == "POST":
            permission_classes = [IsAuthenticated, IsCitizen]
        else:
            permission_classes = [
                IsAuthenticated,
                IsCitizen | IsOfficer | IsAdmin,
            ]

        return [permission() for permission in permission_classes]

    def perform_create(self, serializer):
        serializer.save(citizen=self.request.user)


class ComplaintStatusUpdateView(generics.UpdateAPIView):
    serializer_class = ComplaintStatusSerializer
    permission_classes = [
        IsAuthenticated,
        IsOfficer | IsAdmin,
    ]
    http_method_names = ["patch", "options", "head"]

    def get_queryset(self):
        user = self.request.user

        if not hasattr(user, "profile"):
            return Complaint.objects.none()

        if user.profile.role == "ADMIN":
            return Complaint.objects.all()

        if (
            user.profile.role == "OFFICER"
            and user.profile.department_id is not None
        ):
            return Complaint.objects.filter(
                department_id=user.profile.department_id
            )

        return Complaint.objects.none()


