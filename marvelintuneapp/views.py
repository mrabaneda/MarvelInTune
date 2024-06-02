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
    url = 'https://marvelblog.com/'  # Página a la que se desea hacer webscrapping
    response = requests.get(url)
    html = response.content

    # Crea un objeto BeautifulSoup con el HTML
    soup = BeautifulSoup(html, 'html.parser')

    # Encuentra todas las etiquetas <article>
    articles = soup.find_all('article')

   # Lista para almacenar los datos de los artículos
    article_strings = []

    for article in articles:
        # Encuentra todas las imágenes dentro del artículo
        img_tags = article.find_all('img')
        for img in img_tags:
            # Reemplaza el 'src' con 'data-src' si 'data-src' existe
            if 'data-src' in img.attrs:
                img['src'] = img['data-src']
        
        # Convierte el artículo modificado en una cadena de texto y lo añade a la lista
        article_strings.append(str(article))

    # Renderiza el template con el contenido HTML de los artículos
    return TemplateResponse(request, 'blog.html', {'articles': article_strings})