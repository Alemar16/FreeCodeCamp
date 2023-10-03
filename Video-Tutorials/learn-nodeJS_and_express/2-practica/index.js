
//CUANDO SE USA LA SINTAXIS (sumar(2, 3)) no se mostrará el resultado en la consola debido a que se necesita una variable que contenga el resultado o el uso del metodo console.log.

console.log("OPCION 1");
const { sumar, restar, multiplicar, dividir } = require('./funciones.js');

sumar(2, 3);
restar(2, 3);
multiplicar(2, 3);
dividir(9, 3);

console.log("OPCION 2");


console.log(sumar(2, 3)); // Imprime el resultado de la suma
console.log(restar(2, 3)); // Imprime el resultado de la resta
console.log(multiplicar(2, 3)); // Imprime el resultado de la multiplicación
console.log(dividir(9, 3)); // Imprime el resultado de la división

console.log("OPCION 3");


const resultadoSuma = sumar(2, 3);
const resultadoResta = restar(2, 3);
const resultadoMultiplicacion = multiplicar(2, 3);
const resultadoDivision = dividir(9, 3);

console.log(resultadoSuma); // Imprime el resultado de la suma
console.log(resultadoResta); // Imprime el resultado de la resta
console.log(resultadoMultiplicacion); // Imprime el resultado de la multiplicación
console.log(resultadoDivision); // Imprime el resultado de la división