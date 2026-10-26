
from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models


class Feedback(models.Model):
    complaint = models.OneToOneField(
        'complaints.Complaint',
        on_delete=models.CASCADE,
        related_name='feedback'
    )
    citizen = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='feedback_entries'
    )
    rating = models.PositiveSmallIntegerField(
        validators=[
            MinValueValidator(1),
            MaxValueValidator(5)
        ]
    )
    comment = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Feedback: {self.rating}/5"