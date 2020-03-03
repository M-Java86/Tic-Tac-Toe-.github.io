from django.contrib import admin

# Register your models here.
from .models import House, Student

admin.site.register([House, Student])
