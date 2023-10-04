
//funcion expresada normal
function mostrarTema(tema) {
  console.log(`El tema es: ${tema}`);
}
console.log("primera funcion");
mostrarTema("Javascript");
console.log("+++++++++++++++++++++++++++++++++++++")

//funcion expresada con retrazo
function mostrarTema2(tema) {
  console.log(`El tema es: ${tema}`);
}
console.log("segunda funcion con retrazo de 3s");
setTimeout(mostrarTema2, 3000, "NodeJS");


//funcion expresada con varios argumantos
function mostrarTema3(tema, color) {
  console.log(`El tema es: ${tema}`);
  console.log(`El color es: ${color}`);
}
setTimeout(mostrarTema3, 6000, "NodeJS", "Verde");

