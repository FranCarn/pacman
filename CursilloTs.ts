class Transporte {
  private velocidad: number;
  constructor(velocidad: number) {
    this.velocidad;
  }
  getVelocidad(): number {
    return this.velocidad;
  }
  setVelocidad(velocidad: number): void {
    this.velocidad = velocidad;
  }
}

class Auto extends Transporte {
  numeroDePuertas: number;
  constructor(velocidad: number, numeroDePuertas: number) {
    super(velocidad); // el super es para llamar al constructor del padre
    this.numeroDePuertas = numeroDePuertas;
  }
  getVelocidad(): number {
    return super.getVelocidad() * 2; // con el super se trae la velocidad del padre (transporte) y la multiplica x 2, al hacer este tipo de override sobre funcion del constructor padre no se debe modificar el tipo del return de la funcion, en este caso que es number no se lo puede pisar con tipo void o string. Esto seria un polimorfismo de POO (un obj o entidad se va a comportar de manera diferente segun su contexto)
  }
}

const transporte = new Transporte(250);
const auto = new Auto(200, 4);

const transportesArray: Transporte[] = [transporte, auto];

transportesArray.forEach(
  (transporte) => console.log(transporte.getVelocidad()) //  aca se demuestra el contexto del polimorfismo en si, todo depende si el contexto es un auto o un transporte en este caso, llamando asi cada una de sus funciones en su respectivo momento sin alterar la anterior
);
// mientras mas general es algo es mas rehutilizable es
console.log(auto.getVelocidad);
