//Comisión 3
// Catalina Fernandez, LEGAJO: 125571/3
// VIDEO: https://youtu.be/wfiTqmB7LwY
// Paulina Prado, LEGAJO: 125664/7
// VIDEO: https://youtu.be/B-LeauO7hkM

//MÁQUINA DE ESTADOS
let pantalla; // inicio, creditos, juego o final
let escenaActual = 0; //guarda el número de la escena que se está
let esCondicional = [];// Indicador de escena condicional (solo la 9 es true)

let puntos = 0;

//CONTENIDO VISIBLE DE LA PANTALLA
// Imágenes
let fondos = [];        //array para CARGAR las imagenes
let fondoEscena = [];   //establece qué fondo le toca a cada escena (índice)
let prota = [];         // Array para cargar las imagenes
let protaEscena = [];   // qué expresión le toca a cada escena

// Otros personajes (imágenes sueltas, no arrays)
let oru;
let qif;
let ivan = [];
let mizi;
let sua;

// Textos y opciones de cada escena
let textos = [];        // narración de cada escena
let op1Texto = [];      // texto de la opción 1
let op1Puntos = [];     // cuántos puntos suma/resta la opción 1
let op1Sig = [];        // a qué escena lleva la opción 1
let op2Texto = [];      // texto de la opción 2
let op2Puntos = [];     // cuántos puntos suma/resta la opción 2
let op2Sig = [];        // a qué escena lleva la opción 2

//COORDENADAS BOTONES
// Botón REINICIAR (pantalla final)
let btnReiniciarX = 300;
let btnReiniciarY = 350;
let btnReiniciarW = 200;
let btnReiniciarH = 50;

// Botón COMENZAR (pantalla de inicio)
let btnInicioX = 290;
let btnInicioY = 310;
let btnInicioW = 220;
let btnInicioH = 60;

// Botón CRÉDITOS (pantalla de inicio)
let btnCreditosX = 290;
let btnCreditosY = 390;
let btnCreditosW = 220;
let btnCreditosH = 50;

// Botón VOLVER (pantalla de créditos)
let btnVolverX = 300;
let btnVolverY = 380;
let btnVolverW = 200;
let btnVolverH = 50;

//animacion textos creditos
let yCreditos;

//audios
let genteHablando;
let llenarVaso;
let vasoReproducido = false;
let afuera;


function preload() {
  for ( i = 0; i <9; i++) {
    fondos[i] = loadImage("data/fondos/" + nf(i, 2) + ".jpg");
  }
  for ( i = 0; i <7; i++) {
    prota[i] = loadImage("data/personajes/till/" + nf(i, 2) + ".png");
  }
  for ( i = 0; i <3; i++) {
    ivan[i] = loadImage("data/personajes/ivan/" + nf(i, 2) + ".png");
  }
  oru = loadImage("data/personajes/oru.png");
  qif = loadImage("data/personajes/qif.png");
  mizi=loadImage("data/personajes/mizi.png");
  sua=loadImage("data/personajes/sua.png");

  genteHablando=loadSound("data/audio/gente.mp3");
  llenarVaso=loadSound("data/audio/cafe.mp3");
  afuera=loadSound("data/audio/afuera.mp3");
}

function setup() {
  createCanvas(800, 450);
  pantalla = "inicio";
  textAlign(CENTER, TOP);
  textSize(18);
  //FONDOS le asigno un fondo a cada escena
  fondoEscena[0] = 0;
  fondoEscena[1] = 1;
  fondoEscena[2] = 1;
  fondoEscena[3] = 3;
  fondoEscena[4] = 3;
  fondoEscena[5] = 2;
  fondoEscena[6] = 3;
  fondoEscena[7] =3;
  fondoEscena[8] = 2;
  fondoEscena[9] = 4;
  fondoEscena[10] = 4;
  fondoEscena[11] = 7;
  fondoEscena[12] = 4;
  fondoEscena[13] = 6;
  fondoEscena[14] = 4;
  fondoEscena[15] = 1;
  fondoEscena[16] = 5;

  //PROTAGONISTA asigno que expresion del protagonista tendrá cada escena
  protaEscena[0]=0;
  protaEscena[1]=1;
  protaEscena[2]=0;
  protaEscena[3]=3;
  protaEscena[4]=0;
  protaEscena[5]=1;
  protaEscena[6]=1;
  protaEscena[7]=3;
  protaEscena[8]=0;
  protaEscena[9]=2;
  protaEscena[10]=2;
  protaEscena[11]=3;
  protaEscena[12]=2;
  protaEscena[13]=3;
  protaEscena[14]=2;
  protaEscena[15]=0;
  protaEscena[16]=3;
  //  TEXTOS de cada escena
  textos[0] = "\"Hoy es mi primer día en la facultad de artes. Estoy bastante ansiosa, no conozco a nadie. Ojalá poder encontrar amigos rápido...\"";
  textos[1] = "\"Bueno, la charla es en el Auditorio Gleyzer, pero... No sé dónde es... No se entiende nada el planito de la facu. Qué hago?\"";
  textos[2] = "\“Hola, disculpa, me podés mostrar dónde queda el auditorio Gleyzer?\”\n\“Sí dalee, veni que te acompaño\”";
  textos[3] = "Gracias a la ayuda de la chica de cronopios, llegás bien a la charla y conseguís un lugar rápido.";
  textos[4] = "Después de un rato, un grupo de amigos se sienta al lado tuyo. Parecen amistosos, te ofrecen un mate.";
  textos[5] = "Te pasas media hora buscando por dónde no es, y llegas tarde. Pero por lo menos llegaste!";
  textos[6] = "Ya casi no queda lugar en la sala, un grupo de personas te ofrecen un lugar al lado de ellos.";
  textos[7] = "El grupo te acepta e incluye rápidamente.";
  textos[8] = "Al terminar la charla, sentís un gran antojo de probar algo dulce ¡Es una buena oportunidad para probar la maquina de abajo!";
  textos[9] = "Al llegar a la maquina, haces la cola para usarla. Seleccionas un vaso de chocolatada y esperas. Desafortunadamente, ya se acabó y te sale solo agua.";
  textos[10] = "Los chicos de la charla te reconocen y te invitan a comer facturas con ellos a la plaza para compensar lo del café";
  textos[11] = "Pasas el resto del día con tus nuevos amigos comiendo facturas y jugando a las cartas en Plaza Rocha :D";
  textos[12] = "Uno de los chicos del grupo te reconoce y se apiada de vos. Te pregunta si queres un alfajor del buffet.";
  textos[13] = "Lo seguis hasta el buffet y después de disfrutar de un alfajor triple, los demas chicos del grupo te invitan a ir con ellos a la plaza a pasar el rato.";
  textos[14] ="”... Bueno... que triste... Debería volver a casa. Ya no quedan más charlas por hoy”";
  textos[15] ="A la salida, alguien de una agrupación se te acerca con un panfleto detallando planes de la semana.";
  textos[16] ="Logras entablar conversación con alguien en el taller y se vuelven amigos. Antes de irse se agendan en Whatsapp.";
  // --- CONDICIONAL (solo escena 5) ---
  for (let i = 0; i < 16; i++) esCondicional[i] = false;
  esCondicional[9] = true; //establece como condicional únicamente la escena 9
  //el camino que sigue dependerá de la cantidad de puntos

  //  OPCIONES //opciones de cada escena
  // Escena 0
  op1Texto[0] = "\"Veamos... A dónde tengo que ir...\"";
  op1Puntos[0] = 0;
  op1Sig[0] = 1;
  op2Texto[0] = "";
  op2Puntos[0] = 0;
  op2Sig[0] = 0;

  // Escena 1
  op1Texto[1] = "\"Quizá le pueda preguntar a uno de los de Cronopios...\"";
  op1Puntos[1] = 1;
  op1Sig[1] = 2;
  op2Texto[1] = "\"Mejor no los molesto... Buscaré por mi cuenta\"";
  op2Puntos[1] = -1;
  op2Sig[1] = 5;

  // Escena 2
  op1Texto[2] = "\"Muchas gracias!\"";
  op1Puntos[2] = 0;
  op1Sig[2] = 3;
  op2Texto[2] = "";
  op2Puntos[2] = 0;
  op2Sig[2] = 0;

  // Escena 3
  op1Texto[3] = "\"¡Qué bueno! Me sentaré por aca \"";
  op1Puntos[3] = 0;
  op1Sig[3] = 4;
  op2Texto[3] = "";
  op2Puntos[3] = 0;
  op2Sig[3] = 0;

  // Escena 4
  op1Texto[4] = "\"Bueno, quiero. Gracias! :)\"";
  op1Puntos[4] = 1;
  op1Sig[4] = 7;
  op2Texto[4] = "\"No, estoy bien, gracias\"";
  op2Puntos[4] = -1;
  op2Sig[4] = 8;

  // Escena 5
  op1Texto[5] = "\"Qué pena... primer día y ya estoy llegando tarde\"";
  op1Puntos[5] = 0;
  op1Sig[5] = 6;
  op2Texto[5] = "";
  op2Puntos[5] = 0;
  op2Sig[5] = 0;

  // Escena 6
  op1Texto[6] = "\nQué simpáticos ¡Me voy a sentar con ellos!\n";
  op1Puntos[6] = 1;
  op1Sig[6] = 7;
  op2Texto[6] = "\"Qué vergüenza... mejor me quedo parado\"";
  op2Puntos[6] = -1;
  op2Sig[6] = 8;

  // Escena 7
  op1Texto[7] = "\"¡Gracias chicos!\"";
  op1Puntos[7] = 0;
  op1Sig[7] = 8;
  op2Texto[7] = "";
  op2Puntos[7] = 0;
  op2Sig[7] = 0;

  // Escena 8
  op1Texto[8] = "\"Quizá me pida una chocolatada\"";
  op1Puntos[8] = 0;
  op1Sig[8] = 9;
  op2Texto[8] = "";
  op2Puntos[8] = 0;
  op2Sig[8] = 0;

  // Escena 9
  op1Texto[9] = "\"Realmente quería algo dulce...\"";
  op1Puntos[9] = 0;
  op1Sig[9] = 10;
  op2Texto[9] = "";
  op2Puntos[9] = 0;
  op2Sig[9] = 0;

  // Escena 10
  op1Texto[10] = "\“¡Voy con ustedes!\” ";
  op1Puntos[10] = 2;
  op1Sig[10] = 11;
  op2Texto[10] = "\“La verdad estoy cansado, quiero volver a mi casa. Gracias chicos.\” ";
  op2Puntos[10] = 0;
  op2Sig[10] = 17;

  // Escena 11
  op1Texto[11] = "Ver final";
  op1Puntos[11] = 0;
  op1Sig[11] = 17;
  op2Texto[11] = "";
  op2Puntos[11] = 0;
  op2Sig[11] = 0;

  // Escena 12
  op1Texto[12] = "\“Ay, bueno dale ¡Muchas gracias!\”";
  op1Puntos[12] = 1;
  op1Sig[12] = 13;
  op2Texto[12] = "\“Nah, no pasa nada tranqui, gracias. Ya me vuelvo a mi casa.\”";
  op2Puntos[12] = -1;
  op2Sig[12] = 15;

  // Escena 13 (solo una opción)
  op1Texto[13] = "\“¡Voy con ustedes!\”";
  op1Puntos[13] = 2;
  op1Sig[13] = 11;
  op2Texto[13] = "\“La verdad estoy cansada, quiero volver a mi casa. Gracias chicos.\” ";
  op2Puntos[13] = -2;
  op2Sig[13] = 15;

  op1Texto[14] = "Caminas hasta la salida";
  op1Puntos[14] = 0;
  op1Sig[14] = 15;
  op2Texto[14] = "";
  op2Puntos[14] = 0;
  op2Sig[14] = 0;

  op1Texto[15] = "\"Qué interesante ¿Este es ahora? Creo que voy a ir\"";
  op1Puntos[15] = 2;
  op1Sig[15] = 16;
  op2Texto[15] = "\"Gracias, pero ya me tengo que ir\" ";
  op2Puntos[15] = -1;
  op2Sig[15] = 17;

  op1Texto[16] = "Ver final";
  op1Puntos[16] = 0;
  op1Sig[16] = 17;
  op2Texto[16] = "";
  op2Puntos[16] = 0;
  op2Sig[16] = 0;
}


function draw() {
  background(30);
  sonidoAmbiente();
  if (pantalla === "inicio") {
    dibujarInicio();
  } else if (pantalla === "creditos") {
    dibujarCreditos();
  } else if (pantalla === "juego") {
    dibujarJuego( escenaActual);
  } else if (pantalla === "final") {
    dibujarFinal();
  }
}

function sonidoAmbiente() {
  // --- SONIDOS AMBIENTE (afuera y genteHablando) ---
  if (pantalla === "juego") {
    let escena = escenaActual;

    // Escenas donde suena "afuera"
    let escenaAfuera = (escena === 0 || escena === 1 ||escena === 2 || escena === 11 || escena === 15);
    // Escenas donde suena "genteHablando"
    let escenaGente = (escena === 4 ||escena === 5 || escena === 6 ||escena === 7 || escena === 9 || escena === 10|| escena === 12|| escena === 13|| escena === 14|| escena === 16);

    if (escenaAfuera) {
      if (!afuera.isPlaying()) {
        afuera.loop();
      }
      if (genteHablando.isPlaying()) {
        genteHablando.pause();
      }
    } else if (escenaGente) {
      if (!genteHablando.isPlaying()) {
        genteHablando.loop();
      }
      if (afuera.isPlaying()) {
        afuera.pause();
      }
    } else {
      // Si no es ninguna de las escenas con sonido, pausamos ambos
      if (afuera.isPlaying()) afuera.pause();
      if (genteHablando.isPlaying()) genteHablando.pause();
    }
  } else {
    // Fuera de la pantalla de juego, pausamos todos los ambientes
    if (afuera.isPlaying()) afuera.pause();
    if (genteHablando.isPlaying()) genteHablando.pause();
  }

  // --- SONIDO DEL VASO (llenarVaso) ---
  // Suena una sola vez al entrar a la escena 9
  if (pantalla === "juego" && escenaActual === 9) {
    if (!vasoReproducido) {
      llenarVaso.play();
      vasoReproducido = true;
    }
  } else {
    if (vasoReproducido) {
      vasoReproducido = false;
      if (llenarVaso.isPlaying()) {
        llenarVaso.stop();
      }
    }
  }


  // --- SONIDO DEL VASO (llenandoVaso) ---
  // Suena una sola vez al entrar a la escena 9
  if (pantalla === "juego" && escenaActual === 9) {
    if (!vasoReproducido) {
      llenarVaso.play();
      vasoReproducido = true;
    }
  } else {
    // Si salimos de la escena 9 (o de la pantalla de juego), reseteamos
    if (vasoReproducido) {
      vasoReproducido = false;
      if (llenarVaso.isPlaying()) {
        llenarVaso.stop();
      }
    }
  }
}

function dibujarBoton(x, y, w, h, texto) {
  // Recibe posición (x, y), tamaño (w, h) y texto.
  // Detecta si el mouse está encima (hover) y cambia el color.

  let sobreBoton = mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
  if (sobreBoton === true) { //si el mouse esta sobre el boton cambia de color
    fill (80, 120, 200);
  } else {
    fill(50, 70, 120);
  }
  rect(x, y, w, h, 8);
  push();
  textAlign(CENTER, CENTER);
  textSize(14);
  fill(255);
  textSize(15);
  text(texto, x, y, w - 10, h);
  pop();
}

function mousePressed() {
  //  PANTALLA DE INICIO 
  if (pantalla === "inicio") {
    // Clic en COMENZAR
    if (mouseX > btnInicioX && mouseX < btnInicioX + btnInicioW &&
      mouseY > btnInicioY && mouseY < btnInicioY + btnInicioH) {
      pantalla = "juego";
      escenaActual = 0;
      puntos = 0;
    }
    //Clic en CREDITOS
    if (mouseX > btnCreditosX && mouseX < btnCreditosX + btnCreditosW &&
      mouseY > btnCreditosY && mouseY < btnCreditosY + btnCreditosH) {
      pantalla = "creditos";
      yCreditos = -200;  // reinicia la animación
    }
    //  PANTALLA DE CRÉDITOS 
  } else if (pantalla === "creditos") {
    // Botón VOLVER
    if (mouseX > btnVolverX && mouseX < btnVolverX + btnVolverW &&
      mouseY > btnVolverY && mouseY < btnVolverY + btnVolverH) {
      pantalla = "inicio";
    }
  } else if (pantalla === "juego") {
    let escena = escenaActual;
    //  Caso especial: escena condicional (la 9) 
    if (esCondicional[escena]) {  
      //Evalua si la escena actual es condicional, si lo es...
      if (mouseX > 300 && mouseX < 500 && mouseY > 380 && mouseY < 430) {
        //.. Según los puntos acumulados, decide a qué escena ir
        if (puntos > 0) escenaActual = 10;
        else if (puntos == 0) escenaActual = 12;
        else escenaActual = 14;
      }
      return;
    }

    // Opciones normales 

    // Si existen AMBAS opciones (op1 y op2)
    if (op1Texto[escena] !== "" && op2Texto[escena] !== "") {
      // Opción 1
      if (mouseX > 40 && mouseX < 390 && mouseY > 395 && mouseY < 445) {
        puntos += op1Puntos[escena];
        if (op1Sig[escena] === 17) pantalla = "final";
        else escenaActual = op1Sig[escena];
        return;
      }
      // Opción 2
      if (mouseX > 400 && mouseX < 750 && mouseY > 395 && mouseY < 445) {
        puntos += op2Puntos[escena];
        if (op2Sig[escena] === 17) pantalla = "final";
        else escenaActual = op2Sig[escena];
        return;
      }
      // Si solo existe la opción 1 (botón centrado)
    } else if (op1Texto[escena] !== "") {

      if (mouseX > 240 && mouseX < 590 && mouseY > 395 && mouseY < 445) {
        puntos += op1Puntos[escena];
        if (op1Sig[escena] === 17) pantalla = "final";
        else escenaActual = op1Sig[escena];
        return;
      }
    }
    // ---------------- PANTALLA FINAL ----------------
  } else if (pantalla === "final") {
    if (mouseX > btnReiniciarX && mouseX < btnReiniciarX + btnReiniciarW &&
      mouseY > btnReiniciarY && mouseY < btnReiniciarY + btnReiniciarH) {
      pantalla = "inicio";
      escenaActual = 0;
      puntos = 0;
    }
  }
}
