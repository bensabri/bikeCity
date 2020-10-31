// Mouse drawing 
let canvas = document.querySelector('#draw');
let ctx = canvas.getContext('2d');

let lastX = 0;
let lastY = 0;
let isDrawing = false;
let btnreset = document.querySelector('.btnreset').addEventListener('click', resetCanvas)

canvas.width = 200;
canvas.height = 115;

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
})
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

function draw(e) {
    if(!isDrawing)
    return
    console.log(e);
    ctx.beginPath();
    ctx.moveTo(lastX , lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY]
}

function resetCanvas() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}