function barraProgreso() {
  push();
  rectMode(CORNER);

  // Fondo
  noStroke();
  fill(0, 0, 0, 150);
  rect(20, 20, 200, 20, 5);

  // Progreso
  let progreso = objJuego.estudiantesPasados / objJuego.cantidadEstudiantes;
  fill(127, 216, 237);
  rect(20, 20, 200 * progreso, 20, 5);

  // Borde
  noFill();
  stroke(255);
  strokeWeight(2);
  rect(20, 20, 200, 20, 5);

  // Texto
  noStroke();
  fill(255);
  textSize(12);
  textAlign(LEFT, CENTER);
  text(objJuego.estudiantesPasados + " / " + objJuego.cantidadEstudiantes, 230, 30);

  pop();
}
