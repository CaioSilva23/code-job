from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    return render(request, 'home.html')


def opportunities(request):
    return render(request, 'opportunities.html')