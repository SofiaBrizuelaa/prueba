let estado;
let textos = [];
let botonA = [];
let botonB = [];
let imagenes = []; // Array de imágenes

function preload() {
  // Cargar imágenes en el array
  imagenes[0] = loadImage('data/imagen_00.png');
  imagenes[1] = loadImage('data/imagen_01.png'); 
  imagenes[2] = loadImage('data/imagen_02.png'); 
  imagenes[3] = loadImage('data/imagen_03.png');
  imagenes[4] = loadImage('data/imagen_04.png');
  imagenes[5] = loadImage('data/imagen_05.png');
  imagenes[6] = loadImage('data/imagen_06.png');
  imagenes[7] = loadImage('data/imagen_07.png');
  imagenes[8] = loadImage('data/imagen_08.png');
  imagenes[9] = loadImage('data/imagen_09.png');
  imagenes[10] = loadImage('data/imagen_10.png');
  imagenes[11] = loadImage('data/imagen_11.png');
  imagenes[12] = loadImage('data/imagen_12.png');
  imagenes[13] = loadImage('data/imagen_13.png');
  imagenes[14] = loadImage('data/imagen_14.png');
  imagenes[15] = loadImage('data/imagen_15.png');
  imagenes[100] = loadImage('data/imagen_16.png'); 
 
}

function setup() {
  createCanvas(640, 480);
  inicializar();
}

function draw() {
  image(imagenes[estado], 0, 0, width, height);

  if (estado === 0) {
    pantallaInicio();
  } else if ( estado === 100) {
    pantallaCreditos();

    //pregunto por todas las pantallas con 2 botones:
  } else if ( estado===2 || estado===3 || estado===7 || estado===8 || estado===11 ) {
    pantallaDosBotones(textos[estado], botonA[estado], botonB[estado] );

    //pregunto por todas las pantallas con 1 boton:
  } else if ( estado===1 || estado===4 || estado===5 || estado===6 || estado===9 || estado===10 || estado===12 || estado===13 || estado===14 || estado===15 ) {
    pantallaUnBoton(textos[estado], botonA[estado]);
  }
}


function mousePressed() {
   if (estado === 0) {
    if ( colisionBoton(width/2, height*0.75, 200, 40) ) { //EMPEZAR
      //flujo de estado:
      estado=1;
    } else if ( colisionBoton(width/2, height*0.75+60, 200, 40) ) { //CREDITOS
      //flujo de estado:
      estado=100;
    }
  } else if ( estado === 100 ) {
    if ( colisionBoton(width/2, height*0.75+60, 200, 40) ) { //CREDITOS
      //flujo de estado:
      estado=0;
    }
  } else if ( estado===1 ) {
    if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=2;
     }
    } else if (estado===2 ) { 
      if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=3;
       } else if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //B
      //flujo de estado:
      estado=4;
    }
  } else if ( estado===3 ) {
    if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=5;
      } else if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //B
      //flujo de estado:
      estado=6;
    }
  } else if ( estado===4 ) {
    if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=8;
    }
  } else if ( estado===5 ) {
  if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=7;
   }
  } else if ( estado===6 ){
  if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=7;
   }
  } else if ( estado===7 ){
     if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=11;
      } else if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //B
      //flujo de estado:
      estado=12;
      }
  } else if ( estado===8 ){
     if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=9;
      } else if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //B
      //flujo de estado:
      estado=10;
      }
  } else if ( estado===9 ){
     if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=3;
     }
  } else if ( estado===10 ){
    if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=15;
    }
  } else if ( estado===11 ){
     if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=13;
      } else if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //B
      //flujo de estado:
      estado=14;
      }
  }  else if ( estado===12 ){
      if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=10;
      }
  } else if ( estado===13 ){
     if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=0;
     }
  } else if ( estado===14 ){
    if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=0;
    }
  } else if ( estado===15 ){
        if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //A
      //flujo de estado:
      estado=0;
    }
  }
  console.log("estado: "+estado);
}
