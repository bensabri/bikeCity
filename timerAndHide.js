// Variables 
let startingMinutes = 20; // Total minutes timer
let time = startingMinutes * 60; // For one minutes 60 secondes	
let resasign = document.querySelector(".resasign");	 // Resasign show where you reserved your bike and the time left to pick it up
let btnsend = document.querySelector(".btnsend");	// Button reserve
let cancel = document.querySelector('.cancel');	  // Button to cancel
let minuteresult = document.querySelector('.minuteresult'); // display the minutes left
let mapContainer = document.querySelector('#map');
let infoUser = document.querySelector('.infoUser'); // Here i put the 2 input to listen to any of them if one is empty then content hiden
let inputFirst = document.querySelector('#firstname');
let inputSecond = document.querySelector('#name');
let hidenElement = document.querySelector('.hidenElement'); // contains canvas, pen, btnreset


infoUser.addEventListener('input', (e) => { 
	if(e.target.value == 0) { 
		hidenElement.style.display = 'none'; // CETTE LIGNE EST UNE SECURITE ELLE FONT DISPARAITRE LE BOUTON SI L INPUT EST EFFACEE ////////
		btnsend.style.display = 'none';
	} else if(inputSecond.value && inputFirst.value) {	// faire apparaitre les element canvas si les 2 inputs sont remplis
		hidenElement.style.display = 'inline-block';
	}
})

// Create timer //
btnsend.addEventListener('click', uptadeCountdown = (e) => {
	let minutes = Math.floor(time / 60);
	let seconds = time % 60;
	time--;
	seconds = seconds < 10 ? `0${seconds}` : seconds; // si les seconde sont inferier a 10 on affiche un zéro avant seconde.
	minuteresult.innerHTML = `Il vous reste ${minutes} : ${seconds} pour récupère votre vélo</br>`;
	
	localStorage.setItem('timeLeft', `Il vous reste ${minutes} : ${seconds} pour récupère votre vélo</br>`);
	let interval = setTimeout(uptadeCountdown, 1000) // arret du muniteur quand click sur annuler

cancel.addEventListener('click', () => {
	clearTimeout(interval)
	time = 1200;  // puis restaure les 20 minutes du muniteur
	mapContainer.style.display = "inline-block";
	resasign.style.display = "none";
})  

function showMapTimer() { // Lorsque le minuteur arriver a 0 cette fonction réaffiche la map
	if(time == 0) {
	mapContainer.style.display = 'inline-block';
	resasign.style.display = 'none';	
	}
}
showMapTimer()

})
