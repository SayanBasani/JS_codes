from rest_framework.response import Response
from rest_framework.decorators import api_view
from apis.serializer import create_user_serializer
from apis.models import user_data
import json
# Create your views here.
import uuid  # To generate unique IDs

def generate_id(data):
    print("Before generating ID:", data)
    # Generate a unique ID
    unique_id = str(uuid.uuid4())[:15]  # Generate a 15-character unique ID
    # Add it to the dictionary
    data['user_id'] = unique_id
    return data

@api_view(['GET'])
def alluser(request):
  if request.method == 'GET':
    all_user = user_data.objects.all()
    serializ = create_user_serializer(all_user, many = True)
    return Response(serializ.data)
  
@api_view(['POST'])
def singup(request):
  if request.method == 'GET':
    all_user = user_data.objects.all()
    serializ = create_user_serializer(all_user, many = True)
    return Response(serializ.data)

  elif request.method == 'POST':
    print("post is hited")
    data = request.data
    data = generate_id(data)
    print(data)
    serializ = create_user_serializer(data = data)
    if serializ.is_valid():
      serializ.save()
      return Response(serializ.data)
    return Response(serializ.errors)
    # return Response({"message":data })

@api_view(['GET'])
def home(request):
  return Response({'message':'You are good to Go'})

@api_view(['DELETE'])
def delete(request):
  if request.method == "DELETE":
    print("delete request is hit")
    data = request.data
    print(f"data is: {data} ")
    user = user_data.objects.get(id = data['id'] )
    user.delete()
  return Response({'message':'You are good to Go'})


