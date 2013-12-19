
function initialize() {

  // var mapOptions = {} | Cria um objeto que contém as variáveis de inicialização do mapa
  var mapOptions = {

    // Nível de zoom do mapa, quanto menor o valor menor o zoom;
    zoom: 15,

    // center: new google.maps.LatLng(-34.397, 150.644) |
    // center é para um mapa em um ponto específico,
    // criamos um objeto LatLng onde contém o local passando as coordenadas na ordem (latitude,logintude);
    // O processo de transformar endereço em ponto geográfico é chamado de Geocodificação;
    center: new google.maps.LatLng(-8.0723903, -34.88574169999998),

    // Desativa a interface padrão do usuário (retira os controles)
    // disableDefaultUI: true,

    // Opções de controles para o mapa, só aceitam os valores "true" ou "false"
    // o que cada coisa quer dizer https://developers.google.com/maps/documentation/javascript/controls?hl=pt-BR#ControlModification
    // panControl: boolean,
    // zoomControl: boolean,
    // mapTypeControl: boolean,
    // scaleControl: boolean,
    // streetViewControl: boolean,
    // overviewMapControl: boolean
    panControl: false,


    // Tipo de mapa que será exibido, as opções são:
    // ROADMAP: Mapa tradicional.
    // SATELLITE: exibe os blocos fotográficos.
    // HYBRID: exibe uma mistura de blocos fotográficos e uma camada de blocos para recursos de destaque (rodovias, nomes de cidade).
    // TERRAIN: exibe blocos de relevo físico para exibir recursos de elevação e água (montanhas, rios etc.).
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  // É definida uma variável map e atribuida a ela um objeto Map, as opções definidas na literal do objeto mapOptions também  são recebidas
  // por esta variável, essas opções são utilizadas para iniciar as propriedades do mapa.
  // (document.getElementById("mapa")) o local onde será inserido o mapa no html.
  // getElementById("mapa") no meu html existe uma div com o id mapa.
  var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
}

// Função para carregamento assíncrono
function loadScript() {

  // Cria no html um elemento script do tipo text/javascript e insere o caminho no src;
  var script = document.createElement("script");
  script.type = "text/javascript";

  // &callback=initialize é um parâmetro com função de argumento que serve para atrasar o carregamento do script;
  // &language=ja | Pode modificar a linguagem do mapa ja(japonês)
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyDeHb17So0QupSGO_d6b8X-OyvJ32UQehs&sensor=true&callback=initialize";

  document.body.appendChild(script);
}

// Quando tudo carregar, executa a função loadScript;
window.onload = loadScript;




// function initialize() {
//   var mapOptions = {
//     zoom: 15,
//     center: new google.maps.LatLng(-8.0723903, -34.88574169999998)
//   }
//   var map = new google.maps.Map(document.getElementById('mapa'), mapOptions);

//   var image = './img/marcador2.png';
//   var myLatLng = new google.maps.LatLng(-8.0723903, -34.88574169999998);
//   var beachMarker = new google.maps.Marker({
//       position: myLatLng,
//       map: map,
//       icon: image
//   });
// }

// google.maps.event.addDomListener(window, 'load', initialize);







// Links adicionais:
// https://github.com/rodolfoprr/GoogleMapsAPIv3MapaPersonalizado/blob/master/js/mapa.js
// http://www.princiweb.com.br/blog/programacao/google-apis/google-maps-api-v3-criando-um-mapa-personalizado.html
// http://www.princiweb.com.br/demos/google-maps-api-v3-busca-endereco-autocomplete/
// https://developers.google.com/maps/documentation/javascript/overlays?hl=pt-BR#Icons
// https://developers.google.com/maps/documentation/javascript/examples/icon-simple?hl=pt-BR


// var map;
// function initialize() {
//   var mapOptions = {
//     zoom: 9,
//     center: new google.maps.LatLng(-8.0723903, -34.88574169999998)
//   };
//   map = new google.maps.Map(document.getElementById('mapa'), mapOptions);
// }

// google.maps.event.addDomListener(window, 'load', initialize);

