// CLASES

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
console.log(auto.getVelocidad());

// Interfaces

interface Persona {
  nombre: string;
  edad: number;
  getVelocidad: (param: number) => number;
}

const person: Persona = {
  nombre: "Franco",
  edad: 23,
  getVelocidad: (param) => {
    return param * 2;
  },
};

let persona2 = {
  nombre: "Rodolfo",
  edad: 106,
  getVelocidad: (param) => {
    return param * 90;
  },
};

persona2 = person;

// Como estructurar una interfaz:

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterOrigin;
}
interface CharacterOrigin {
  name: string;
  url: string;
}

// siempre se nombran en singular, de ser plural se hace de la siguiente forma

const ArrayCharacters: Character[] = [
  {
    id: 1,
    name: "asdasd",
    status: "asdasd",
    species: "asdasd",
    type: "asdasd",
    gender: "asdasd",
    origin: {
      name: "asdasd",
      url: "asdasd",
    },
  },
  {
    id: 2,
    name: "asdasd",
    status: "asdasd",
    species: "asdasd",
    type: "asdasd",
    gender: "asdasd",
    origin: {
      name: "asdasd",
      url: "asdasd",
    },
  },
];

// clases e interfaces se pueden utilizar como tipos pero se puede hacer más, hay una propiedad muy importante que es: la comparacion de las shapes, hace las cosas por formas un string es diferente a cualquier otra propiedad porque tienen diferentes propiedades dentro, asi es como ts funciona, hay un jueguito que se puede hacer con esto.

// se pueden crear nuestros propios tipos:

// CUSTOM TYPES, uniones de ellos, Intersecciones y types para funciones.

type Dni = string;
const dni: Dni = "123123123";
const dn2: string = "123123123";

const tellMeMyDni = (dni: Dni) => {
  console.log(dni);
};

// si el dia de mañana el dni pasa a number solo se cambia de un solo lado por eso tiene mas sentido de hacerlo asi

interface Tipazo {
  nombre: string;
  edad: number;
}

const personita: Tipazo = {
  nombre: "Agus",
  edad: 23,
};

// Las interfaces se pueden extender
interface Abogado extends Tipazo {
  legajo: string;
}
const abogadito: Abogado = {
  nombre: "James M McGill",
  edad: 45,
  legajo: "21",
};

// se puede hacer union de tipos

interface Interface1 {
  prop1: string;
}
interface Interface2 {
  prop2: number;
}

type interfaceMixUnion = Interface1 | Interface2;

const mixUnionAll: interfaceMixUnion = {
  prop1: "1",
  prop2: 2,
};
const mixUnionOne: interfaceMixUnion = {
  prop1: "1",
};
const mixUnionTwo: interfaceMixUnion = {
  prop2: 2,
};

// Tambien puede haber intersecciones de tipos (Unifica las interfaces, tiene que complir todas las propiedades de ambas interfaces o las que sean)

type interfaceMixIntersection = Interface1 & Interface2;

const intersectionMix: interfaceMixIntersection = {
  prop1: "1",
  prop2: 12,
};

// Types para metodos

type SumaFunction = (param1: number, param2: number) => number;

const expectSuma = (suma: SumaFunction) => {
  return suma(2, 1);
};

const sumaFunction: SumaFunction = (param1, param2) => {
  return param1 + param2;
};
// esta seria sin el type
const sumaFunction1 = (param1: number, param2: number): number => {
  return param1 + param2;
};

expectSuma(sumaFunction);
