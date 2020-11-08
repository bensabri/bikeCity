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
	document.querySelector(".btnsend").style.display ="none";
})

canvas.addEventListener('click', () => {
	if(!isDrawing) {
		document.querySelector(".btnsend").style.display ="inline-block";
	} 
})
