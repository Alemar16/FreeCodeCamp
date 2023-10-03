//console.log(process);

//ambiente de ejecucion (.env)
//console.log(process.env);


//como paras argumentos usando (process.argv) muestra un arreglo
//ejemplo: node app.js arg1, arg2
//           0     1     2   3
//console.log(process.argv[2]);
//console.log(process.argv[3]);

//de esta manera podemos obtener los argumentos usando el metodo process.argv y el nombre del argumento que queremos obtener
//console.log(process.argv[process.argv.length - 1]);

//tambien podemos ver el uso de la memoria con process.memoryUsage()
console.log(process.memoryUsage());