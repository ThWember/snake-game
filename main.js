let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 16;

function criarbg() {
    context.fillStyle = "green";
    context.fillRect(0, 0, 32 * box, 32 * box);
}

criarbg();