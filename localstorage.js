// Localstorage save information in the browser //
let nom = document.querySelector('#firstname');
let prenom = document.querySelector('#name');


btnsend.addEventListener('click', () => { // Get the name from input and save it into the browser
    console.log('test')
    localStorage.setItem('name',nom.value); //place les donnee dans le navigateur
	localStorage.setItem('firstname',prenom.value);
})

window.addEventListener('load', () => {
	if(localStorage.length > 0) {
        let name = localStorage.getItem('name');
        let firstName = localStorage.getItem('firstname');
        nom.value = name; // on mets le name dans l'element parent qui est nom 
        prenom.value  = firstName;
    }
})

cancel.addEventListener('click', () => { // Remove timeLeft and bike, keep name an firstName for the next resa
    mapContainer.style.display = "inline-block";  // when i close the resasign and show the map back when i cancel the resa by click on cancel button
    resasign.style.display = "none";
})

