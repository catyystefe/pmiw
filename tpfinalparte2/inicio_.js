function pantallaInicial() {
  image(fondoInicio, 0, 0, 800, 600);

  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textFont(fuente);

  // Boton de jugar
  if (mouseX > 250 && mouseX < 550 &&// se pinta
    mouseY > 250 && mouseY < 350) {
    fill(28, 55, 70);
    rect(400, 300, 300, 100, 10);
    fill(127, 216, 237);
  } else { //vuelve a su forma normal
    fill(127, 216, 237);
    rect(400, 300, 300, 100, 10);
    fill(28, 55, 70);
  }
  textSize(60);
  text("Jugar", 400, 300);


  // Boton de creditos
  if (mouseX > 250 && mouseX < 550 &&
    mouseY > 165 && mouseY < 235) {
    fill(127, 216, 237);
    rect(400, 200, 300, 70, 10);
    fill(28, 55, 70);
  } else {

    fill(28, 55, 70);
    rect(400, 200, 300, 70, 10);
    fill(127, 216, 237);
  }
  textSize(40);
  text("Créditos", 400, 200);
}
