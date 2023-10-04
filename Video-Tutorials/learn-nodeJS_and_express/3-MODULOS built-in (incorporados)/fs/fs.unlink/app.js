const fs = require('fs');

//eliminar archivos usando el metodo fs.unlink

fs.unlink('index2.html', (err) => {
  if (err) {
    throw err;
  }
  console.log('Archivo eliminado');
});

