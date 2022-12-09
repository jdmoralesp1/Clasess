
const { crearArchivo } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs');

console.clear();


crearArchivo( argv.b, argv.l, argv.h )
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.rainbow))
    .catch(err => console.error(err));





//console.log(process.argv); //esto sirve para mostrar lo que envio, cuando ejecuto node app --base y se ve
/* 
'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\juan.morales1\\Documents\\Clases\\Node\\03-Bases-Node\\app.js',
  '--base=9'
*/
//segun lo anterior desestructuro eso y saco el tercer item y lo llamo arg3 , por eso dejo vacio en las primeras 2 comas
// y si nadie me envia argumento coloco por defecto el numero 5
//const [,,arg3 = 'base=5'] = process.argv;
//luego de eso hago un split y saco el segundo valor que me interesa que es el numero y lo guardo en una var
//llamada base
//const [, base = 5] = arg3.split('=');

//console.log(base);

//let base=5;


