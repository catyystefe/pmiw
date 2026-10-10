//  PANTALLA DE INICIO
function dibujarInicio() {
  image(fondos[0], 0, 0);
  fill(10, 12, 46, 150); // color azul oscuro con transparencia 150
  rect(0, 0, width, height);
  
   // Título 
  fill(255);
  textSize(40);
  text("PRIMER DÍA DEL CURSO DE INGRESO", width/2, 180);
  textSize(24);
  text("en la facu de artes", width/2, 240);

  // Botón COMENZAR: usa las coordenadas definidas globalmente (btnInicioX, etc.)
  // La función dibujarBoton se encarga de dibujar el rectángulo y el texto.
  dibujarBoton(btnInicioX, btnInicioY, btnInicioW, btnInicioH, "COMENZAR");
  
  // Botón CRÉDITOS
  dibujarBoton(btnCreditosX, btnCreditosY, btnCreditosW, btnCreditosH, "CRÉDITOS");
}
// PANTALLA DE JUEGO
// Dibuja la escena actual: fondo, personajes, texto y opciones.
// La escena se controla con la variable global escenaActual.
function dibujarJuego(escena) {

  // Dibujar fondo correspondiente
  image(fondos[fondoEscena[escena]], 0, 0);
  image(prota[protaEscena[escena]], 20, 40);
  if (escena===1) {
    image(oru, 450, 200, 90, 140);
    image(qif, 520, 200, 90, 160);
  } else if (escena===4||escena===6||escena===7) {
    image(ivan[2], 200, 40);
    image(mizi, 450, 40);
    image(sua, 600, 40);
  } else if (escena===12) {
    image(ivan[0], 500, 40);
  } else if (escena===13) {
    image(ivan[1], 200, 40);
    image(mizi, 450, 40);
    image(sua, 600, 40);
  } else if (escena===2) {
    image(oru, 500, 40);
  } else if (escena=== 15) {
    image(qif, 500, 40);
  } else if (escena=== 16) {
    image(mizi, 500, 40);
  } else if (escena=== 11 || escena=== 10) {
    image(ivan[0], 300, 40);
    image(mizi, 450, 40);
    image(sua, 600, 40);
  }

  // Texto de la escena
  fill(10, 12, 46, 150);
  rect(30, 320, 750, 200);
  fill(255);
  textSize(16);
  text(textos[escena], 45, 330, width - 100, 600);

  // Si es condicional
  if (esCondicional[escena]) {
    dibujarBoton(260, 380, 300, 50, op1Texto[9]);
    return;
  }
  // Opciones

  if (op1Texto[escena] !== "" &&op2Texto[escena] !== "") {
    // Si ambas opciones existen, se dibujan en paralelo (izquierda y derecha)

    dibujarBoton(40, 395, 350, 50, op1Texto[escena]);
    dibujarBoton(400, 395, 350, 50, op2Texto[escena]);
  } else {
    //si la opcion 2 no existe, dibujar la opcion 1 en el medio
    dibujarBoton(240, 395, 350, 50, op1Texto[escena]);
  }
}

// PANTALLA FINAL
// Muestra un mensaje distinto según los puntos acumulados.
function dibujarFinal() {
  image(fondos[8], 0, 0);

  let mensaje = "";

  //  Selección del final según puntos
  if (puntos >= -3 && puntos <= -1) { // Final solo
    image(prota[4], 400, 200, 120, 200);
    fill(10, 12, 46, 150);
    rect(0, 0, width, height);
    mensaje = "-1 a -3 PUNTOS:\n\nVuelves a tu casa cansado y te acostas a descansar. No fue un muy buen día, pero quizá el siguiente lo sea...";
  } else if (puntos >= 0 && puntos <= 2) {     // Final neutro

    image(prota[5], 400, 200, 120, 200);
    fill(10, 12, 46, 150);
    rect(0, 0, width, height);
    mensaje = "0 a 2 PUNTOS:\n\nVuelves a tu casa cansado. Tu celular se prende y ves que te escribió alguien preguntándote si te quieres juntar mañana. Conseguiste un amigo!";
  } else if (puntos > 2) {    // Final amigos
    image(prota[6], 400, 200, 120, 200);
    fill(10, 12, 46, 150);
    rect(0, 0, width, height);
    mensaje = "Más de 2 PUNTOS:\n\nVuelves a tu casa contento. Ves varias notificaciones no leídas de un grupo nuevo y varias fotos de tus nuevos amigos y vos. Hoy fue un buen día";
  }
  // --- Título ---

  push();
  fill(255);
  textSize(22);
  textAlign(CENTER, TOP);
  text("FINAL", width/2, 60);
  pop();
  // --- Mensaje final ---
  push();
  textSize(16);
  fill(220);
  textAlign(LEFT, TOP);
  text(mensaje, 80, 120, width - 160, 200);
  pop();

  dibujarBoton(btnReiniciarX, btnReiniciarY, btnReiniciarW, btnReiniciarH, "REINICIAR");
}

// PANTALLA DE CRÉDITOS
function dibujarCreditos() {
  background(30);
  if (yCreditos < 0) {
    yCreditos += 2;  // velocidad de descenso
  }
  fill(255);
  textAlign(CENTER, TOP);
  textSize(40);
  text("CRÉDITOS", width / 2, 60);

  textSize(18);
  fill(220);
  text("Comisión 3", width / 2, 140 + yCreditos);
  text("Catalina Fernandez", width / 2, 180 + yCreditos);
  text("Paulina Prado", width / 2, 210 + yCreditos);
  text("Fondos: nuestra bella facu :)", width / 2, 250 + yCreditos);


  // Botón volver
  dibujarBoton(btnVolverX, btnVolverY, btnVolverW, btnVolverH, "VOLVER");
}
