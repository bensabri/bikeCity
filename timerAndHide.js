
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




btnsend.addEventListener("click", (e) => { // eventlistener show the resasign if display none when a bike is reserved
	e.preventDefault() // prevent the form to submit when click the button
		resasign.style.display = "inline-block";
		mapContainer.style.display = "none";

//}
}) 

cancel.addEventListener('click', () => { // when i close the resasign and show the map back when i cancel the resa by click on cancel button
		mapContainer.style.display = "inline-block";
		resasign.style.display = "none";
})


document.addEventListener('click', () => { // Hide canvas and button if empty
	if(inputFirst.value == '') { 
		document.querySelector('canvas').style.display = 'none';
		document.querySelector(".btnform").style.display = 'none';
	} else if (inputSecond.value == '') {
		document.querySelector('canvas').style.display = 'none';
		document.querySelector(".btnform").style.display = 'none';
	} else {
		document.querySelector('canvas').style.display = 'inline-block';
	}
})

// Create timer //
	
btnsend.addEventListener('click', uptadeCountdown = () => {
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
})  

function showMapTimer() { // Lorsque le minuteur arriver a 0 cette fonction réaffiche la map
	let mapContainer = document.querySelector('#map');
	if(time == 0) {
	mapContainer.style.display = 'inline-block';
	resasign.style.display = 'none';	
	}
}
showMapTimer()
})







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
/*function bikeResult() {
	if(results.length > 0) {
		btnsend.disabled = true
	} else {
		btnsend.disabled = false
	}
}
bikeResult();*/