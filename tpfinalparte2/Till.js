class Till {
  constructor(posX, posY) {

    this.frame = 0;
    this.vida = 1;
    this. posX = posX;
    this. posY =  posY;
    this.dibujoTill = []; // Normal
    this.tillSaltando = [];
    this.tillAgachado = [];
    this.estado = "normal";
  
  }

  cargarImagenes() {
    for (let i = 0; i < 4; i++) {
      this.dibujoTill[i] = loadImage(
        "data/till" + (i + 1) + ".png");
       this.tillSaltando = loadImage("data/tillsaltando.png")
       this.tillAgachado = loadImage("data/tillagachado.png")
    }
  }

  dibujar() {
    if (this.estado == "normal") {
    image(this.dibujoTill[this.frame], this.posX, this.posY, 200, 200);
  }
  if (this.estado == "saltando") {
    image(this.tillSaltando, this.posX, this.posY -110, 165, 200);
  }
  if (this.estado == "agachado") {
    image(this.tillAgachado, this.posX, this.posY+20, 180, 180);
  }
}

  animar() {
    if (frameCount % 8 == 0) {
      this.frame = (this.frame + 1) % 4;
    }
  }

  mover() {
  }

  saltar() {
  }

  agachar() {
  }

  estaVivo() {
  }
}
