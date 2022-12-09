class Persona{
    #nombre
    #edad
    constructor(nombre,edad){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#metodoprivado();
    }

    set setNombre(nombre){
        this.#nombre = nombre;
    }

    get getNombre(){
        return this.#nombre;
    }

    set setEdad(edad){
        this.#edad = edad;
    }

    get getEdad(){
        return this.#edad;
    }

    #metodoprivado(){
        console.log("soy un metodo privado");
    }
}

const p1 = new Persona('Juan',23);
console.log(p1);
p1.setNombre = 'David';
console.log(p1);