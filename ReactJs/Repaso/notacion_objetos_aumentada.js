let apellido = 'Gavilan';
let edad = 999;
let fecha = new Date();

const paisProp = 'pais';
const paisValor = 'RD';

let persona = {
    nombre: 'Felipe',
    apellido, // Es lo mismo que decir apellido:apellido
    edad,
    fechaActual: new Date(),
    funcionNormal(){
        // ...
    },
    funcionFlecha: () => {},
    [paisProp]: paisValor
};

const retornarValorespersona = (prop) => persona[prop];

// console.log(persona);

console.log(retornarValorespersona('apellido'));
console.log(persona['pais']);

