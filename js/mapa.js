function initialize() {

  // Exibir mapa;
  var myLatlng = new google.maps.LatLng(-8.0723903, -34.88574169999998);
  var mapOptions = {
    zoom: 17,
    center: myLatlng,
    panControl: false,
    // mapTypeId: google.maps.MapTypeId.ROADMAP
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  }


  // Parâmetros do texto que será exibido no clique;
  var contentString = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, atque.' + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ipsam cum quisquam quas iusto. Quisquam, officia, unde ad beatae hic fuga necessitatibus eligendi iure nemo reprehenderit? Beatae, minus ducimus eaque.';
  var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 700
  });


  // Exibir o mapa na div #mapa;
  var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);


  // Marcador personalizado;
  var image = './img/marcador2.png';
  var marcadorPersonalizado = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: image,
      title: 'Downtown no Galo',
      animation: google.maps.Animation.DROP
  });


  // Exibir texto ao clicar no ícone;
  google.maps.event.addListener(marcadorPersonalizado, 'click', function() {
    infowindow.open(map,marcadorPersonalizado);
  });


  // Estilizando o mapa;
  // Criando um array com os estilos
  var styles = [
    {
      stylers: [
        { hue: "#dddc00" },
        { saturation: 60 },
        { lightness: -20 },
        { gamma: 1.51 }
      ]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },
    {
      featureType: "road",
      elementType: "labels"
    }
  ];

  // crio um objeto passando o array de estilos (styles) e definindo um nome para ele;
  var styledMap = new google.maps.StyledMapType(styles, {name: "Mapa Style"});

  // Aplicando as configurações do mapa
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

}


// Função para carregamento assíncrono
function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyDeHb17So0QupSGO_d6b8X-OyvJ32UQehs&sensor=true&callback=initialize";
  document.body.appendChild(script);
}

window.onload = loadScript;