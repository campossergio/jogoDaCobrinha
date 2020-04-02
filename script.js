let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
// define a quantidade de pixels do jogo
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

// criar uma variavel para direção da cobrinha
let direction = "right";

function criarBG() {
    context.fillStyle = "lightgreen";
    // fillRect desenha o quadrado onde será o jogo
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
    for(i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

document.addEventListener('keydown', update);

function update (event) {
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo() {
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0 ;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    // chamando a função para criar o quadrado
    criarBG();  

    // função para criar a cobrinha
    criarCobrinha(); 

    // ponto de partida
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // criando as coordenadas
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    // retirar o ultimo elemento do array
    snake.pop();
    
    // criando uma nova cabeça
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 200);


