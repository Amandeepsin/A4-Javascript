/*
let request = new XMLHttpRequest(); 
request.open('GET', 'https://amandeepsin.github.io/A3-Javascript/datafile.json')
request.responseType='json';
request.send();
*/
fetch('https://amandeepsin.github.io/A3-Javascript/datafile.json')
  .then(response => response.json())
  .then(data => pass(data));
  
  function pass(data){
  let array = data['array'];
  
  for (let i = 0; i < array.length; i++) {  
    let box = document.createElement('div');
    let image = document.createElement('img');
	image.setAttribute('src', array[i].imagePath);
	box.appendChild(image)
    let mainTitle = document.createElement('h1');
	mainTitle.textContent = array[i].name;
	box.appendChild(mainTitle);
    let price = document.createElement('h4');
    price.textContent = '$' + array[i].price;
	box.appendChild(price);
	let description = document.createElement('p');
    description.textContent = array[i].description;
    box.appendChild(description);
    document.body.appendChild(box); 
     
  } 
}

function initialize() {
	const map = new google.maps.Map(document.getElementById("map"), {
	  zoom: 4,
	  center: { lat: 44.38, lng: -79.69 },
	});
	const marker = new google.maps.Marker({
	  position: { lat: 44.38, lng: -79.69 },
	  map: map,
	});
  }