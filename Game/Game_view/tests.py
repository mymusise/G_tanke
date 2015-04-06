from django.test import TestCase

# Create your tests here.
from django.conf.urls import patterns, include, url
from django.conf import settings
# Create your tests here.
urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'temp.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$','Game_view.views.index'),
    url('^static/(?P<path>.*)$','django.views.static.serve',{'document_root':settings.STATIC_ROOT},name='static'),
)