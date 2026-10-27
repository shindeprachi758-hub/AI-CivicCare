from django.urls import path
from .views import (
    ComplaintListCreateView,
    ComplaintStatusUpdateView,
)

urlpatterns = [
    path(
        "complaints/",
        ComplaintListCreateView.as_view(),
        name="complaint-list-create",
    ),
    path(
        "complaints/<int:pk>/status/",
        ComplaintStatusUpdateView.as_view(),
        name="complaint-status-update",
    ),
]