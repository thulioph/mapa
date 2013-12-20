// Função que detecta a localização
function showpos(position){
  var lat = position.coords.latitude
  var lon = position.coords.longitude

  alert('Sua Posição é: '+lat+','+lon)
}

// Habilita a API
navigator.geolocation.getCurrentPosition(showpos);