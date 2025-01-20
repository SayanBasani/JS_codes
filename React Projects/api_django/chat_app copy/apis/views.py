from rest_framework.decorators import api_view
from apis.serializers import SingupSerializer,LoginSerializer
from apis.models import User_data
from rest_framework.response import Response

@api_view(['GET','POST'])
def user_create(request):
  if request.method == 'GET':
    user = User_data.objects.all()
    serializer = SingupSerializer(user , many = True)
    return Response(serializer.data)
  
  elif request.method == 'POST':
    data =  request.data
    print(f"data is --> {data}\n\n")
    serializer =  SingupSerializer(data = data)

    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
    return Response(serializer.errors)
 



# def user_create(request):
#   if request.method == 'POST':
#     serializer =  SingupSerializer(data = request.data)
#     if serializer.is_valid():
#       user = serializer.save()
#       return Response({'message':"user create sucessfull",'status_code':200})
#     return Response({'message':"user create is not " ,'error':serializer.error_messages ,'status_code':400})
#   else:
#     print("it is not a post requests")
#     return Response({'message':"it is not a post requests " ,'status_code':401})









