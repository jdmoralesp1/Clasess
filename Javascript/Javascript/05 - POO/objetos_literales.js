// Los objetos se crean con {}
const persona = {
    nombre: 'Juan',
    apellido: 'Morales',
    edad: 23,

    nombreCompleto(){
        return `${this.nombre} ${this.apellido}`; //el this es para indicarle que lo que busca no esta dentro de la función
    },

    trajes:['traje 01', 'traje 02', 'traje 03'],

    direccion: {
        codpostal : '110611',
        ciudad: 'Bogotá',
        pais: 'Colombia'
    }
}

console.log(persona.nombre);
console.log(persona.nombreCompleto());
console.log(persona.trajes);
console.log(persona.direccion.pais);