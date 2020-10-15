//Create map 
const map = L.map('mapid').setView([-15.7750836,-48.0772927], 10);

//create and add tileLayer
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon
const icon = L.icon({
  iconUrl: "./images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
})

let marker;

// create and add marker
map.on('click',(event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;

  // remove icon
  marker && map.removeLayer(marker)

  // add icon layer
  marker = L.marker([lat, lng], {icon})
  .addTo(map)
})


// photos upload
function addPhotoField(){
  // pegar o container de fotos #images
  const container = document.querySelector('#images')
  // pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll('.new-upload');
  // realizar o clone da última imagem adicionada
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

  // Verificar se vazio. Se sim, não adicionar ao container de imagens

  const input = newFieldContainer.children[0]

  if (input.value == "") {
    return 
  }

  // Limpar campo
  input.value = "";
  // adicionar o clone ao container de #images
  container.appendChild(newFieldContainer)
}

function deleteField(event){
  const span = event.currentTarget

  const fieldsContainer = document.querySelectorAll('.new-upload')

  if(fieldsContainer.length <=1){
    // limpar o valor do campo
    span.parentNode.children[0].value = ""
    return
  }

  // deletar o campo
  span.parentNode.remove();
}

// seleção sim ou não
function toggleSelect(event) {
  // retirar a class active do botão selecionado
  document.querySelectorAll('.button-select button')
  .forEach((button) => button.classList.remove('active'))

  // adicionar a class active no botão clicado
  const button = event.currentTarget
  button.classList.add('active')

  // atualizar o meu input hidden com valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]')
  
  input.value = button.dataset.value

}