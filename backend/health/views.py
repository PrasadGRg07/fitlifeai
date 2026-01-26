from django.shortcuts import render
# health/views.py
from django.http import HttpResponse

def test_view(request):
    return HttpResponse("Health app is working")
