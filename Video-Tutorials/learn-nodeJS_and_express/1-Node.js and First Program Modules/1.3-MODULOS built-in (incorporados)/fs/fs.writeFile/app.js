const fs = require('fs');

//Reemplazar todo el contenido del archivo

fs.writeFile('index.html', 'Contenido Nuevo', (err) => {
  if (err) {
    throw err;
  }
  console.log('Archivo modificado');
});