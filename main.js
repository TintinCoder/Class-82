// Defining Variables
var canvas = document.getElementById('myCanvas');
var color;
var ctx = canvas.getContext('2d');
// Functions
function blue() {
    // Circle
    color = "Blue";
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.arc(150, 143, 40, 0, 2 * Math.PI)
    ctx.stroke();
}
function yellow() {
    // Circle
    color = "Yellow";
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.arc(200, 190, 40, 0, 2 * Math.PI)
    ctx.stroke();
}
function black() {
    // Circle
    color = "Black";
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.arc(250, 143, 40, 0, 2 * Math.PI)
    ctx.stroke();
}
function green() {
    // Circle
    color = "Green";
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.arc(300, 190, 40, 0, 2 * Math.PI)
    ctx.stroke();
}
function red() {
    // Circle
    color = "Red";
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.arc(350, 143, 40, 0, 2 * Math.PI)
    ctx.stroke();
}
// Running Functions
blue();
yellow();
black();
green();
red();