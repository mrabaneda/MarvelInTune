# Marvel in Tune
Prácticas Ingeniería de Sistemas 2022-23

**Descripción del proyecto:** 

En nuestra página web, podrás encontrar música relacionada con tus películas o personajes favoritos de Marvel. Además, queremos que tenga una segunda función muy útil: que muestre todos los cómics en los que aparece un personaje específico. De esta manera, se tendrá la oportunidad de explorar el mundo de Marvel de una manera más detallada y completa.
En resumen, nuestro objetivo con este proyecto es crear una visión más completa de cómo concebimos el universo Marvel, y ofrecer una experiencia única y enriquecedora que permita explorar este fascinante universo desde diferentes perspectivas.

*Miembros:*

 * :bust_in_silhouette:   Mauricio Luque Jiménez     :octocat:     
 * :bust_in_silhouette:  María Rabaneda Sierra     :octocat:


*Enlace URL pública:*  [Marvel In Tune App](https://back-api-dot-single-nebula-380811.ey.r.appspot.com/)


-----
### Cómo desplegar la aplicación web de Django

Ya sea dentro o fuera de un entorno virtual de Python (a elección):

```
$ pip install -r requirements.txt
$ python manage.py collectstatic

```
### Cómo levantar el contenedor para visualizar el contenido en local

En la terminal, situados en la carpeta donde tenemos el Dockerfile, docker-compose y requirements.txt:

```
$ docker build -t nombre_imagen .
$ docker-compose up
```

-----

## Visualización del proyecto:

### Landing Page / Home

![Método UX](marvelintuneapp/static/images/landing-page.png)

### Buscador de canciones

![Método UX](marvelintuneapp/static/images/buscador.png)

### Buscador de películas

![Método UX](marvelintuneapp/static/images/buscador-2.png)

### Blog

![Método UX](marvelintuneapp/static/images/blog.png)

-----

*Detalles a tener en cuenta:*
* A la hora de buscar en nuestra aplicación web, no detecta los espacios " ", así que es recomendable realizar las busquedas con *guiones* en su lugar.
* A la hora de visualizar las películas tras la búsqueda, si se da el caso de que la petición API no devuelve ninguna imagen, hemos puesto la siguiente por defecto:

![Método UX](marvelintuneapp/static/images/marvel-characters.webp)

-----