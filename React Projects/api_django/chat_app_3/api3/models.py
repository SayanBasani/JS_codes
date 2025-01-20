from django.db import models

# Create your models here.

class students_data(models.Model):
  id = models.AutoField(primary_key=True)
  name = models.CharField(max_length=255)
  password = models.CharField(max_length=50)
  def __str__(self):
    return self.name