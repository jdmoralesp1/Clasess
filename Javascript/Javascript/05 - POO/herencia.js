class Persona{
    constructor(nombre,edad){//Estas son las vars iniciales y las que recibo como parametro
        this.nombre = nombre;
        this.edad = edad;
    }

    detallePersona(){
        console.log(`Nombre: ${this.nombre} \nEdad: ${this.edad}`);
    }
}

class Empleado extends Persona {
    sueldo;
    constructor(nombre, edad, sueldo){
        super(nombre, edad); //se usa el super para heredar lo que ya esta hecho de la otra clase
        this.sueldo = sueldo;
    }
    detallePersona(){
        super.detallePersona()
        console.log(`Sueldo: ${this.sueldo}`);
    }
}

const empl1 = new Empleado("David", 23, 900000);
console.log(empl1);

empl1.detallePersona();
