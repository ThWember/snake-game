let canvas = document.getElementById("snake");

let context = canvas.getContext("2d");

let box = 16;

let snake = [];

snake[0] = {
    x: 16 * box,
    y: 16 * box
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

document.addEventListener("keydown", update)

function update (event) {
    if(event.keyCode == 37 && direction!= "right") {
        direction = "left";
    }

    if(event.keyCode == 38 && direction!= "down") {
        direction = "up";
    }

    if(event.keyCode == 39 && direction!= "left") {
        direction = "right";
    }

    if(event.keyCode == 40 && direction!= "up") {
        direction = "down";
    }
}

function startGame() {
    makebg();
    snakebody();

    let snakex = snake[0].x;
    let snakey = snake[0].y;

    if (direction == "right")
        snakex += box;

    if (direction == "left") {
        snakex -= box;
    }

    if (direction == "up") {
        snakey -= box;
    }

    if (direction == "down") {
        snakey += box;
    }

    snake.pop();

    let newHead = {
        x: snakex,
        y: snakey
    }

    snake.unshift(newHead);
}

let game = setInterval(startGame, 100);