//funcion expresada normal
function mostrarTema(tema) {
  console.log(`El tema es: ${tema}`);
}
console.log("primera funcion");
mostrarTema("Javascript");
console.log("+++++++++++++++++++++++++++++++++++++");

//funcion expresada con el metodo setInterval()
function mostrarTema2(tema) {
  console.log(`El tema es: ${tema}`);
  console.log("++++++(despues de 8 segundos)++++++");
}
console.log("segunda funcion");
setInterval(mostrarTema2, 8000, "Javascript");

//se usa el comando node setInterval.js para ejecutar la funcion en la terminal
//se detiene con el comando "ctrl + c"