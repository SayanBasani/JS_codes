from rest_framework import serializers
from django.contrib.auth.hashers import check_password
from .models import User_data

# Signup Serializer
class SingupSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = User_data
        field = "__all__"


# Login Serializer
class LoginSerializer(serializers.Serializer):
    user_id = serializers.CharField()
    user_password = serializers.CharField(write_only=True)

    # def validate(self, attrs):
    #     try:
    #         user = User_data.objects.get(user_id=attrs['user_id'])
    #         if user and check_password(attrs['user_password'], user.user_password):
    #             refresh = RefreshToken.for_user(user)
    #             return {
    #                 'access': str(refresh.access_token),
    #                 'refresh': str(refresh),
    #             }
    #         else:
    #             raise serializers.ValidationError("Incorrect password")
    #     except User_data.DoesNotExist:
    #         raise serializers.ValidationError("User not found")
