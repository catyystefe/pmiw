class juego {
  constructor(cantidadEstudiantes) { // el parametro ingresado es asignado a la caracteristica de clase cantidadEstudiantess
    this.cantidadEstudiantes = cantidadEstudiantes;
    this.crearFondo();
    this.crearTill();
    this.crearEstudiantes();
  }

  iniciar() {
  }

  dibujar() {
    this.fondo.dibujar();
    this.till.animar();
    this.till.dibujar();
    for (let i=0; i< this.cantidadEstudiantes; i++) {
        this.estudiantes[i].mover();
      this. estudiantes[i].dibujar();
    }
  }
  crearFondo() {
    this.fondo = new Fondo();
    this.fondo.cargarImagen();
  }
  crearTill() {
    this.till = new Till(50, 160); // crea un objeto (llamado till) de clase Till, y el objeto va a estar ubicado en esos parametros
    this.till.cargarImagenes();
    this.till.animar();
    this.till.dibujar();
  }
  crearEstudiantes() {
    this.estudiantes = [];
    
    for (let i=0; i< this.cantidadEstudiantes; i++) {
      this. estudiantes[i] = new Estudiantes( 800+ i * 800, 250); // par que los enemigos no tengan la misma posicion
          this.estudiantes[i].cargarImagenes();
    }
  }
  gano() {
  }

  perdio() {
  }
}
