from rest_framework.permissions import BasePermission


class IsCitizen(BasePermission):
    message = "Citizen access only."

    def has_permission(self, request, view):
        user = request.user
        return (
            user.is_authenticated
            and hasattr(user, "profile")
            and user.profile.role == "CITIZEN"
        )


class IsOfficer(BasePermission):
    message = "Municipal officer access only."

    def has_permission(self, request, view):
        user = request.user
        return (
            user.is_authenticated
            and hasattr(user, "profile")
            and user.profile.role == "OFFICER"
            and user.profile.department_id is not None
        )


class IsAdmin(BasePermission):
    message = "Administrator access only."

    def has_permission(self, request, view):
        user = request.user
        return (
            user.is_authenticated
            and hasattr(user, "profile")
            and user.profile.role == "ADMIN"
        )
