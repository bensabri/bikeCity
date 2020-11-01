let resasign = document.querySelector(".resasign");	 // Resasign show where you reserved your bike and the time left to pick it up
let btnsend = document.querySelector(".btnform");	// Button reserve
let cancel = document.querySelector('.cancel');	  // Button to cancel
let input = document.querySelector("input");	// disable input button if empty form 
let minuteresult = document.querySelector('.minuteresult'); // display the minutes left
let resafinal = document.querySelector('.resafinal'); // display the final result to confirm that the bike is reserved


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

