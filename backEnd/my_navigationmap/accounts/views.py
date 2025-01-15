from django.shortcuts import render
from django.http import HttpResponse

def accounts(request):
    return HttpResponse("Hello, World!")

# Create your views here.
from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
