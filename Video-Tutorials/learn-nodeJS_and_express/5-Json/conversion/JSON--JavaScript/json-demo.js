const curso = require('./curso.json'); //se importa el archivo json
  
console.log(curso);//imprime el objeto en la terminal con el comando "node json-demo.js"
//respuesta:
/* 
{
  titulo: 'Curso de JSON',
  nunVistas: 45642,
  nunLikes: 21123,
  temas: [ 'JavaScript', 'Node.js' ],
  espublico: true
} 
*/
//para ver el tipo de dato que contiene el objeto
console.log(typeof curso);
//respuesta: object

//para acceder al contenido del objeto se utiliza el operador punto
console.log(curso.titulo);
//respuesta: 'Curso de JSON'

console.log(curso.temas);
//respuesta: [ 'JavaScript', 'Node.js' ]

//de esta forma hay una correspondencia inmediata entre el archivo json y el objeto de JavaScript
