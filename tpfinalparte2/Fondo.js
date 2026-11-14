class Fondo {
  constructor() {
    this.fondo;
    this.xFondo = 0;
    this.velocidadFondo = 2;
  }
  cargarImagen() {
    this.fondo = loadImage("data/fondo.jpg");
  }

  dibujar() {
    image(this.fondo, this.xFondo, 0, 800, 400);
    image(this.fondo, this.xFondo + 800, 0, 800, 400);
    this.moverFondo();
  }
  moverFondo() {
    this.xFondo = this.xFondo - this.velocidadFondo; //mover para la izquierda
    if (this.xFondo <= -800) {
      this.xFondo = 0;//bucle
    }
  }
}
