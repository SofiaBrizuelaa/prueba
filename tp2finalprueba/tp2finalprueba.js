let juego;

function setup() {
  // Configuración inicial del canvas
  createCanvas(640, 480);
  juego = new Juego(); // Crear instancia del juego
}

function draw() {
  background(220);

  if (juego.jugando) {
    juego.generarObjetos();
    juego.actualizar();
  } else {
    if (juego.personaje.vidas <= 0 || juego.tiempoRestante <= 0) {
      juego.mostrarFinDelJuego();
    } else {
      juego.mostrarPantallaInicio();
    }
  }
}

function mousePressed() {
  juego.clic(mouseX, mouseY);
}
