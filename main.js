console.log("Class 82 | Paint");
// Variables
var mouseEvent = "empty";
var last_x_position, last_y_position;
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var color = "black";
var width_of_line = 2;
// Mouse Events
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById('color').value;
    width_of_line = document.getElementById('width_of_line').value;
    mouseEvent = "mousedown";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("Last Position Of X AND Y Coordinates")
        console.log(last_x_position + last_y_position);
        ctx.moveTo(last_x_position, last_y_position);
        console.log("New X N Y Coordinates");
        console.log(current_x, current_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }
    last_x_position = current_x;
    last_y_position = current_y;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

function wipeUp() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}