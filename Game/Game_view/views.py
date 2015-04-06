from django.shortcuts import render
from django.http import HttpResponse
from django.template import RequestContext, loader
# Create your views here.
def index(req):
	return render(req,'view/index.html')