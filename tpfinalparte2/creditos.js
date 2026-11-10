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
