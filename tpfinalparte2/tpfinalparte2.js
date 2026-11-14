////Comisión 3
// Catalina Fernandez, LEGAJO: 125571/3
// VIDEO:https://youtu.be/uEpRmmHzVn0
// Paulina Prado, LEGAJO: 125664/7
// VIDEO:https://youtu.be/tzE1CwzyXro 
let objJuego;
let pantalla = 0;
let fondoInicio;
let fuente;
let finBueno;
let finMalo;
let gente;
let correr;
let caer;
let victoria;
let salto;
let deslizo;
let estadoTillAnterior = "normal";


function setup() {
  createCanvas(800, 400);
  fondoInicio= loadImage("data/inicio.jpg");
  objJuego = new juego(15);
  fuente = loadFont("data/LuckiestGuy-Regular.ttf");
  gente=loadSound("data/gente.mp3");
  correr=loadSound("data/correr.mp3");
  caer=loadSound("data/caer.mp3");
  victoria=loadSound("data/victoria.mp3");
  salto = loadSound("data/salto.mp3");
  deslizo = loadSound("data/deslizo.mp3");

  // se repiten indefinidamente)
  gente.setLoop(true);
  correr.setLoop(true);
  deslizo.setLoop(true);
}
function preload() {
  finBueno = loadImage("data/fin2.jpg");
  finMalo = loadImage ("data/fin1.jpg");
}

function draw() {
  background(0);
  //maquina de estados
  if (pantalla == 0) {
    pantallaInicial();
  } else if (pantalla == 1) {
    objJuego.dibujar();
    barraProgreso();
  } else if (pantalla == 2) {
    ganaste();
  } else if (pantalla == 3) {
    perdiste();
  } else if (pantalla == 4) {
    creditos();
  } else if (pantalla == 5) {
    instrucciones();
  }
}

function keyPressed() {
  if (pantalla ===1) {
    if (keyCode === UP_ARROW) {
      objJuego.till.estado = "saltando";
      // Saltar: suena UNA SOLA VEZ
      if (!salto.isPlaying()) salto.play();
      if (correr.isPlaying()) correr.stop();
    }
  }
  if (keyCode === DOWN_ARROW) {
    objJuego.till.estado = "agachado";
    // Agachado: suena en loop mientras dura
    if (!deslizo.isPlaying()) deslizo.loop();
    if (correr.isPlaying()) correr.stop();
  }
}
function keyReleased() {
  objJuego.till.estado = "normal";

  // Detener sonidos de acción
  if (pantalla === 1) {
    if (deslizo.isPlaying()) {
      deslizo.stop();
    }
    if (!correr.isPlaying()) {
      correr.play();
    }
  }
}
function mousePressed() {
  if (pantalla == 0) {
    // Botón "Jugar"
    if (mouseX > 250 && mouseX < 550 && mouseY > 245 && mouseY < 315) {
      objJuego = new juego(15);
      pantalla = 1;
      if (!gente.isPlaying()) gente.loop();
      if (!correr.isPlaying()) correr.loop();
    }
    // Botón "Instrucciones"
    else if (mouseX > 250 && mouseX < 550 && mouseY > 165 && mouseY < 235) {
      pantalla = 5;
    }
    // Botón "Créditos"
    else if (mouseX > 250 && mouseX < 550 && mouseY > 85 && mouseY < 155) {
      pantalla = 4;
    }
  } else if (pantalla == 2) { // ganaste
    if (mouseX > 200 && mouseX < 600 && mouseY > 315 && mouseY < 385) {
      pantalla = 0;
    }
  } else if (pantalla == 3) { // perdiste
    if (mouseX > 200 && mouseX < 600 && mouseY > 200 && mouseY < 270) {
      objJuego = new juego(15);
      pantalla = 1;
      if (!gente.isPlaying()) gente.loop();
      if (!correr.isPlaying()) correr.loop();
    }
    if (mouseX > 200 && mouseX < 600 && mouseY > 300 && mouseY < 370) {
      objJuego = new juego(15);
      pantalla = 0;
    }
  } else if (pantalla == 4) { // créditos
    if (mouseX > 200 && mouseX < 600 && mouseY > 315 && mouseY < 385) {
      pantalla = 0;
    }
  } else if (pantalla == 5) { // instrucciones
    if (mouseX > 200 && mouseX < 600 && mouseY > 315 && mouseY < 385) {
      pantalla = 0;
    }
  }
}
