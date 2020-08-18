from django.shortcuts import render

def index(request):
    #player_image = '/static/images/tardis4.png'
    #D_image = '/static/images/yellowD.png'
    return render(request, 'index2.html')
