let canvas = document.getElementById("snake");

let context = canvas.getContext("2d");

let box = 16;

let snake = [];

snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";

function makebg() {
    context.fillStyle = "green";
    context.fillRect(0, 0, 32 * box, 32 * box);
}

function snakebody() {
    for(i=0; i < snake.length; i++) {
        context.fillStyle = "gray";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function startGame() {
    makebg();
    snakebody();
}

let game = setInterval(startGame, 100);