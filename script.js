let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
// define a quantidade de pixels do jogo
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBG() {
    context.fillStyle = "lightgreen";
    // fillRect desenha o quadrado onde será o jogo
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
    for(i = 0; i <snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}


// chamando a função para criar o quadrado
criarBG();  

// função para criar a cobrinha
criarCobrinha(); 