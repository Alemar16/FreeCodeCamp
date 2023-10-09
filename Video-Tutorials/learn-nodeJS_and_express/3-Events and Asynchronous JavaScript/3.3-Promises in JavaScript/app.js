//como creamos una promesa
//un ejemplo de una promesa solo para practicar de modo didactico

const promesaCumplida = false;
const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promesaCumplida) {
      resolve('Promesa cumplida..!')
    } else {
      reject('Promesa rechazada')
    }
  }, 3000)
})

miPromesa.then((valor) => {
  console.log(valor)
  
})

miPromesa.catch((error) => {
  
})