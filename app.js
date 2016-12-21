var s;
var escala = 15;
var comida;

function setup() {
    
    createCanvas(600, 600);

    //instancia um obejto s
    s = new Snake();

    frameRate(10);

    pickLocation();
}

function pickLocation() {
    var colunas = floor(width/escala);
    var linhas = floor(height/escala);

    comida = createVector(floor(random(colunas)), floor(random(linhas)));
    comida.mult(escala);
}

function draw() {
    background(51);
    if (s.eat(comida)) {
        pickLocation();   
    }
    s.death();
    s.update();
    s.show();

    //"desenha" a comida na tela
    fill(255, 0, 100);
    rect(comida.x, comida.y, escala, escala);
}

//movimenta a cobrinha para os lados
function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        s.dir(-1, 0);
    }
}