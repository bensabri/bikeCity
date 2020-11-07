// Localstorage save information in the browser //
let nom = document.querySelector('#firstname');
let prenom = document.querySelector('#name');

btnsend.addEventListener('click', () => { // Get the name from input and save it into the browser

	localStorage.setItem('name',nom.value); //place les donnee dans le navigateur
	localStorage.setItem('firstname',prenom.value);
})

window.addEventListener('load', () => {
	if(localStorage.length > 0) {
		//document.querySelector('.resasign').style.display = 'inline-block';
        //document.querySelector('#map').style.display = "none";
        let name = localStorage.getItem('name');
        let firstName = localStorage.getItem('firstname');
        nom.value = name;
        prenom.value  = firstName;
    }

       
    
})
cancel.addEventListener('click', () => { // Remove timeLeft and bike, keep name an firstName for the next resa
    document.querySelector('#map').style.display = "inline-block";  // when i close the resasign and show the map back when i cancel the resa by click on cancel button
    document.querySelector('.resasign').style.display = "none";
})

// Onload open the browser with the current resa if not cancel //

