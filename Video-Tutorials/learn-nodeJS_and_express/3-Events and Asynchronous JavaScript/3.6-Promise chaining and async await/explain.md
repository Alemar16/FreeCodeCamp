# El encadenamiento de promesas
El encadenamiento de promesas es una técnica en JavaScript que permite ejecutar varias operaciones asincrónicas en secuencia, una después de la otra, de una manera más legible y estructurada. Esto se logra utilizando el método .then() de las promesas para encadenar acciones una tras otra.

### Un ejemplo sencillo de encadenamiento de promesas:

``` JavaScript
// Promesa 1: Simula una operación asincrónica
const promesa1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Primera operación completada");
  }, 1000);
});

// Promesa 2: Simula otra operación asincrónica que depende de la primera
const promesa2 = promesa1.then((resultado) => {
  console.log(resultado); // Muestra "Primera operación completada"
  return "Segunda operación completada";
});

// Promesa 3: Otra operación asincrónica que depende de la segunda
const promesa3 = promesa2.then((resultado) => {
  console.log(resultado); // Muestra "Segunda operación completada"
  return "Tercera operación completada";
});

// Manejo de errores
promesa3
  .then((resultado) => {
    console.log(resultado); // Muestra "Tercera operación completada"
  })
  .catch((error) => {
    console.error(error);
  });

```
En este ejemplo, las promesas se encadenan utilizando .then(), lo que permite que cada una espere a que la anterior se complete antes de ejecutarse. Esto facilita la gestión de operaciones asincrónicas en un orden específico. Además, se incluye un manejo de errores con .catch() para gestionar cualquier error que pueda ocurrir en el proceso.

### Cuando se ejecuta en la terminal, verías la siguiente salida:

```terminal
Primera operación completada
Segunda operación completada
Tercera operación completada
```

La explicacion:

  - La primera promesa (promesa1) se resuelve después de 1 segundo y muestra "Primera operación completada" en la consola.
- La segunda promesa (promesa2) se ejecuta después de que la primera se resuelve y muestra "Segunda operación completada".
- La tercera promesa (promesa3) se ejecuta después de que la segunda se resuelve y muestra "Tercera operación completada".

El encadenamiento de promesas permite ejecutar operaciones asincrónicas en secuencia, garantizando que cada paso espere a que el anterior se complete antes de continuar. Esto facilita la gestión de flujos de trabajo asincrónicos de manera más legible y ordenada.
***

  ```JavaScript
  async function miFuncionAsync() {
  // Código asincrónico aquí
}
  ```
# Async Await

El uso de async/await en JavaScript es una forma de simplificar y gestionar de manera más efectiva el código asíncrono basado en promesas.

### Explicación de cómo funciona y se utiliza:

  1. Definir una función async: Para comenzar, debes declarar una función como async. Esto indica que la función contendrá operaciones asincrónicas y que se puede utilizar await dentro de ella.
```JavaScript
  async function miFuncionAsync() {
  // Código asincrónico aquí
}
  ```

  2. Utilizar await: Dentro de una función async, puedes usar la palabra clave await antes de una promesa. Esto pausará la ejecución de la función hasta que la promesa se resuelva o se rechace.
```JavaScript
async function miFuncionAsync() {
  const resultado = await algunaPromesa();
  // Continuar con el código después de que la promesa se resuelva
}
  ```

  3. Manejo de errores: Puedes manejar errores usando bloques try...catch. Si la promesa se rechaza, el control pasará al bloque catch para gestionar el error.
```JavaScript
async function miFuncionAsync() {
  try {
    const resultado = await algunaPromesa();
    // Continuar con el código después de que la promesa se resuelva
  } catch (error) {
    // Manejar el error
  }
}
  ```
  
#### async/await hace que el código asincrónico sea más legible y se asemeje a la programación síncrona, lo que facilita su comprensión y mantenimiento. Es especialmente útil cuando trabajas con múltiples promesas y deseas que las operaciones se realicen en un orden específico.

# Demostracíon del primer ejemplo aplicando Async-Await

  Este código utiliza async/await para simplificar la estructura del encadenamiento de promesas y hacerlo más claro de entender.

```JavaScript
// Promesa 1: Simula una operación asincrónica
const promesa1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Primera operación completada");
  }, 1000);
});

// Función asincrónica que contiene el encadenamiento
const ejecutarOperaciones = async () => {
  try {
    const resultadoPromesa1 = await promesa1;
    console.log(resultadoPromesa1); // Muestra "Primera operación completada"

    const resultadoPromesa2 = "Segunda operación completada";
    console.log(resultadoPromesa2); // Muestra "Segunda operación completada"

    const resultadoPromesa3 = "Tercera operación completada";
    console.log(resultadoPromesa3); // Muestra "Tercera operación completada"
  } catch (error) {
    console.error(error); // Manejo de errores
  }
};

// Llamada a la función asincrónica
ejecutarOperaciones();
  ```
Resultado en la terminal:
```terminal
Primera operación completada
Segunda operación completada
Tercera operación completada
```

### Explicación:

- Se define una función asincrónica ejecutarOperaciones que contiene el encadenamiento de promesas.

- Dentro de esta función, usamos await para esperar a que promesa1 se resuelva y obtener su resultado.

- Luego, mostramos cada resultado en la consola.

- Se utiliza un bloque try...catch para manejar errores en caso de que alguna de las promesas falle.

- Finalmente, llamamos a la función ejecutarOperaciones para iniciar el proceso.

