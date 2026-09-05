/* Catalina Fernandez 125571/3
materia: PMIW | com3
tp1 */

let pantalla = 0;
let fondo;
let sonido;
let durin = [];
let barb = [];
let B = [];
let durinFinal = [];
let frameDurinFinal= 0;
let frameB = 0
let frameBarb = 0;
let frameDurin = 0;
let movimientoFondo = 0;
let contador= 0;// El contador lo uso para establecer en que tiempo Durin va a moverse mas adelante o mas atras (sensacion de que vuela)
let posXDurin = 50;// su posicion en X
let posYDurin = 190;// su posicion en Y
let direccion = 0;//hacia donde se va a mover en X
let direccion2 = -1;//hacia donde se mueve en Y
let imagenBarb;
let posXBarb = 1000; //pos x de barb
let direccionBarb =-1;//hacia donde se va a mover en X
let nube1;
let posXNube = -2000;
let movimientoNube = 1;

function setup() {
  createCanvas(800, 600);
  fondo = loadImage("data/fondo.png");
  sonido = loadSound("data/sonido.mp3");
  nube1 = loadImage( "data/nube.png");

//CICLO FOR DE ARRAY
for (let i = 0; i < 4; i++) {
  barb[i] = loadImage("data/002" + (i + 1) + "barb.png");
}for (let i = 0; i < 9; i++) {
  durin[i] = loadImage("data/000" + (i + 1) + "durin.png");
}for (let i = 0; i < 4; i++) {
  B[i] = loadImage("data/01" + (i + 1) + "B.png");
}for (let i = 0; i < 9; i++) {
  durinFinal[i] = loadImage("data/0011" + (i + 1) + "durinfinal.png");
}
}

function draw() {
  background(194, 177, 240);
  // MAQUINA DE ESTADOS, pasa por 3 pantallas , la de play, y 2 mas donde se encuentran las animaciones
 if (pantalla == 0) {  
    pantallaPlay();
  } else if (pantalla == 1) {
    pantallaMovimiento();
    contador++;
    if (contador >= 2100) {
      pantalla = 2;
    }
  }else if (pantalla == 2) {
    pantallaUltima();
  }
  image(nube1, posXNube, -200, 1920, 972);
if ( contador >= 1870){
posXNube += 5;
}
}
function pantallaPlay() {
  //pantalla 0
  image(fondo, 0, 0, 0, 600);
  fill(46, 44, 124, 100);
  rect(0, 0, 800, 600);
  image(durin[0], posXDurin, posYDurin, 310, 310);

//boton de play
  fill(0, 100);
  rect(0, 0, 800, 600);
  noStroke();
  fill(255, 180);
  ellipse(400, 300, 150, 150);
  fill(0, 240);
  triangle(380, 275, 380, 325, 430, 300);
}

function pantallaMovimiento() {
 //pantalla 1
  movimientoFondo = movimientoFondo - 0.7;//movimiento del fondo
  image(fondo, movimientoFondo, 0, 0, 600);  
  fill(46, 44, 124, 150);
  rect(0, 0, 800, 600);
   frameDurin = reinicioFramesDurin(durin, frameDurin, 13); // el tercer parametro significa la velocidad (frameCount)
  if (movimientoFondo <= -1355){
  movimientoFondo = - 1355;// cuando llegue a esa pos el fondo se detiene
  }

  //MOVIMIENTO DE DURIN en x (direccion)
if (contador < 1630) {
  if (posXDurin >= 140) {
    direccion = -0.5;
  } else if (posXDurin <= 50) {
    direccion = 0.5;
  }
  posXDurin += direccion * 0.5;
} else if (contador < 1860) {
  posXDurin = 80;
} else {
  posXDurin += 0.1;
}
//MOVIMIENTO DE DURIN en y (direccion 2)
if (contador < 1630) {
  if (posYDurin >= 250) {
    direccion2 = -1;
  } 
  else if (posYDurin <= 180) {
    direccion2 = 1;
  }
  posYDurin += direccion2 * 1;
} else {
  posYDurin = 220; // pos final
}

//MOVIMIENTO A PARTIR DE 1860
if (contador >= 1860){
 posXDurin += 0.5;
}

// MOVIMIENTO BARBELOTH
if (contador >= 1450 && contador < 1900) {
  // se realiza la primera animación
  image(barb[frameBarb], posXBarb + 50, 0, 1000, 635);
  posXBarb += -3;
  if (posXBarb <= 0) {
    posXBarb = 0;
    direccionBarb = 0;
  }
}
// se hace la segunda
if (contador >= 1900) {
  image(B[frameB], posXBarb + 10, 0, 1050, 635);
  if (frameCount % 21 == 0) {
    if (frameB < 3) {
      frameB++;
    }
  }
}
  if (contador >= 2000){
  posXBarb += 1;
  }

 // Dibujar Durin
image(durin[frameDurin], posXDurin, posYDurin, 350, 350);

// Velocidad de los frames de Barbeloth 
if (frameCount % 10 == 0) {
  frameBarb++;
  if (frameBarb >= 4) {
    frameBarb = 0; //restablece la animacion 
  }
}
}
function reinicioFramesDurin(frames, frameActual, velocidad) { // funcion propia con parametros para modificar la velocidad, y un return para actualizar el frameActual 
  if (frameCount % velocidad == 0) {
    frameActual++;
    if (frameActual >= 9) {
      frameActual = 0;
    }
  } return frameActual;
}

function pantallaUltima() {
  // pantalla 2
  image(fondo, 0, 0, 0, 600);
  fill(46, 44, 124, 150);
  rect(0, 0, 800, 600);
  frameDurinFinal = reinicioFramesDurin2(durinFinal, frameDurinFinal, 10); 
  image(durinFinal[frameDurinFinal], -325, 25, 1400, 700);
}

function reinicioFramesDurin2(frames2, frameActual2, velocidad2) {  // funcion propia con parametros para modificar la velocidad, y un return para actualizar el frameActual2
  if (frameCount % velocidad2 == 0) {
    frameActual2++;
    if (frameActual2 >= 9) {
      frameActual2 = 0;
    }
  } return frameActual2;
}


function mousePressed() {
  if (dist(mouseX, mouseY, 400, 300) < 75) { // al hacer click en play, pasas a la pantalla 1 y se activa el sonido
    pantalla = 1;
     sonido.setVolume(0.09);// esto realmente nose si se podia usar, pero tuve que preguntarle a una ia porque era muy fuerte el sonido
     sonido.play();
  }
}
function keyPressed(){ // al apretar espacio se reinicia todo, volves a la pantalla 0 
if (key == ' ') {
      pantalla = 0;
}
}
