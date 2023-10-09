//como creamos una promesa ?
//un ejemplo de una promesa solo para practicar de modo didactico

const estatusPedido = () => {
  return Math.random() > 0.8;
}

const miPedidoDePizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (estatusPedido()) {
      resolve("Excelente pedido de pizza en camino!");
    } else {
      reject("Ocurrio un error. Pizza rechazada");
    }
  }, 3000);
});

/* 
//LOGICA 0
const manejarPedido = (mensajeDeConfirmacion) => {
  console.log(mensajeDeConfirmacion);
};

const rechazarPedido = (mensajeDeError) => {
  console.log(mensajeDeError);
};

miPedidoDePizza.then(manejarPedido, rechazarPedido); 

*/

//otra forma de resumir la misma logica
//LOGICA 2
miPedidoDePizza
  .then((mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion)
  })
 .then(null, (mensajeDeError) => {
    console.log(mensajeDeError)
 })

 