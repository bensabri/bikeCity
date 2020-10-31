// Mouse drawing
let canvas = document.querySelector('#draw');
let ctx = canvas.getContext('2d');

canvas.width = 200;
canvas.height = 115;

let lastX = 0;
let lastY = 0;
let isDrawing = false;

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (event) => {
	isDrawing = true;
	[lastX, lastY] = [event.offsetX, event.offsetY] //update the new position of the mouse 
})
canvas.addEventListener('mouseup', () => isDrawing = false );
canvas.addEventListener('mouseout', () => isDrawing = false);

function draw(event) {
	if(!isDrawing) //stop the fonction from running when the mouse is not down
	return
	console.log(event);
	ctx.beginPath();
	ctx.moveTo(lastX , lastY); //start from
	ctx.lineTo(event.offsetX, event.offsetY); //go to
	ctx.lineWidth = 4;
	ctx.strokeStyle = 'black';
	ctx.stroke();
	[lastX, lastY] = [event.offsetX, event.offsetY]
}
let btnreset = document.querySelector('.btnreset').addEventListener('click', reset) // erase sign form
function reset() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
		
//map

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

let formname2 = document.querySelector('.formname');
formname2.style.display = 'none';

let pensign = document.querySelector('.pensign');
let avaibtn = document.getElementById("availableBike");
let results = document.querySelector(".results");
let firstname = document.querySelector('.infoUser');

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
					
					formname2.style.display = 'inline-block';	
					//document.querySelector('#map').style.width = '500px';	
					results.innerHTML = `Il n'y a plus de vélo disponible a la station :</br> ${bike.name}`;
					firstname.style.display = "none" ;  // get the div to hide or display
					canvas.style.display = "none";
					pensign.style.display = "none";
					btnreset.style.display = "none";
					})
					
				} else if (bike.available_bikes <= 5) {
					let marker = L.marker([bike.position.lat ,bike.position.lng], {icon: orangeIcon}).addTo(map)
					marker.bindPopup(`<b>Address</b> ${bike.name}`).openPopup(); // show station name on the map	
			
					marker.addEventListener('click', () => { // when i click on a marker i display the bike available on the div result
					formname2.style.display = 'inline-block';
					//document.querySelector('#map').style.width = '500px';

					results.innerHTML = `${bike.name} : Attention reste peu de vélo: <p>Nombre de places: ${bike.bike_stands} </p>Vélo disponible: ${bike.available_bikes}`;
					resafinal.innerHTML =  `Vous avez reservé un velo a la station:  ${bike.name}`;
					firstname.style.display = "inline-block";
					canvas.style.display = "inline-block";
					pensign.style.display = "inline-block";
				})
					 

				} else { // to display back the info s station after clicking on a no bike available
					let marker = L.marker([bike.position.lat ,bike.position.lng], {icon: greenIcon}).addTo(map)
					marker.bindPopup(`<b>Address</b> ${bike.name}`).openPopup(); // show station name on the map	
					marker.addEventListener('click', () => { // when i click on a marker i display the bike available on the div result
					formname2.style.display = 'inline-block'; 
					//document.querySelector('#map').style.width = '500px';
				

					results.innerHTML =  `${bike.name}<p>Nombre de places: ${bike.bike_stands} </p>Vélo disponible: ${bike.available_bikes}`;
					resafinal.innerHTML =  `Vous avez reservé un velo a la station:  ${bike.name}`;
					firstname.style.display = "inline-block";
					canvas.style.display = "inline-block";
					pensign.style.display = "inline-block";
				})
				}
				
			})
		
		}) 
		
//let formName = document.getElementById('name');	// display or hide the window by click on the button

let formsign = document.querySelector(".formsign");
	formsign.style.display = "none";

let btnsend = document.querySelector(".btnform");
	btnsend.addEventListener("click", hideSign)  
		function hideSign() {
			//let formsign = document.querySelector(".formsign");
			if (formsign.style.display === "none") {
				formsign.style.display = "inline-block"; 
			} else formsign.style.display = "none";
		}
btnsend.addEventListener('click', hideMap) // When click reserve button hide the map to prevent the user to reverve again
		function hideMap(e) {
			e.preventDefault()
			let map = document.querySelector('#map');
			if (formsign.style.display === "inline-block") {
				map.style.display = "none"; 
			} 
		}
document.querySelector('.cancel').addEventListener('click', showMap) // When click cancel button show back the map
	function showMap() {
		let map = document.querySelector('#map');
		if(map.style.display === "none") {
			map.style.display = "inline-block";
		}
	}		

let input = document.querySelector("input");	// disable input button if empty form 
btnsend.disabled = true;
input.addEventListener('change', champRempli)

function champRempli() {
	
	if(document.querySelector('input').value === '') {
		btnsend.disabled = true
	} else {
		btnsend.disabled = false
		
	} 
}
/*function bikeResult() {
	if(results.length > 0) {
		btnsend.disabled = true
	} else {
		btnsend.disabled = false
	}
}
bikeResult();*/

let cancel = document.querySelector('.cancel'); // Red button to cancel the reservation by closing the window
	cancel.addEventListener('click', closesign)
		function closesign() {
			
			if(formsign.style.display ==="inline-block") {
				formsign.style.display = "none";
			}
		}
// Create timer //

let startingMinutes = 20;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countDown');
btnsend.addEventListener('click', uptadeCountdown)
function uptadeCountdown() { //create timer to limit the time
	
	let minutes = Math.floor(time / 60);
	let seconds = time % 60;
	
	seconds = seconds < 10 ? `0${seconds}` : seconds; // si les seconde sont inferier a 10 on affiche un zéro avant seconde.
	minuteresult.innerHTML = `Il vous reste ${minutes} : ${seconds} pour récupère votre vélo</br>`;
	time--;
	if(time < 0) {
		formsign.style.display = 'none';
	} 

let interval = setTimeout(uptadeCountdown, 1000)
cancel.addEventListener('click', stopT) // arret du muniteur quand click sur annuler 
function stopT() {
	clearTimeout(interval)
	time = 1200;  // puis restaure les 20 munites du muniteur
}

function showMapTimer() { // Lorsque le minuteur arriver a 0 cette fonction réaffiche la map
	let map = document.querySelector('#map');
	if(time == 0) {
	map.style.display = 'inline-block';	
	}
}
showMapTimer()

	for (let i = 0; i < localStorage.length; i++) {
		const key = localStorage.key(i);
		const value = localStorage.getItem(key);
	}
}

// Local storage

let nom = document.querySelector('#firstname');
let prenom = document.querySelector('#name');
let minuteresult = document.querySelector('.minuteresult');
let resafinal = document.querySelector('.resafinal')

btnsend.addEventListener('click', reserser = () => {
	
	const key = nom.value;
	const value = prenom.value;


	
	localStorage.setItem(key, value); //place les donnee dans le navigateur
	localStorage.setItem('prenom', '');
	localStorage.setItem('Vélo:', '1')

	nom.localStorage.getItem('nom');
	prenom.localStorage.getItem('prenom');
	

})

for (let i = 0; i < localStorage.length; i++) {
	const key = localStorage.key(i);
	const value = localStorage.getItem(key);
}


/*btnsend.addEventListener('click', hideCountDown) //hide countdown and display it by click btnsent
	countdownEl.style.display = 'none';
	function hideCountDown() {
		if (countdownEl.style.display == 'block') {
			
			countdownEl.style.display = 'none';
		} else {
			countdownEl.style.display = 'block';
		}
	}*/

// Get name to local storage


	

/*let Nantesbike = new Object();
fetch(url)
		.then((bikedata) => bikedata.json())
		.then((bikedata) => {
			for (let i = 0; i < bikedata.length; i++) {
				console.log(bikedata[i])
				weatheresult.append(bikedata[i])

			}
		})
}
else if ((bike.available_bikes <= 50) {
					results.innerHTML = firstname.style.display = "block";
				}
console.log("Address:" + ' ' + bike.address + ' - ' + 'Capacité velo total:' + 
					bike.bike_stands + ' - ' + 'Vélo disponible:' + ' ' + bike.available_bikes + ' - ' + 'Place disponible:' + ' ' + bike.available_bike_stands)
Nantesbike.bike_stands = "Capacité total";
Nantesbike.available_bikes = "Velo disponible";
Nantesbike.available_bike_stands = "Place disponible";

Nantesbike.getInfo = function() {
	return this.bike_stands;
}


/*number: 13, contract_name: "nantes", name: "013-BRETAGNE SUD",
  address: "3, rue Pierre Chereau", position: {…}, banking: false,
   bonus: false, bike_stands: 20, available_bike_stands: 15, 
   available_bikes: 5,
*/
  
				  /*let totalbike = [];
				  totalbike = bike.bike_stands;
				  
				  let bkavailablestands = [];
				  bkavailablestands = bike.available_bike_stands;
					
				  let address = [];
				  address = bike.address;

				  let bikeavailable = [];
				  bikeavailable = bike.available_bikes;
				 
				  weatheresult.append(totalbike, bkavailablestands, address, bikeavailable);
				  h1.innerHTML = `${bike.name} ${bike.address}`;  
				p.innerHTML = `${bike.available_bike_stands} ${bike.available_bikes}`;
				append(div, h1);
				append(div, p);*/
/*let marker =

/*document.addEventListener('DOMcontentLoaded', () => {
  const timeLeftDisplay = document.querySelector('#time-left')
  const startBtn = document.querySelector('#start-button')
  let timeLeft = 10
  console.log(startBtn);
  function countDown() {
	  setInterval(function(){
		if(timeLeft <= 0 ) {
			clearInterval(timeLeft = 0)
		}

		  timeLeftDisplay.innerHTML =  timeLeft
		  timeLeft -=1
	  }, 1000)
  }
	
startBtn.addEventListener('click', countDown) 


})

*/