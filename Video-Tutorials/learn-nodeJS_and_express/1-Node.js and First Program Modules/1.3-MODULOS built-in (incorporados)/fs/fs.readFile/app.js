const fs = require('fs');

//Leer un archivo con el metodo fs.readFile

fs.readFile('index.html', 'utf-8', (err, contenido) => {
  if (err) {
    throw err; //throw error detiene la ejecucion de la funcion del condicional
    console.log(err);//imprime el error pero permite la continuidad de la funcion hasta el final
  } else {
    console.log(contenido);
  }
  console.log('mensaje...');
});