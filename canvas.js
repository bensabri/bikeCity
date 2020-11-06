// Mouse drawing 
let canvas = document.querySelector('#draw');
let ctx = canvas.getContext('2d');

let lastX = 0;
let lastY = 0;
let isDrawing = false;

canvas.width = 200;
canvas.height = 115;

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
})
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
canvas.addEventListener('mousemove', (e) => {
    if(!isDrawing)
    return
    console.log(e);
    ctx.beginPath();
    ctx.moveTo(lastX , lastY); //start to
    ctx.lineTo(e.offsetX, e.offsetY); //End to mouse position
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY]
})


let btnreset = document.querySelector('.btnreset').addEventListener('click', () => { // function reset canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	document.querySelector(".btnform").style.display ="none";
})

canvas.addEventListener('click', () => {
	if(!isDrawing) {
		document.querySelector(".btnform").style.display ="inline-block";
	} 
})


/*
let resasign = document.querySelector(".resasign");	 // Resasign show where you reserved your bike and the time left to pick it up
let btnsend = document.querySelector(".btnform");	// Button reserve
let cancel = document.querySelector('.cancel');	  // Button to cancel
let input = document.querySelector("input");	// disable input button if empty form 
let minuteresult = document.querySelector('.minuteresult'); // display the minutes left
let resafinal = document.querySelector('.resafinal'); // display the final result to confirm that the bike is reserved
let mapContainer = document.querySelector('#map');

 else {
		document.querySelector('canvas').style.display = 'inline-block'; // cette ligne fait apparaitre le canvas dans le cas ou les imput sont rempli
		document.querySelector('.btnreset').style.display = 'inline-block';
		document.querySelector('.pensign').style.display = 'inline-block';
	}


//resasign.style.display = "none"; // Hide resasign by default
btnsend.addEventListener("click", (e) => { // eventlistener show the resasign if display none when a bike is reserved
	e.preventDefault() // prevent the form to submit when click the button
		resasign.style.display = "inline-block";
		mapContainer.style.display = "none";
    
}) 

cancel.addEventListener('click', () => { // when i close the resasign and show the map back when i cancel the resa by click on cancel button
		mapContainer.style.display = "inline-block";
		resasign.style.display = "none";
		localStorage.clear();
	
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
	time = 1200;  // puis restaure les 20 minutes du muniteur
})  
function showMapTimer() { // Lorsque le minuteur arriver a 0 cette fonction réaffiche la map
	let mapContainer = document.querySelector('#map');
	if(time == 0) {
	mapContainer.style.display = 'inline-block';	
	}
}
showMapTimer()
})

 //create timer to limit the time
	
        for (let i = 0; i < localStorage.length; i++) {
		const key = localStorage.key(i);
		const value = localStorage.getItem(key);
	}
//////////////////////////////////////////// function amir

function uptadeCountdown () {
	let minutes = Math.floor(time / 60);
	let seconds = time % 60;
	time--;
	seconds = seconds < 10 ? `0${seconds}` : seconds; // si les seconde sont inferier a 10 on affiche un zéro avant seconde.
	minuteresult.innerHTML = `Il vous reste ${minutes} : ${seconds} pour récupère votre vélo</br>`;
	

	let interval = setTimeout(uptadeCountdown, 1000) // arret du muniteur quand click sur annuler
	cancel.addEventListener('click', () => {
		clearTimeout(interval)
		time = 5;  // puis restaure les 20 minutes du muniteur
	} 

)}

function showMapTimer() { // Lorsque le minuteur arriver a 0 cette fonction réaffiche la map
	let mapContainer = document.querySelector('#map');
	//let resasign = document.querySelector(".resasign");
	if(time == 0) {
	mapContainer.style.display = 'inline-block';
	resasign.style.display = 'none';	
	}
}
showMapTimer()

/////////////////////////////////////////////

// Local storage

let nom = document.querySelector('#firstname');
let prenom = document.querySelector('#name');


btnsend.addEventListener('click', () => {
	
	localStorage.setItem('name',nom.value); //place les donnee dans le navigateur
	localStorage.setItem('firstname',prenom.value);
	localStorage.setItem('bike', true);
})
*/