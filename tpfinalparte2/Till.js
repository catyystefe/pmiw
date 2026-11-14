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
    this.ancho = 200;
    this.alto = 200;
    this.offsetY = 0; // Desplazamiento en Y
  }

  cargarImagenes() {
    for (let i = 0; i < 4; i++) {
      this.dibujoTill[i] = loadImage(
        "data/till" + (i + 1) + ".png");
    }
    this.tillSaltando = loadImage("data/tillsaltando.png");
    this.tillAgachado = loadImage("data/tillagachado.png");
  }

  dibujar() {
    if (this.estado == "normal") {
      this.ancho = 200;
      this.alto = 200;
      this.offsetY = 0;
      image(this.dibujoTill[this.frame], this.posX, this.posY + this.offsetY, this.ancho, this.alto);
    } else if (this.estado == "saltando") {
      this.ancho = 165;
      this.alto = 200;
      this.offsetY = -110; // Se dibuja más arriba
      image(this.tillSaltando, this.posX, this.posY + this.offsetY, this.ancho, this.alto);
    } else if (this.estado == "agachado") {
      this.ancho = 180;
      this.alto = 180;
      this.offsetY = 20; // Se dibuja más abajo
      image(this.tillAgachado, this.posX, this.posY + this.offsetY, this.ancho, this.alto);
    }
   
  }

  animar() {
    if (frameCount % 8 == 0) {
      this.frame = (this.frame + 1) % 4;
    }
  }

  colisionarCon(estudiante) {
    //calcular los centros de las imagees
    let tillX = this.posX + this.ancho / 2;
    let eX = estudiante.posX + estudiante.anchos[estudiante.randomEstudiante] / 2;
//calcular la distancia entre los centros
    let distanciaX = abs(tillX - eX); // Utilizamos abs por recomendación de la IA, ya que con dist necesitaba 4 parametros 
  // abs calcula la diferencia entre esos dos puntos.
    let limiteX = 150;

    if (distanciaX < limiteX) {
      if (estudiante.randomEstudiante === 0 && this.estado !== "saltando") {
     
        return true;
      }
      if (estudiante.randomEstudiante === 1 && this.estado !== "agachado") {
     
        return true;
      }
    }
    return false;
  }

}
