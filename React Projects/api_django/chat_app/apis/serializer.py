from rest_framework import serializers
from apis.models import user_data

class create_user_serializer(serializers.ModelSerializer):

  class Meta:
    model = user_data
    fields = '__all__'
    # exclude = ['user_id']
    