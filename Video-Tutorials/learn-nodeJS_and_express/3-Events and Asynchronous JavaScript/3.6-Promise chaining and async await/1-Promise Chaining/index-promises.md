# Explicacion

### Este código muestra cómo manejar procesos asincrónicos en JavaScript usando promesas y cómo encadenar estas operaciones de manera ordenada.

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

ordenarProducto('taza')
  .then(respuesta => {
    console.log('Respuesta recibida');
    console.log(respuesta);
    return procesarPedido(respuesta);
  })
  .then(respuestaProcesada => {
    console.log(respuestaProcesada);
  })
  .catch(error => {
    console.log(error);
  })
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

## En este ejemplo, se simula el proceso de ordenar un producto (una taza) y procesar el pedido utilizando promesas. Aquí tienes una explicación paso a paso:

1. Se definen dos funciones: ordenarProducto y procesarPedido, ambas devuelven promesas.

2. La función ordenarProducto simula el proceso de ordenar un producto. Toma un argumento producto, muestra un mensaje en la consola y luego usa setTimeout para simular una operación asincrónica que demora 2 segundos. Si el producto es una 'taza', la promesa se resuelve con un mensaje de éxito; de lo contrario, se rechaza con un mensaje de error.

3. La función procesarPedido simula el procesamiento del pedido. Toma un argumento respuesta, muestra un mensaje en la consola y luego usa setTimeout para simular otra operación asincrónica que demora 4 segundos. Luego, resuelve la promesa con un mensaje de agradecimiento por la compra.

4. Luego, se llama a ordenarProducto('taza'), lo que inicia el proceso de ordenar una taza. Se encadena un then para procesar la respuesta, que es la promesa resuelta por ordenarProducto. Aquí, se muestra la respuesta en la consola y se llama a procesarPedido(respuesta) para continuar con el procesamiento.

5. Finalmente, otro then encadena el procesamiento del pedido y muestra la respuesta procesada en la consola. Si hay algún error en el proceso, se captura utilizando catch y se muestra en la consola.

***
### En términos de síncrono y asíncrono:
- Los procesos síncronos en JavaScript son aquellos en los que las operaciones se ejecutan secuencialmente, una detrás de la otra, sin interrupciones. En este ejemplo, las funciones console.log y las resoluciones de promesas son ejemplos de operaciones síncronas.

- Los procesos asíncronos en JavaScript, como el uso de setTimeout, permiten que las operaciones se ejecuten en segundo plano sin bloquear la ejecución del programa principal. Esto permite que otras tareas se realicen mientras se espera una respuesta asincrónica. En este ejemplo, las demoras simuladas con setTimeout son operaciones asincrónicas.