class Objeto {
  constructor(x, y, velocidad, tipo) {
    this.x = x;
    this.y = y;
    this.velocidad = velocidad;
    this.tipo = tipo;
    this.tamano = 30;
  }

  mostrar() {
    fill(this.tipo === "bueno" ? color(0, 255, 0) : color(255, 0, 0));
    ellipse(this.x, this.y, this.tamano);
  }

  mover() {
    this.y += this.velocidad;
  }

  fueraDePantalla() {
    return this.y > height;
  }
}
