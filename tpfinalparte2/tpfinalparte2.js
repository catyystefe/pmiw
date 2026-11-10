////Comisión 3
// Catalina Fernandez, LEGAJO: 125571/3
// VIDEO:
// Paulina Prado, LEGAJO: 125664/7
// VIDEO: 
let objJuego;
let pantalla = 0;
let fondoInicio;
let fuente;

function setup() {
createCanvas(800, 400);
fondoInicio= loadImage("data/inicio.jpg");
objJuego = new juego(15);
fuente = loadFont("data/LuckiestGuy-Regular.ttf");
}


function draw() {
  background(0);
  //maquina de estados
  if (pantalla == 0){
  pantallaInicial();
  }else if (pantalla == 1){
  objJuego.dibujar();
  }else if (pantalla == 2){
  ganaste();
  }else if (pantalla == 3){
  perdiste();
  }else if (pantalla == 4){
  creditos();
  }
}

function keyPressed(){
 if (keyCode === UP_ARROW) {
    objJuego.till.estado = "saltando";
  }
  if (keyCode === DOWN_ARROW) {
    objJuego.till.estado = "agachado";
  }
}
function keyReleased() {
  objJuego.till.estado = "normal";
}

function mousePressed(){
    if (pantalla == 0) {
    if (mouseX > 250 && mouseX < 550 &&
        mouseY > 250 && mouseY < 350) {
      pantalla = 1;
    }
     if (pantalla == 0) {
    if (mouseX > 250 && mouseX < 550 &&
    mouseY > 165 && mouseY < 235) {
      pantalla = 4;
    }
  }
}
if (pantalla == 4) {
    if (mouseX > 200 && mouseX < 600 &&
      mouseY > 315 && mouseY < 385) {
      pantalla = 0;
}
}
}
