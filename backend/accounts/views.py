from django.shortcuts import render

# Create your views here.

from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .serializers import CitizenRegistrationSerializer


class CitizenRegistrationView(generics.CreateAPIView):
    serializer_class = CitizenRegistrationSerializer
    permission_classes = [AllowAny]


class CitizenLoginView(TokenObtainPairView):
    permission_classes = [AllowAny]


class JWTRefreshView(TokenRefreshView):
    permission_classes = [AllowAny]



from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .serializers import CitizenRegistrationSerializer


class CitizenRegistrationView(generics.CreateAPIView):
    serializer_class = CitizenRegistrationSerializer
    permission_classes = [AllowAny]


class CitizenLoginView(TokenObtainPairView):
    permission_classes = [AllowAny]


class JWTRefreshView(TokenRefreshView):
    permission_classes = [AllowAny]