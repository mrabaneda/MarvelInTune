from django.shortcuts import render
from django.template.response import TemplateResponse
# Imports para usar BeautifulSoup
import requests
from bs4 import BeautifulSoup
# Create your views here.

def index(request):
    return render(request,'home.html')


def buscador(request):
    return render(request,'buscador.html')

#   ----------------USO WEBSCRAPPING----------------
def blog(request):
    url = 'https://marvelblog.com/'  # Reemplaza con la URL de la página a la que se desea hacer webscrapping
    response = requests.get(url)
    html = response.content

    # Crea un objeto BeautifulSoup con el HTML
    soup = BeautifulSoup(html, 'html.parser')

    # Encuentra todas las etiquetas <article>
    articles = soup.find_all('article')

    # Construye una lista con los artículos convertidos a cadenas de texto
    article_strings = [str(article) for article in articles]

    # Renderiza el template con el contenido HTML de los artículos
    return TemplateResponse(request, 'blog.html', {'articles': article_strings})