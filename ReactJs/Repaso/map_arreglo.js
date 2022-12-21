// ej 1:
const numeros = [1, 2, 3, 4, 5];

const cuadrados = numeros.map((valor) => valor*valor);

// console.log(numeros)
// console.log(cuadrados);

// Ej 2:
const personas = [
    {id: 1, nombre: "Carlos", pais: "RD"},
    {id: 2, nombre: "Claudia", pais: "Mexico"},
    {id: 3, nombre: "Roberto", pais: "Colombia"},
];

const ids = personas.map(persona => persona.id);
const nombres = personas.map(persona => persona.nombre);

console.log('ids', ids);
console.log('nombres', nombres);

const nombresyPaises = personas.map(persona => {
    return {nombre: persona.nombre, pais: persona.pais}
});

console.log(nombresyPaises);

// ej 3:

const divs = personas.map(persona => `
    <div>
        <span>${persona.nombre}</span> (pais: ${persona.pais})
    </div>
`)

console.log(divs);
