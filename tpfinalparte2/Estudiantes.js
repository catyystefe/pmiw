class Estudiantes {
  constructor(posX, posY, cantidadEstudiantes) {
    this.estudiante1;
    this.estudiante2;
    this.posX = posX;
    this.posY = posY;
   this.cantidadEstudiantes = cantidadEstudiantes;
    this.randomEstudiante = random(0, 2);//genera un numero entre el 0 y el 2
    this.xEstudiantes= 600;
    this. velocidadEstudiantes = 3;
  }
   cargarImagenes(){
  this.estudiante1 = loadImage("data/estudiante1.png");
  this.estudiante2 = loadImage("data/estudiante2.png");
  }
  dibujar() {
     if (this.randomEstudiante < 1) { // si el numero es menor que 1 genera estudiante1, sino estudiante2
    image(this.estudiante1, this.posX, this.posY, 180, 120);
  } else {
    image(this.estudiante2, this.posX, this.posY - 90, 260, 200);
  }
   
  }
  estudiante1() {
  
  }
  estudiante2() {
  
  }
 mover() {
   this.posX -= this.velocidadEstudiantes;
  if (this.posX <= -200) {
    this.posX = 800 + (this.cantidadEstudiantes - 1) * 800;
  }
}

  colisionar() {
    // para comprobar si till choco
  }
}
