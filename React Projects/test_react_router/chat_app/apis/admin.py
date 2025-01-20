from django.contrib import admin

# Register your models here.
from .models import user_data , User_contacts

admin.site.register(user_data)
admin.site.register(User_contacts)