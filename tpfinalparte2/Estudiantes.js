class Estudiantes {
  constructor(posX, posY, cantidadEstudiantes) {
    this.imagenes = []; //
    this.posX = posX;
    this.posY = posY;
    this.cantidadEstudiantes = cantidadEstudiantes;


    this.randomEstudiante = floor(random(0, 2));

    this.velocidadEstudiantes = 3;

    this.anchos = [180, 260];
    this.altos = [120, 200];
    this.offsetsY = [0, -90];

    this.contado = false; //cantidad de estudiantes pasados
  }

  cargarImagenes() {
    this.imagenes[0] = loadImage("data/estudiante1.png");
    this.imagenes[1] = loadImage("data/estudiante2.png");
  }

  dibujar() {
    image(
      this.imagenes[this.randomEstudiante],
      this.posX,
      this.posY + this.offsetsY[this.randomEstudiante],
      this.anchos[this.randomEstudiante],
      this.altos[this.randomEstudiante]
      );
  }

  //  mover() {
  //    this.posX -= this.velocidadEstudiantes;
  //    if (this.posX <= -200) {
  //      this.posX = 800 + (this.cantidadEstudiantes - 1) * 800;
  //     this.randomEstudiante = floor(random(0, 2));
  //    }
  //  }
  //}

  mover() {
    this.posX -= this.velocidadEstudiantes;
    // Ya no reposiciona acá
  }
}
