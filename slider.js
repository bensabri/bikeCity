
//Selection des boutton next, prev, et playpause
document.querySelector('.next').addEventListener('click', nextImage)
document.querySelector('.prew').addEventListener('click', prevImage)
//document.querySelector('.btnpause').addEventListener('click', playPause)

//Selection de la box qui contient l'img src qui contient les images
let sliderContainer = document.querySelector('.box');

//Creation d'un tableaux images qui contient les 3 sliders
let images = ['images/slide1', 'images/slide2', 'images/slide3'];
let i = 0;

function prevImage() {  // function prevImage
    if(i < images.length && i > 0) {
        i--
    } else {
        i = 2; // I est = a la longeur du tableaux donc on reviens au debut de la boucle  i > 0 on decremente de la dernier photo a la premier
    }
    sliderContainer.innerHTML = `<img src=${images[i]}.jpg>`;
}
function nextImage() {  // function nextImage
    if(i < images.length -1) {
        i++
    } else {
        i = 0;
    }
    sliderContainer.innerHTML = `<img src=${images[i]}.jpg>`;
}

document.querySelector('body').addEventListener('keydown', (e) => { // switch right left images with arrow keyboard 
    if(e.keyCode == 39) {
        nextImage()
    } else if (e.keyCode == 37) {
        prevImage()
    }
})

// create play auto every 5 secondes

let playing = true;
let btnpause = document.querySelector('.btnpause');
let btnplay = document.querySelector('.btnplay')
let timer = setInterval(nextImage, 5000);

function pauseSlide() {
    btnpause.innerHTML = '⏵';
    playing = false;
    clearInterval(timer);
}

function playSlide() {
    btnpause.innerHTML = '⏸';
    playing = true;
    timer = setInterval(nextImage, 5000);
}

btnpause.addEventListener('click', () => {
    if(playing) {
        pauseSlide();
        console.log('pause');
    } else {
        playSlide();
        console.log('play');
    }
}) 


