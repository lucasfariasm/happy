const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}
//Create map 
const map = L.map('mapid', options).setView([-15.7750836,-48.0772927], 10);

//create and add tileLayer
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon
const icon = L.icon({
  iconUrl: "./images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
})


// create and add marker
L.marker([-15.7750836,-48.0772927], {icon}).addTo(map)

// image gallery

function selectImage(event){
  const button = event.currentTarget

  // remover todas as classes active
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach(removeActiveClass)

  function removeActiveClass(button) {
    button.classList.remove("active")
  }

  // selecionar imagem clicada
  const image = button.children[0]
  const imageContainer = document.querySelector('.orphanage-details > img')

  // atualizar container de imagem
  imageContainer.src = image.src
  // adicionar a classe .active para este botão
  button.classList.add('active')
}