
from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):

    ROLE_CHOICES = [
        ('CITIZEN', 'Citizen'),
        ('OFFICER', 'Municipal Officer'),
        ('ADMIN', 'Administrator'),
    ]

    department = models.ForeignKey(
    'departments.Department',
    on_delete=models.SET_NULL,
    null=True,
    blank=True,
    related_name='officer_profiles'
)


    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='profile'
    )

    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES,
        default='CITIZEN'
    )

    phone = models.CharField(
        max_length=15,
        blank=True
    )

    address = models.TextField(
        blank=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    def __str__(self):
        return f"{self.user.username} - {self.role}"
