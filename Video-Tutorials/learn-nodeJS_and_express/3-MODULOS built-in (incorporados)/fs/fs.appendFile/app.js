const fs = require('fs');

//agregar contenido al final de un archivo

fs.appendFile('index.html', '<p>Se agregado un parrafo</p>', (err) => {
  if (err) {
    throw err;
  }
  console.log('Archivo modificado');
});