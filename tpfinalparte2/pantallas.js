function pantallaInicial() {
  image(fondoInicio, 0, 0, 800, 600);
push();
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textFont(fuente);

  // Botón "Jugar"
  if (mouseX > 250 && mouseX < 550 && mouseY > 245 && mouseY < 315) {
    fill(28, 55, 70);
    rect(400, 280, 300, 70, 10);
    fill(127, 216, 237);
  } else {
    fill(127, 216, 237);
    rect(400, 280, 300, 70, 10);
    fill(28, 55, 70);
  }
  textSize(50);
  text("Jugar", 400, 280);

  // Botón "Instrucciones"
  if (mouseX > 250 && mouseX < 550 && mouseY > 165 && mouseY < 235) {
    fill(28, 55, 70);
    rect(400, 200, 300, 70, 10);
    fill(127, 216, 237);
  } else {
    fill(127, 216, 237);
    rect(400, 200, 300, 70, 10);
    fill(28, 55, 70);
  }
  textSize(35);
  text("Instrucciones", 400, 200);

  // Botón "Créditos"
  if (mouseX > 250 && mouseX < 550 && mouseY > 85 && mouseY < 155) {
    fill(28, 55, 70);
    rect(400, 120, 300, 70, 10);
    fill(127, 216, 237);
  } else {
    fill(127, 216, 237);
    rect(400, 120, 300, 70, 10);
    fill(28, 55, 70);
  }
  textSize(35);
  text("Créditos", 400, 120);

  pop();
}


function ganaste(){
 push();
 
 textFont(fuente);
 
 image(finBueno,0,0);

  fill(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  text("¡GANASTE!", width / 2, 150);
  textSize(30);

  // Botón "Volver al inicio"
  rectMode(CENTER);
  if (mouseX > 200 && mouseX < 600 && mouseY > 315 && mouseY < 385) {
    fill(28, 55, 70);
    rect(400, 350, 400, 70, 10);
    fill(127, 216, 237);
  } else {
    fill(127, 216, 237);
    rect(400, 350, 400, 70, 10);
    fill(28, 55, 70);
  }
  text("Volver al inicio", 400, 350);

  pop();
}

function perdiste() {
   image(finMalo,0,0);
push();
  fill(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  textFont(fuente);
  text("¡PERDISTE!", width / 2, 150);

  rectMode(CENTER);
  textSize(30);

  // Botón "Reintentar"
  if (mouseX > 200 && mouseX < 600 && mouseY > 200 && mouseY < 270) {
    fill(127, 216, 237);
    rect(400, 235, 400, 70, 10);
    fill(28, 55, 70);
  } else {
    fill(28, 55, 70);
    rect(400, 235, 400, 70, 10);
    fill(127, 216, 237);
  }
  text("Reintentar", 400, 235);

  // Botón "Volver al inicio"
  if (mouseX > 200 && mouseX < 600 && mouseY > 300 && mouseY < 370) {
    fill(28, 55, 70);
    rect(400, 335, 400, 70, 10);
    fill(127, 216, 237);
  } else {
    fill(127, 216, 237);
    rect(400, 335, 400, 70, 10);
    fill(28, 55, 70);
  }
  text("Volver al inicio", 400, 335);

  pop();
}

function instrucciones() {
  push();
  rectMode(CORNER);
  noStroke();
  fill(28, 55, 70);
  rect(0, 0, width, height);

  fill(255);
  textAlign(CENTER, CENTER);
  textFont(fuente);
  textSize(40);
  text("Instrucciones", width / 2, 50);

  textSize(20);
  text("Flecha ARRIBA: saltar", width / 2, 120);
  text("Flecha ABAJO: agacharse", width / 2, 160);
  text("Esquivá a los estudiantes", width / 2, 200);
  text("Pasá los 15 para ganar", width / 2, 240);

  // Botón "Volver al inicio"
  rectMode(CENTER);
  textSize(30);
  if (mouseX > 200 && mouseX < 600 && mouseY > 315 && mouseY < 385) {
    fill(28, 55, 70);
    rect(400, 350, 400, 70, 10);
    fill(127, 216, 237);
  } else {
    fill(127, 216, 237);
    rect(400, 350, 400, 70, 10);
    fill(28, 55, 70);
  }
  text("Volver al inicio", 400, 350);

  pop();
}

function creditos(){
rectMode(CORNER);
fill(28, 55, 70);
rect(0, 0, width, height);


fill(255);
textSize(20);
text("Creditos", 400, 50);
text("Código: Catalina Fernandez - Paulina Prado", 400, 120);
text("Comisión 3", 400, 170);
text("Imágenes de IA", 400, 220);

rectMode(CENTER);
textAlign(CENTER, CENTER);
textSize(30);
if (mouseX > 200 && mouseX < 600 &&
    mouseY > 315 && mouseY < 385) {
  fill(28, 55, 70); 
  rect(400, 350, 400, 70, 10);
  fill(127, 216, 237); // Texto al pasar el mouse
} else {
  fill(127, 216, 237);
  rect(400, 350, 400, 70, 10);
  fill(28, 55, 70); // Texto normal
}
text("Volver al inicio", 400, 350);
}
