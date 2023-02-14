from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),

    # opportunities
    path('opportunities/', views.opportunities, name='opportunities'),
]
