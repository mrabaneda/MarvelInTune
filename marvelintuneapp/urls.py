# marvelintune/urls.py
from django.urls import path
from django.conf import settings
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('canciones/', views.canciones, name='canciones'),
    path('blog/', views.blog, name='blog'),
    path('peliculas/', views.peliculas, name='peliculas'),

]
