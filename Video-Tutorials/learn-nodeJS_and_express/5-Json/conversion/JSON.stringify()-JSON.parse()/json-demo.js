let infoCurso = {
  titulo: "Curso de JSON",
  nunVistas: 45642,
  nunLikes: 21123,
  temas: ["JavaScript", "Node.js"],
  esPublico: true,
};

console.log(infoCurso); //imprime el objeto en la terminal con el comando "node json-demo.js"
//respuesta:
/*{
  titulo: 'Curso de JSON',
  nunVistas: 45642,
  nunLikes: 21123,
  temas: [ 'JavaScript', 'Node.js' ],
  espublico: true
}
*/

//para ver el tipo de dato que contiene el objeto
console.log(typeof infoCurso);
//respuesta: object

//=========================================================

//CADENA DE CARRACTERES EN FORMATO JSON
//DE OBJETO --> FORMATO JSON

//Para trandormar este objeto en formato JSON se utiliza el metodo JSON.stringify() para enviarlo a un servidor o guardarlo en un archivo

let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);//imprime el objeto en una cadena de caracteres pero en formato JSON

console.log(typeof infoCursoJSON);//imprime el tipo de dato

//que pasa si de esta forma quiero acceder a una propiedad del objeto?
console.log(infoCursoJSON.titulo);//imprime undefined

//=========================================================

//CADENA DE CARRACTERES EN FORMATO OBJETO
//JSON --> OBJETO

//Para trandormar este formato JSON se utiliza el metodo JSON.parse() para usarlo en el programa o leerlo de un archivo

let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(infoCursoObjeto);//imprime el objeto en una cadena de caracteres pero en formato objeto

console.log(typeof infoCursoObjeto);//imprime el tipo de dato

//que pasa si de esta forma quiero acceder a una propiedad del objeto?
console.log(infoCursoObjeto.titulo);//imprime "Curso de JSON"
