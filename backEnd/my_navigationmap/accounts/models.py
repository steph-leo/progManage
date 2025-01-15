from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    USER_TYPES = (
        ('student', 'Student'),
        ('worker', 'Worker'),
        ('staff', 'Staff')
    )
    user_type = models.CharField(max_length=10, choices=USER_TYPES)
    phone_number = models.CharField(max_length=15, unique=True)
    department = models.CharField(max_length=100)
    registration_number = models.CharField(max_length=20, blank=True)
    employee_id = models.CharField(max_length=20, blank=True)
