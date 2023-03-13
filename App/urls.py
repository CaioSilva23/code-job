from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),

    # opportunities
    path('opportunities/', views.opportunities, name='opportunities'),

    # path envio emails form frontend
    path('send_email_frontend', views.send_email_frontend, name='send_email_frontend'),

    # path envio emails form backend
    path('send_email_backend', views.send_email_backend, name='send_email_backend'),

    # path envio emails form fullstack
    path('send_email_fullstack', views.send_email_fullstack, name='send_email_fullstack'),
    
    # path envio emails form datascience
    path('send_email_datascience', views.send_email_datascience, name='send_email_datascience'),


]
