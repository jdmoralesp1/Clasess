const persona = {
    nombre: 'Felipe',
    apellido: 'Gavilan',
    edad: 999,
    fechanac: new Date()
};

// const {nombre, apellido, edad} = persona;

// console.log(nombre);
// console.log(apellido);
// console.log(edad);

obtenerDireccion = () => {
    return{
        calle: 'Mi calle',
        pais: 'Mi pais',
        provincia: 'Mi provincia'
    };
}

const {pais, provincia} = obtenerDireccion();

// console.log(pais);
// console.log(provincia);

imprimirNombre = (persona) => {
    console.log(persona.nombre);
}

//Aca destructuro cualquier cosa que llegue desde que contenga un nombre
imprimirNombre2 = ({nombre}) => {
    console.log(nombre);
}

// imprimirNombre(persona);
// imprimirNombre2(persona);

const arreglo = [1,2,3,4];

const [primero, segundo,,cuarto] = arreglo;

// console.log(primero);
// console.log(segundo);
// console.log(cuarto);

const retornaArreglo = () => {
    return ['Felipe', 'Gavilan']
}

const [nombre, apellido] = retornaArreglo();

console.log(nombre);
console.log(apellido);