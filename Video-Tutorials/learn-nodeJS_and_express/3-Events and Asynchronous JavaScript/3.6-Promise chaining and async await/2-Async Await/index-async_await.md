# Explicación

### El uso de async/await simplifica el manejo de operaciones asincrónicas en JavaScript. Permite escribir código de manera más secuencial y fácil de leer, ya que se espera a que las promesas se resuelvan antes de continuar con la siguiente línea de código, en lugar de usar encadenamiento de promesas. Esto hace que el código sea más legible y mantenible, especialmente cuando se trata de lógica asincrónica compleja.

```JavaScript
//Ejemplo de encadenamiento de varias promesas

function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando: ${producto} de FreeCodeCamp.`);
    setTimeout(() => {
      if (producto === 'taza') {
        resolve('Ordenando una taza con el logo de FreeCodeCamp...');
      } else {
        reject('Este producto no esta disponible actualmente.');
      }
    }, 2000)
  })
}

function procesarPedido(respuesta) {
  return new Promise(resolve => {
    console.log('Procesando respuesta...');
    console.log(`La respuesta fue: "${respuesta}"`);
    setTimeout(() => {
      resolve('Gracias por su compra. Disfruta tu producto de FreeCodeCamp.');
    }, 4000)
  })
}

async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProducto(producto);
  console.log('Respuesta recibida');
  const respuestaProcesada = await procesarPedido(respuesta);
  console.log(respuestaProcesada);
  } catch (error) {
    console.log(error);
  }
}

realizarPedido("taza");
  ```
### Respuesta en terminal:
```terminal
Ordenando: taza de FreeCodeCamp.
Respuesta recibida
Ordenando una taza con el logo de FreeCodeCamp...
Procesando respuesta...
La respuesta fue: "Ordenando una taza con el logo de FreeCodeCamp..."
Gracias por su compra. Disfruta tu producto de FreeCodeCamp.
  ```

## Explicación del proceso:
1. Se definen dos funciones: ordenarProducto y procesarPedido, ambas devuelven promesas, al igual que en el ejemplo anterior.

2. Se declara una nueva función llamada realizarPedido con la palabra clave async. Esto indica que realizarPedido contendrá operaciones asincrónicas que serán manejadas de manera síncrona a través de await.

3. Dentro de realizarPedido, se utiliza un bloque try...catch para manejar errores. Esto permite capturar errores que puedan ocurrir en las operaciones asincrónicas y manejarlos en el bloque catch.

4. En el bloque try, se utiliza await para esperar la resolución de la promesa devuelta por ordenarProducto(producto). Esto significa que el código se detendrá hasta que la promesa se resuelva. Una vez que se resuelve, la respuesta se almacena en la variable respuesta.

5. Luego, se muestra "Respuesta recibida" en la consola y se utiliza await nuevamente para esperar la resolución de la promesa devuelta por procesarPedido(respuesta). Esto permite que la función se detenga mientras se procesa el pedido y se muestra la respuesta procesada en la consola.

6. Si en cualquier momento ocurre un error, como en el ejemplo anterior, se capturará en el bloque catch y se mostrará en la consola.