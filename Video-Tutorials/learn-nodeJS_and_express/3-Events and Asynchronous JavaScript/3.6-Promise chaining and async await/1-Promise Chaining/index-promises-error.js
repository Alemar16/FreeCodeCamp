//Ejemplo de encadenamiento de varias promesas simulando error

function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando: ${producto} de FreeCodeCamp.`);
    setTimeout(() => {
      if (producto === "taza") {
        resolve("Ordenando una taza con el logo de FreeCodeCamp...");
      } else {
        reject("Este producto no esta disponible actualmente.");
      }
    }, 2000);
  });
}

function procesarPedido(respuesta) {
  return new Promise((resolve) => {
    console.log("Procesando respuesta...");
    console.log(`La respuesta fue: "${respuesta}"`);
    setTimeout(() => {
      resolve("Gracias por su compra. Disfruta tu producto de FreeCodeCamp.");
    }, 4000);
  });
}

ordenarProducto("lapiz")
  .then((respuesta) => {
    console.log("Respuesta recibida");
    console.log(respuesta);
    return procesarPedido(respuesta);
  })
  .then((respuestaProcesada) => {
    console.log(respuestaProcesada);
  })
  .catch((error) => {
    console.log(error);
  });
