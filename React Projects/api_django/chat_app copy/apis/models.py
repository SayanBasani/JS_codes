from django.db import models

# Create your models here.
class User_data(models.Model):
  user_name = models.CharField(max_length=50)
  user_id = models.CharField(max_length=50)
  user_mobile_no = models.CharField(max_length=15,unique=True)
  user_email = models.CharField(max_length=15)
  user_password = models.CharField(max_length=50)
  def __str__(self):
    return self.user_id

class User_contacts(models.Model):
  user_data = models.ForeignKey(User_data ,on_delete=models.CASCADE)
  user_contact_mobile_name = models.CharField(max_length=50)
  user_contact_mobile_number = models.CharField(max_length=15)
  def __str__(self):
    return self.user_contact_mobile_name
  