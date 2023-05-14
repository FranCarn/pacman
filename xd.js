function crearImpresoraDeMensajes(tipo, estilos) {
  return function mensaje(str) {
    console.log(`%c ${tipo}: ${str} `, estilos);
  };
}

const error = crearImpresoraDeMensajes(
  "Error",
  "background: red; color: white;"
);
const warning = crearImpresoraDeMensajes(
  "Warning",
  "background: orange; color: white;"
);
const exito = crearImpresoraDeMensajes(
  "Éxito",
  "background: green; color: white;"
);

console.log("1");
const promise = new Promise((resolve, reject) => {
  resolve(2);
});
promise.then((value) => console.log(value));
setTimeout(() => {
  console.log("3");
}, 0);
console.log("4");
