//¿como creamos una promesa?
//un ejemplo de una promesa solo para practicar de modo didactico

const promesaCumplida = true;
const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promesaCumplida) {
      resolve("Promesa cumplida..!");
    } else {
      reject("Promesa rechazada");
    }
  }, 3000);
});

const manejarPromesaCumplida = (valor) => {
  console.log(valor);
};
const manejarPromesaRechazada = (razonRechazo) => {
  console.log(razonRechazo);
};
miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);



//=====================================================

//Explicacion de la promesa


/* const promesaCumplida = true; */
//Esta línea declara una constante llamada `promesaCumplida` y le asigna el valor `true`. Esto significa que la promesa se cumplirá.

/* const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promesaCumplida) {
      resolve("Promesa cumplida..!");
    } else {
      reject("Promesa rechazada");
    }
  }, 3000);
}); */
//Esta línea crea una nueva promesa llamada `miPromesa`. La promesa toma dos funciones como argumentos: `resolve` y `reject`. La función `resolve` se llama cuando la promesa se cumple, y la función `reject` se llama cuando la promesa se rechaza.
//El cuerpo de la promesa es una función que se ejecuta asíncronamente. La función utiliza la función `setTimeout` para retrasar la ejecución de la promesa durante 3 segundos. Después de 3 segundos, la función comprueba el valor de la constante `promesaCumplida`. Si la constante es `true`, la función llama a la función `resolve` y le pasa el valor `'Promesa cumplida..!`. Si la constante es `false`, la función llama a la función `reject` y le pasa el valor `'Promesa rechazada'`.

/* const manejarPromesaCumplida = (valor) => {
  console.log(valor);
}; */
//Esta línea declara una función llamada `manejarPromesaCumplida`. La función toma un argumento llamado `valor`. El cuerpo de la función simplemente registra el valor en la consola.

/* const manejarPromesaRechazada = (razonRechazo) => {
  console.log(razonRechazo);
}; */
//Esta línea declara una función llamada `manejarPromesaRechazada`. La función toma un argumento llamado `razonRechazo`. El cuerpo de la función simplemente registra la razón del rechazo en la consola.

/* miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada); */
//Esta línea llama al método `then` de la promesa `miPromesa`. El método `then` toma dos funciones como argumentos: la primera función se llama cuando la promesa se cumple, y la segunda función se llama cuando la promesa se rechaza.

//En este caso, la primera función es la función `manejarPromesaCumplida` y la segunda función es la función `manejarPromesaRechazada`. Esto significa que cuando la promesa `miPromesa` se cumpla, se llamará a la función `manejarPromesaCumplida` y se le pasará el valor `'Promesa cumplida..!`. Si la promesa `miPromesa` se rechaza, se llamará a la función `manejarPromesaRechazada` y se le pasará el valor `'Promesa rechazada'`.