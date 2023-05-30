// Espera a que el documento HTML se cargue completamente
document.addEventListener('DOMContentLoaded', function() {

    // Funcionalidad del menu en mobile
    var mobile = document.querySelector('.navbar-toggler')
    var nav_mobile = document.querySelector('.nav-mobile')
    function handleClick() {
        nav_mobile.classList.toggle('active');
    }
    mobile.addEventListener('click', handleClick)

    // Obtén el elemento del formulario por su ID
    var formulario = document.getElementById('miFormulario');
    var titulos = document.querySelector('.header-tabla');
  
    // Añade el evento submit al formulario
    formulario.addEventListener('submit', function(event) {
      // Detén el comportamiento predeterminado del formulario (redireccionamiento)
      event.preventDefault();
  
      // Aquí puedes realizar las acciones que deseas con los datos del formulario
      // Por ejemplo, obtener los valores de los campos de entrada
      var nombre = document.querySelector('.inputclass').value;
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://shazam.p.rapidapi.com/search?term="+ nombre +"&rapidapi-key=923c198955mshefd7d010a39f7e5p159f04jsnb927724d90d3", requestOptions)
        .then(response => response.text())
        .then(result => {
          var data = JSON.parse(result);
      
          // Accede a la propiedad 'hits' dentro de la propiedad 'tracks'
          var hits = data.tracks.hits;
      
          // Crea una cadena de texto con los datos que deseas mostrar en la página
          var contenido = "";
          titulos.classList.remove("header-tabla-hide");

          for (var i = 0; i < hits.length; i++) {
            var hit = hits[i].track;
            contenido += '<div class="row" id="instance"><div class="col">"'+ hit.title +'"</div><div class="col">' + hit.subtitle + '</div><div class="col"><img src="'+ hit.share.image +'" width="120" height="120"></img></div><div class="col"><audio controls><source src="'+ hit.hub.actions[1].uri +'" type="audio/mpeg">Tu navegador no admite la reproducción de audio.</audio></div></div>'
          }
      
          // Mostrar el contenido en el elemento con el ID "resultado"
          document.getElementById("resultado").innerHTML = contenido;
        })
        .catch(error => console.log('error', error));
    });
  });


  