
from rest_framework import serializers
from .models import Complaint


class ComplaintSerializer(serializers.ModelSerializer):
    citizen_username = serializers.CharField(
        source="citizen.username",
        read_only=True
    )

    department_name = serializers.CharField(
        source="department.name",
        read_only=True,
        default=None
    )

    class Meta:
        model = Complaint
        fields = [
            "id",
            "citizen",
            "citizen_username",
            "department",
            "department_name",
            "title",
            "description",
            "category",
            "priority",
            "status",
            "address",
            "latitude",
            "longitude",
            "image",
            "created_at",
            "updated_at",
        ]

        read_only_fields = [
            "id",
            "citizen",
            "priority",
            "status",
            "created_at",
            "updated_at",
        ]


class ComplaintStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Complaint
        fields = ["status"]