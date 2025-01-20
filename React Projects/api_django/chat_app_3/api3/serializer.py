from rest_framework import serializers
from .models import students_data


class student_serializer(serializers.ModelSerializer):

  class Meta:
    model = students_data
    fields = "__all__"
  # def validate(self, data):
  #   try:
  #     if data['age'] > 18 :
  #       raise serializers.ValidationError("you have to change the password")
  #   except:
  #     raise serializers.ValidationError("sdjbvj")