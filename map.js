window.addEventListener("load", () => { // It display the map on load or refresh browser without the map will not appear
//map
let results = document.querySelector(".results");
let infoUser = document.querySelector('.infoUser');
let formname = document.querySelector('.formname');
let resafinal = document.querySelector('.resafinal');
let hidenElement = document.querySelector('.hidenElement');
let inputFirst = document.querySelector('#firstname');
let inputSecond = document.querySelector('#name');

let map = L.map("map").setView([47.217, -1.550], 13);

L.tileLayer(
	"https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=ZsnMAHkJ6NMaUb25xQCw",
	{
		attribution:
'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
	}
	).addTo(map);

// Bike available nantes api jcdecaux

var greenIcon = L.icon({
    iconUrl: 'icons/cycling_green.png',
    iconSize:     [32, 37], // size of the icon
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
});

var redIcon = L.icon({
    iconUrl: 'icons/cycling_red.png',
    iconSize:     [32, 37], // size of the icon
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
});

var orangeIcon = L.icon({
    iconUrl: 'icons/cycling_orange.png',
    iconSize:     [32, 37], // size of the icon
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
});

const url = "https://api.jcdecaux.com/vls/v1/stations?contract=nantes&apiKey=55d7b7d4946a320c591ffa19aee2bbab6049dca3";

	fetch(url)
		.then((data) => data.json())
		.then((data) => {
			
			let bikedata = data;
			
			return bikedata.map((bike) => {
		
				if(bike.available_bikes === 0 ) {  // hide all form content when 0 bike
					let marker = L.marker([bike.position.lat ,bike.position.lng], {icon: redIcon}).addTo(map)
					marker.bindPopup(`<b>Address</b> ${bike.name}`).openPopup(); // show station name on the map	
					marker.addEventListener('click', () => { // when i click on a marker i display the bike available on the div result
					
					formname.style.display = 'inline-block';
					results.style.color = 'red';	
					results.innerHTML = `Il n'y a plus de vélo disponible a la station :</br> ${bike.name}`;
					infoUser.style.display = "none" ;  // get the div to hide or display
					hidenElement.style.display = "none";
				})
					
				} else if (bike.available_bikes <= 5) {
					let marker = L.marker([bike.position.lat ,bike.position.lng], {icon: orangeIcon}).addTo(map)
					marker.bindPopup(`<b>Address</b> ${bike.name}`).openPopup(); // show station name on the map	
			
					marker.addEventListener('click', () => { // when i click on a marker i display the bike available on the div result
					formname.style.display = 'inline-block';
					results.style.color = 'orange';
					results.innerHTML = `${bike.name} : Attention reste peu de vélo: <p>Nombre de places: ${bike.bike_stands} </p>Vélo disponible: ${bike.available_bikes}`;
					resafinal.innerHTML =  `Vous avez reservé un velo a la station:  ${bike.name}`;
					infoUser.style.display = "inline-block";
					if(inputSecond.value && inputFirst.value) {
						hidenElement.style.display = "inline-block";
					}
					
	
				})
					 
				} else { // to display back the info s station after clicking on a no bike available
					let marker = L.marker([bike.position.lat ,bike.position.lng], {icon: greenIcon}).addTo(map)
					marker.bindPopup(`<b>Address</b> ${bike.name}`).openPopup(); // show station name on the map	
					marker.addEventListener('click', () => { // when i click on a marker i display the bike available on the div result
					formname.style.display = 'inline-block'; 
				
					results.style.color = 'green';
					results.innerHTML =  `${bike.name}<p>Nombre de places: ${bike.bike_stands} </p>Vélo disponible: ${bike.available_bikes}`;
					resafinal.innerHTML =  `Vous avez reservé un velo a la station:  ${bike.name}`;
					infoUser.style.display = "inline-block";
					if(inputSecond.value && inputFirst.value) {
						hidenElement.style.display = "inline-block";
					}
				})
				}
				
			})
		
		}) 

	})	