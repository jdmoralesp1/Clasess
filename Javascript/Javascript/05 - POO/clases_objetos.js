
class Persona{
    otro; //Esta es otra variable que doy para un posterior uso
    constructor(nombre,edad){//Estas son las vars iniciales y las que recibo como parametro
        this.nombre = nombre;
        this.edad = edad;
    }

    imprimir(){
        console.log(this.nombre, this.edad);
    }
}

const p1 = new Persona('Juancho',26);
const p2 = new Persona('Juan',27);

console.log(p1);
p1.imprimir();
p2.imprimir();