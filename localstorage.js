// Localstorage save information in the browser //

let nom = document.querySelector('#firstname');
let prenom = document.querySelector('#name');

btnsend.addEventListener('click', () => { // Get the name from input and save it into the browser

	localStorage.setItem('name',nom.value); //place les donnee dans le navigateur
	localStorage.setItem('firstname',prenom.value);
	localStorage.setItem('bike', true);
})

window.addEventListener('load', () => {
	if(localStorage.length >= 2) {
		document.querySelector('.resasign').style.display = 'inline-block';
        document.querySelector('#map').style.display = "none";
        alert('Vous avez une réservation en cours si vous voulez l\'annulé cliquer sur le bouton en bas');
    } else {
        let name = localStorage.getItem('name');
        let firstName = localStorage.getItem('firstname');
        nom.value = name;
        prenom.value  = firstName;
       
    }
})
cancel.addEventListener('click', () => { // Remove timeLeft and bike, keep name an firstName for the next resa
    localStorage.removeItem('bike');
    localStorage.removeItem('timeLeft');
    document.querySelector('#map').style.display = "inline-block";  // when i close the resasign and show the map back when i cancel the resa by click on cancel button
    document.querySelector('.resasign').style.display = "none";
})

// Onload open the browser with the current resa if not cancel //

