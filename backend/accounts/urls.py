
from django.urls import path

from .views import CitizenRegistrationView

urlpatterns = [
    path(
        "register/",
        CitizenRegistrationView.as_view(),
        name="citizen-register",
    ),
]