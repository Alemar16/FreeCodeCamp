const fs = require('fs');

//cambiar el nombre de un archivo
fs.rename('main.html', 'index.html', (err) => {
  if (err) {
    throw err;
  }
  console.log('Archivo renombrado');
})