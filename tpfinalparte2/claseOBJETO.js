class Objeto {
  constructor() {
    this.x = random(0, width);
    this.y = 0;
    this.tam = 20;
    this.velocidad = random(2, 5);
    this.bueno = random(1) > 0.5; // 50% buenos, 50% malos
  }

  mostrar() {
    fill(this.bueno ? "green" : "red");
    ellipse(this.x, this.y, this.tam);
  }

  mover() {
    this.y += this.velocidad;
  }

  toca(personaje) {
    return (
      this.y + this.tam / 2 > personaje.y &&
      this.x > personaje.x &&
      this.x < personaje.x + personaje.tam
    );
  }

  fueraDePantalla() {
    return this.y > height;
  }
}
