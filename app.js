const {creararchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs');

console.clear();

//console.log(process.argv); para ver los argumentos que se envian dentro de la linea de comandos 
/* const [,,arg3 = 'base=5'] = process.argv;
const [,base = 5] =arg3.split('='); */
creararchivo(argv.b , argv.l , argv.h)
.then( nombrearchivo => console.log(nombrearchivo, 'creado'))
.catch( err => console.log(err));  