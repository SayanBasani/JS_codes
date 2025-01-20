from rest_framework.response import Response
from rest_framework.decorators import api_view
from apis.serializer import create_user_serializer
from apis.models import user_data
# Create your views here.


@api_view(['GET','POST'])
def singup(request):
  if request.method == 'GET':
    all_user = user_data.objects.all()
    serializ = create_user_serializer(all_user, many = True)
    return Response(serializ.data)

  elif request.method == 'POST':
    data = request.data
    serializ = create_user_serializer(data = data)
    if serializ.is_valid():
      serializ.save()
      return Response(serializ.data)
    return Response(serializ.errors)
