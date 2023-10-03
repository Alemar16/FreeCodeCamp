//funcion expresada normal
// function mostrarTema(tema) {
//   console.log(`El tema es: ${tema}`);
// }
// console.log("primera funcion");
// mostrarTema("Javascript");
// console.log("+++++++++++++++++++++++++++++++++++++")

//funcion expresada con setImmediate

function mostrarTema2(tema) {
  console.log(`El tema es: ${tema}`);
}

console.log("antes de setImmediate");
setImmediate(mostrarTema2, "NodeJS");
console.log("despues de setImmediate");