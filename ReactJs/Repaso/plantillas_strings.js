// En ingles template strings

const apellido = 'Gavilan';
const pais = "RD";

const saludo = "Hola, " + apellido + ", ¿Como estas?";

const saludo2 = `Hola, ${apellido}, ¿Como estas?`; // Tildes (backticks)

console.log(saludo2);

let sumar = (a,b) => a+b;

const mensaje = `Hola, ${apellido},

Esta es una carta, desde ${pais}.

La suma de 2 y 3 es ${sumar(2,3)}

Att: Yo
`;

console.log(mensaje);