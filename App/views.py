from django.shortcuts import render
from django.utils.html import strip_tags
from django.http import HttpResponseRedirect # Redireciona a página após o submit
from django.core.mail import EmailMultiAlternatives
from django.contrib import messages
from django.template import loader # renderiza o template no corpo do email
from django.conf import settings


def home(request):
    return render(request, 'home.html')


def opportunities(request):
    return render(request, 'opportunities.html')


# ============= SEND EMAIL FORM ==================

def send_email_frontend(request):
    if request.method == 'POST':
        nome = request.POST.get('nome')
        idade = request.POST.get('idade')
        email = request.POST.get('email')
        telefone = request.POST.get('telefone')
        endereco = request.POST.get('endereco')
        experiencia = request.POST.get('experiencia')
        skills = request.POST.get('skills')
        #

        template = loader.get_template('resumo_form.html')
        context = {
                'nome':nome,
                'idade':idade,
                'email':email,
                'telefone':telefone,
                'endereco':endereco,
                'experiencia':experiencia,
                'skills':skills,
        }
        mensagem = template.render(context)
        text = strip_tags(mensagem)
        email = EmailMultiAlternatives(
            subject="Frontend - Candidato",body=text,
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=[context['email']]
        )
     
        curriculo = request.FILES['curriculo']
        email.attach(curriculo.name, curriculo.read(), curriculo.content_type)
        email.send()
        messages.success(request, 'Curriculo frontend enviado com sucesso!')
        return HttpResponseRedirect('/')




def send_email_backend(request):
    pass

def send_email_fullstack(request):
    pass

def send_email_datascience(request):
    pass

