// Variables 
let startingMinutes = 20;
let time = startingMinutes * 60;	
let resasign = document.querySelector(".resasign");	 // Resasign show where you reserved your bike and the time left to pick it up
let btnsend = document.querySelector(".btnform");	// Button reserve
let cancel = document.querySelector('.cancel');	  // Button to cancel
let minuteresult = document.querySelector('.minuteresult'); // display the minutes left
let resafinal = document.querySelector('.resafinal'); // display the final result to confirm that the bike is reserved
let mapContainer = document.querySelector('#map');
let inputFirst = document.querySelector("#firstname");// disable input button if empty form 
let inputSecond = document.querySelector("#name");// disable input button if empty form 


document.addEventListener('click', () => { // Hide canvas and button if empty
	if(inputFirst.value == '') { 
		document.querySelector('canvas').style.display = 'none';
		document.querySelector(".btnform").style.display = 'none'; // CETTE LIGNE EST UNE SECURITE ELLE FONT DISPARAITRE LE BOUTON SI L INPUT EST EFFACEE ////////
	} else if (inputSecond.value == '') {
		document.querySelector('canvas').style.display = 'none';
		document.querySelector('.btnform').style.display = 'none'; // CETTE LIGNE EST UNE SECURITE ELLE FONT DISPARAITRE LE BOUTON SI L INPUT EST EFFACEE/////////
	} else {
		document.querySelector('canvas').style.display = 'inline-block'; // cette ligne fait apparaitre le canvas dans le cas ou les imput sont rempli
	}
})

// Create timer //
btnsend.addEventListener('click', uptadeCountdown = (e) => {
	let minutes = Math.floor(time / 60);
	let seconds = time % 60;
	time--;
	seconds = seconds < 10 ? `0${seconds}` : seconds; // si les seconde sont inferier a 10 on affiche un zéro avant seconde.
	minuteresult.innerHTML = `Il vous reste ${minutes} : ${seconds} pour récupère votre vélo</br>`;
	let interval = setTimeout(uptadeCountdown, 1000) // arret du muniteur quand click sur annuler
	localStorage.setItem('timeLeft', `Il vous reste ${minutes} : ${seconds} pour récupère votre vélo</br>`);

cancel.addEventListener('click', () => {
	clearTimeout(interval)
	time = 5;  // puis restaure les 20 minutes du muniteur
	mapContainer.style.display = "inline-block";
	resasign.style.display = "none";
})  

function showMapTimer() { // Lorsque le minuteur arriver a 0 cette fonction réaffiche la map
	let mapContainer = document.querySelector('#map');
	if(time == 0) {
	mapContainer.style.display = 'inline-block';
	resasign.style.display = 'none';	
	}
}
showMapTimer()

	e.preventDefault()	// eventlistener show the resasign and hide the map when click on btnreserve
	resasign.style.display = "inline-block";
	mapContainer.style.display = "none";
})
