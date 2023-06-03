// Espera a que el documento HTML se cargue completamente
document.addEventListener('DOMContentLoaded', function() {

    // Funcionalidad del menu en mobile:
    // con mobile cogemos el boton menu hamburguesa del navbar
    var mobile = document.querySelector('.navbar-toggler')
    // con nav_mobile cogemos el bloque de la clase nav-mobile
    var nav_mobile = document.querySelector('.nav-mobile')

    // la funcionalidad de toggle es que al bloque nav-mobile le añadimos la clase active (si no existe)
    // y cuando no existe se le elimina esa misma clase
    function handleClick() {
        nav_mobile.classList.toggle('active');
    }

    // con esta linea usamos la función anterior cuando se hace click en mobile (menu hamburguesa)
    mobile.addEventListener('click', handleClick)

    // Obtenemos el elemento del formulario por su ID
    // getElementById equivale a querySelector('#miFormulario')
    // reminder de nomenclatura de selectores en css
    var formulario = document.getElementById('miFormulario');
    var titulos = document.querySelector('.header-tabla');
  
    // Añade el evento submit al formulario
    // esto hace que cada vez que el buscador de canciones (formulario) reciba el evento submit (confirmar) entra en la función
    formulario.addEventListener('submit', function(event) {
      // Detiene el comportamiento predeterminado del formulario (redireccionamiento)
      // cuando se hace submit al form, por defecto el form quiere redirigir a algún sitio
      // con esto, evitamos que redirija sin perder la funcionalidad del submit
      event.preventDefault();
  
      // Aquí se realizan las acciones con los datos del formulario
      // Por ejemplo, obtener los valores de los campos de entrada ("Introduzca un título")
      // es lo mismo de antes, pero añadimos el ".value" ya que al ser un input dentro de un form, queremos quedarnos con el valor del texto introducido
      var nombre = document.querySelector('.inputclass').value;
      
      // ---------------------------------- PARTE DE LA API ----------------------------------
      // va a ser el parámetro que utilicemos para hacer el fetch después
      // aquí indicamos que la petición que vamos a hacer a la API es GET, ya que vamos a recibir datos
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      // Uso de la API de shazam de RapidApi: https://rapidapi.com/apidojo/api/shazam 
      fetch("https://shazam.p.rapidapi.com/search?term="+ nombre +"&rapidapi-key=923c198955mshefd7d010a39f7e5p159f04jsnb927724d90d3", requestOptions)
        .then(response => response.text())
        .then(result => {
          var data = JSON.parse(result);
      
          // Accede a la propiedad 'hits' dentro de la propiedad 'tracks'
          var hits = data.tracks.hits;
      
          // Crea una cadena de texto con los datos que deseas mostrar en la página
          var contenido = "";
          // Ahora vamos a actuar sobre la tabla que aparece cuando entramos en canciones (pero la estamos ocultando a propósito)
          // cuando llega a esta línea, queremos que vuelva a visualizarse, por tanto hacemos remove y así quitamos la clase que hace que lo oculte
          titulos.classList.remove("header-tabla-hide");

          // bucle para recorrer los hits y quedarnos con sus tracks
          for (var i = 0; i < hits.length; i++) {
            var hit = hits[i].track;
            contenido += '<div class="row" id="instance"><div class="col">"'+ hit.title +'"</div><div class="col">' + hit.subtitle + '</div><div class="col"><img src="'+ hit.share.image +'" width="120" height="120"></img></div><div class="col"><audio controls><source src="'+ hit.hub.actions[1].uri +'" type="audio/mpeg">Tu navegador no admite la reproducción de audio.</audio></div></div>'
          }
      
          // Actuamos sobre el contenido en el elemento con el ID "resultado"
          // Con innerHTML añadimos al elemento con el id = resultado todo el contenido extraído del bucle anterior en forma de html
          document.getElementById("resultado").innerHTML = contenido;
        })
        .catch(error => console.log('error', error));
    });
  });


  