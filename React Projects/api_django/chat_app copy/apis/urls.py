from django.urls import path,include
from . import views 
urlpatterns = [
   
    path("",views.user_create),
    path("user_create/",views.user_create),
]
