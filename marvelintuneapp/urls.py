# marvelintune/urls.py
from django.urls import path
from django.conf import settings
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('buscador/', views.buscador, name='buscador'),
    path('blog/', views.blog, name='blog'),
]
