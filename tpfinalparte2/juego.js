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
      this.estudiantes[i].dibujar();

      //   Si Till choca con un estudiante actual, cambia a pantalla perdiste
      // (ahora se comprueba SIEMPRE, no solo cuando el estudiante sale de pantalla)
      if (this.till.colisionarCon(this.estudiantes[i])) {
        pantalla = 3;
        //detiene el audio
        if (gente.isPlaying()) gente.stop();
        if (correr.isPlaying()) correr.stop();
           if (deslizo.isPlaying()) deslizo.stop();
        // Reproducir "caer" una sola vez
        if (!caer.isPlaying()) {
          caer.play();
        }
        return;
      }

      // Contar estudiante que pasó
      if (this.estudiantes[i].posX <= -200 && !this.estudiantes[i].contado) {
        this.estudiantes[i].contado = true;
        this.estudiantesPasados++;

        if (this.estudiantesPasados >= this.cantidadEstudiantes) {
          pantalla = 2;
          if (gente.isPlaying()) gente.stop();
          if (correr.isPlaying()) correr.stop();
          if (deslizo.isPlaying()) deslizo.stop();

          if (!victoria.isPlaying()) {
            victoria.play();
          }
          return;
        }

        // Reposicionar DESPUÉS de contar
        this.estudiantes[i].posX = 800 + (this.cantidadEstudiantes - 1) * 800;
        this.estudiantes[i].randomEstudiante = floor(random(0, 2));
        this.estudiantes[i].contado = false;
      }
    }
  }

  crearFondo() {
    this.fondo = new Fondo();
    this.fondo.cargarImagen();
  }
  crearTill() {
    this.till = new Till(50, 160); // crea un objeto (llamado till) de clase Till, y el objeto va a estar ubicado en esos parametros
    this.till.cargarImagenes();
  }
  crearEstudiantes() {
    this.estudiantes = [];
    this.estudiantesPasados = 0;
    for (let i=0; i< this.cantidadEstudiantes; i++) {
      this.estudiantes[i] = new Estudiantes(800 + i * 800, 250, this.cantidadEstudiantes);
      this.estudiantes[i].cargarImagenes();
    }
  }
}
