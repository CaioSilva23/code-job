from django.shortcuts import render

from django.http import HttpResponseRedirect # Redireciona a página após o submit
from django.core.mail import EmailMultiAlternatives
from django.contrib import messages
from django.template import loader # renderiza o template no corpo do email
from django.conf import settings
from django.core.mail import send_mail


def home(request):
    return render(request, 'home.html')


def opportunities(request):
    return render(request, 'opportunities.html')


# ============= SEND EMAIL FORM ==================

def send_email_frontend(request):
    # if request.method == 'POST':

    # subject, from_email, to = 'Olá', settings.DEFAULT_FROM_EMAIL, 'caio_ceac23@hotmail.com'
    # text_content = 'This is an important message.'
    # html_content = '<p>This is an <strong>important</strong> message.</p>'
    # msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
    # msg.attach_alternative(html_content, "text/html")
    # msg.send()
    send_mail('TESTE', 'TESTE', settings.DEFAULT_FROM_EMAIL, ['caio_ceac23@hotmail.com'])
    return HttpResponseRedirect('/')
        # nome = request.POST.get('nome')
        # idade = request.POST.get('idade')
        # email = request.POST.get('email')
        # telefone = request.POST.get('telefone')
        # endereco = request.POST.get('endereco')
        # experiencia = request.POST.get('experiencia')
        # skills = request.POST.get('skills')
        # #

        # template = loader.get_template('resumo_form.txt')
        # context = {
        #         'nome':nome,
        #         'idade':idade,
        #         'email':email,
        #         'telefone':telefone,
        #         'endereco':endereco,
        #         'experiencia':experiencia,
        #         'skills':skills,
        # }
        # mensagem = template.render(context)
        # email = EmailMultiAlternatives(
        #     subject="Frontend - Candidato",
        #     from_email='caiocsilva97@gmail.com',
        #     to=['caio_ceac23@hotmail.com']
        # )
        # email.content_subtype = 'html'
        # curriculo = request.FILES['curriculo']
        # email.attach(curriculo.name, curriculo.read(), curriculo.content_type)
        # email.send()
        # messages.success(request, 'Curriculo frontend enviado com sucesso!')
        # return HttpResponseRedirect('/')




def send_email_backend(request):
    pass

def send_email_fullstack(request):
    pass

def send_email_datascience(request):
    pass

