// modo ES6

import { saludar, responder } from "./funciones.js";
//console.log(saludar)

saludar("Armando");
responder();

//en esta ocacion el uso de export con el modo CommonJS es diferente a el uso de export con el modo ES6
//porque en el modo CommonJS se exporta un objeto y en el modo ES6 se exporta una funcion
//se debe usar un archivo package.json para definir las exportaciones con "type": "module" 