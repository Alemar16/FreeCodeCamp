const os = require('os');

//para ver el tipo de sistema operativo
console.log(os.type());

//para ver la ruta de la carpeta
console.log(os.homedir());

//para ver el nombre del sistema
console.log(os.hostname());

//para ver la version del sistema
console.log(os.release());

//para ver el directorio temporal
console.log(os.tmpdir());

//para ver el tiempo actual que tiene ejecutado el sistema
console.log(os.uptime());

//para ver la informacion del usuario
console.log(os.userInfo());

//todos estos metodos son de la libreria os y son utiles para obtener informacion sobre el sistema operativo en el cual se ejecuta la aplicacion y al momento de desarrollar servidores