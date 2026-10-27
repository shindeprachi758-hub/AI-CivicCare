
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from .views import CitizenRegistrationView

urlpatterns = [
    path(
        "register/",
        CitizenRegistrationView.as_view(),
        name="citizen-register",
    ),
    path(
        "login/",
        TokenObtainPairView.as_view(),
        name="token-obtain-pair",
    ),
    path(
        "token/refresh/",
        TokenRefreshView.as_view(),
        name="token-refresh",
    ),
]


