//Ejemplo de Async Await en JavaScript 

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