
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import student_serializer
from .models import students_data


@api_view(['GET','POST','PUT','PATCH','DELETE'])
def home(request):
  if request.method == 'GET':
    print("it is home")
    student = students_data.objects.all()
    serializer = student_serializer(student,many = True)
    return Response({"serializer":serializer.data})
  elif request.method == "POST":
    data = request.data
    print(data)
    serializer = student_serializer(data = data)

    if serializer.is_valid():
      print("it is valade for serializer")
      serializer.save()
      return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)
  elif request.method == "PUT":
    data = request.data
    print(f"data is {data}")
    serializer = student_serializer(data = data)
    if serializer.is_valid() :
      serializer.save()
      return Response(serializer.data)
    return Response(serializer.errors)
  elif request.method == "PATCH":
    data = request.data
    print(f"it is patch request -- {data}")
    student  = students_data.objects.get(id = data['id'])
    print(f"{data}--> {student}")

    serializer = student_serializer(student ,data = data , partial = True)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
    return Response(serializer.errors)
  
  else:
    data = request.data
    user = students_data.objects.get(id = data['id'])
    user.delete()
    return Response({'message':"the student is deleted"})
