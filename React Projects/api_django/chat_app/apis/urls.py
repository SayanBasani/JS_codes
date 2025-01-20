
from django.urls import path
from apis import views

urlpatterns = [
  path('',views.home),
  path('alluser',views.alluser),
  path('create',views.singup),
  path('delete',views.delete),
]
