//let formName = document.getElementById('name');	// display or hide the window by click on the button

let resasign = document.querySelector(".resasign");
	resasign.style.display = "none";

let btnsend = document.querySelector(".btnform");
	btnsend.addEventListener("click", hideResaSign)  
		function hideResaSign() {
			//let resasign = document.querySelector(".resasign");
			if (resasign.style.display === "none") {
				resasign.style.display = "inline-block"; 
			} else resasign.style.display = "none";
		}
btnsend.addEventListener('click', hideMap) // When click reserve button hide the map to prevent the user to reverve again
		function hideMap(e) {
			e.preventDefault()
			let map = document.querySelector('#map');
			if (resasign.style.display === "inline-block") {
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
			
			if(resasign.style.display ==="inline-block") {
				resasign.style.display = "none";
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
		resasign.style.display = 'none';
	} 

let interval = setTimeout(uptadeCountdown, 1000) // arret du muniteur quand click sur annuler
cancel.addEventListener('click', stopT)  
function stopT() {
	clearTimeout(interval)
	time = 10;  // puis restaure les 20 minutes du muniteur
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
