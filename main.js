let canvas = document.getElementById("snake");

let context = canvas.getContext("2d");

let box = 16;

let snake = [];

snake[0] = {
    x: 16 * box,
    y: 16 * box
}

let direction = "right";

let food = {
    x: Math.floor(Math.random() * 31 + 1) * box,
    y: Math.floor(Math.random() * 31 + 1) * box
}

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

function drawFood() {
    context.fillStyle = "black";
    context.fillRect(food.x, food.y, box, box);
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

    if(event.keyCode == 65 && direction!= "right") {
        direction = "left";
    }

    if(event.keyCode == 87 && direction!= "down") {
        direction = "up";
    }

    if(event.keyCode == 68 && direction!= "left") {
        direction = "right";
    }

    if(event.keyCode == 83 && direction!= "up") {
        direction = "down";
    }
}

function startGame() {
    if(snake[0].x > 31 * box && direction == "right") {
        snake[0].x = 0;
    }

    if(snake[0].x < 0 * box && direction == "left") {
        snake[0].x = 32 * box;
    }

    if(snake[0].y > 31 * box && direction == "down") {
        snake[0].y = 0;
    }

    if(snake[0].y < 0 * box && direction == "up") {
        snake[0].y = 32 * box;
    }

    for(i=1; i < snake.length; i++) {
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(game);
            alert("Erroooooou kkkk");
        }
    }

    makebg();
    snakebody();
    drawFood();

    let snakex = snake[0].x;
    let snakey = snake[0].y;

    if (direction == "right") {
        snakex += box;
    }

    if (direction == "left") {
        snakex -= box;
    }

    if (direction == "up") {
        snakey -= box;
    }

    if (direction == "down") {
        snakey += box;
    }

    if (snakex != food.x || snakey != food.y) {
        snake.pop();
    } else {
       food.x = Math.floor(Math.random() * 31 + 1) * box,
       food.y = Math.floor(Math.random() * 31 + 1) * box
    }

    let newHead = {
        x: snakex,
        y: snakey
    }

    snake.unshift(newHead);
}

let game = setInterval(startGame, 100);