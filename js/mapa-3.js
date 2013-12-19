function initialize() {

// Variável criada com as posições;
var myLatlng = new google.maps.LatLng(-8.0723903, -34.88574169999998);

// Marcador personalizado;
var image = './img/marcador2.png';

// Informações que iram aparecer ao clicar no marcador
var infowindow = new google.maps.InfoWindow({
    // Conteúdo exibido após o clique no marcador
    content: contentString
});

// Conteúdo do que será exibido
var contentString = 'Meu texto';


// Opções do mapa
  var mapOptions = {
    zoom: 16,
    center: myLatlng,
    panControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  // Exibe na div #mapa o mapa com as coordenadas;
  var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);


  // Inserindo marcador no mapa;
  // google.maps.Marker construtor de marcadores
  var marcadorPersonalizado = new google.maps.Marker({
      // Especifica a localização do marcador, pega os dados da variável definida com as posições;
      position: myLatlng,
      // Especifica o objeto Map onde o marcador deve ser posicionado;
      map: map,
      // Pega o valor da variável definida, com o caminho do meu marcador;
      icon: image,
      // Title do marcador personalizado
      title: 'Downtown no Galo',
      // Animação no marcador que vai acontecer quando o mapa abrir;
      animation: google.maps.Animation.DROP
  });

  // Habilita o marcador a receber determinada animação no click;
  // google.maps.event.addListener(marcadorPersonalizado, 'click', toggleBounce);

  google.maps.event.addListener(marcadorPersonalizado, function() {
    infowindow.open(map,marcadorPersonalizado);
  });

}

// Função que vai fazer o marcador animar no click;
// function toggleBounce() {
//   if (marcadorPersonalizado.getAnimation() != null) {
//     marcadorPersonalizado.setAnimation(null);
//   } else {
//     marcadorPersonalizado.setAnimation(google.maps.Animation.BOUNCE);
//   }
// }

// Função para carregamento assíncrono
function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyDeHb17So0QupSGO_d6b8X-OyvJ32UQehs&sensor=true&callback=initialize";
  document.body.appendChild(script);
}

window.onload = loadScript;