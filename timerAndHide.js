// Variables 
let resasign = document.querySelector(".resasign");	 // Resasign show where you reserved your bike and the time left to pick it up
let btnsend = document.querySelector(".btnform");	// Button reserve
let cancel = document.querySelector('.cancel');	  // Button to cancel
let input = document.querySelector("input");	// disable input button if empty form 
let minuteresult = document.querySelector('.minuteresult'); // display the minutes left
let resafinal = document.querySelector('.resafinal'); // display the final result to confirm that the bike is reserved
//const countdownEl = document.getElementById('countDown');	

resasign.style.display = "none"; // Hide resasign by default
btnsend.addEventListener("click", (e) => { // eventlistener show the resasign if display none when a bike is reserved
	let map = document.querySelector('#map');
	e.preventDefault() // prevent the form to submit when click the button
	if (resasign.style.display === "none") {
		resasign.style.display = "inline-block";
		map.style.display = "none";
   } 
}) 

cancel.addEventListener('click', () => { // when i close the resasign and show the map back when i cancel the resa by click on cancel button
	let map = document.querySelector('#map');
	if(map.style.display === "none" && resasign.style.display ==="inline-block") {
		map.style.display = "inline-block";
		resasign.style.display = "none";
	}
})

btnsend.disabled = true; // disabled button by default
input.addEventListener('change', () => {
	if(document.querySelector('input').value === '') { // If inputs name are empty the button if disable
		btnsend.disabled = true
	} else {
		btnsend.disabled = false
	} 
}) 
// Create timer //

let startingMinutes = 20;
let time = startingMinutes * 60;

btnsend.addEventListener('click', uptadeCountdown = () => {
	let minutes = Math.floor(time / 60);
	let seconds = time % 60;
	time--;
	seconds = seconds < 10 ? `0${seconds}` : seconds; // si les seconde sont inferier a 10 on affiche un zéro avant seconde.
	minuteresult.innerHTML = `Il vous reste ${minutes} : ${seconds} pour récupère votre vélo</br>`;
	
	if(time === 0) {
		resasign.style.display = 'none';
	} 

let interval = setTimeout(uptadeCountdown, 1000) // arret du muniteur quand click sur annuler
cancel.addEventListener('click', () => {
	clearTimeout(interval)
	time = 5;  // puis restaure les 20 minutes du muniteur
})  
function showMapTimer() { // Lorsque le minuteur arriver a 0 cette fonction réaffiche la map
	let map = document.querySelector('#map');
	if(time == 0) {
	map.style.display = 'inline-block';	
	}
}
showMapTimer()
})

 //create timer to limit the time
	


	/*for (let i = 0; i < localStorage.length; i++) {
		const key = localStorage.key(i);
		const value = localStorage.getItem(key);
	}
}

// Local storage

/*let nom = document.querySelector('#firstname');
let prenom = document.querySelector('#name');


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
/*function bikeResult() {
	if(results.length > 0) {
		btnsend.disabled = true
	} else {
		btnsend.disabled = false
	}
}
bikeResult();*/