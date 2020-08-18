from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from .forms import ContactForm

def index(request):
    #player_image = '/static/images/tardis4.png'
    #D_image = '/static/images/yellowD.png'
    return render(request, 'index2.html')


def contactView(request):
    if request.method == 'GET':
        form = ContactForm()
    else:
        form = ContactForm(request.POST)
        if form.is_valid():
            subject = form.cleaned_data['subject']
            from_email = form.cleaned_data['from_email']
            message = form.cleaned_data['message']
            try:

                send_mail('Subject here', 'Here is the message.', 'from@example.com', ['nelliesnoodles42@gmail.com'], fail_silently=False)
                #send_mail(subject, message, from_email, ['nelliesnoodles42@gmail.com'])
            except BadHeaderError:
                return HttpResponse('Invalid header found.')
            return redirect('success')
    return render(request, "email.html", {'form': form})

def successView(request):
    return HttpResponse('Success! Thank you for your message.')
