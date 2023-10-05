const EventEmitter = require("events");

const emisorProductos = new EventEmitter();

emisorProductos.on("compra", (total, nunProductos) => {
  console.log(`Se realizó una compra por:$${total}`);
  console.log(`Se compraron ${nunProductos} productos`);
});

emisorProductos.emit("compra", 500, 2);

//------EXPLICACIÓN--------------------
//Principio basico de los emisores

//linea 24 En esta línea, se crea una instancia de la clase EventEmitter y se asigna a la variable emisorProductos. EventEmitter es una clase que proporciona una funcionalidad para la emisión y escucha de eventos en Node.js.

//linea 26 Aquí se registra un listener para el evento 'compra' utilizando el método on() de la instancia emisorProductos. El listener es una función de flecha que recibe un parámetro llamado total y muestra un mensaje en la consola con el total de la compra.

//linea 28 En esta línea, se emite el evento 'compra' utilizando el método emit() de la instancia emisorProductos. Se pasa el valor 500 como argumento para el evento. Esto desencadena la ejecución del listener registrado para el evento 'compra', que en este caso mostrará un mensaje en la consola con el total de la compra.

//otras deficiciones de EventEmitter

//El objeto EventEmitter es un objeto que se utiliza para crear eventos.
//El objeto EventEmitter tiene dos metodos:
//addAbortListener() y once().
//addAbortListener() se utiliza para registrar un listener de abort.
//once() se utiliza para registrar un listener una vez.
//on() se utiliza para registrar un listener en cualquier momento.
//getEventListeners() se utiliza para obtener los listeners registrados.
//getMaxListeners() se utiliza para obtener el número maximo de listeners.
//setMaxListeners() se utiliza para establecer el número maximo de listeners.
//init() se utiliza para inicializar el objeto EventEmitter.
//listenerCount() se utiliza para obtener el número de listeners registrados.
//--------------------------------
