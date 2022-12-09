//Esta es la forma antigua de crear clases
function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`${this.nombre} ${this.edad}`);
    }
}

const p1 = new Persona('Juan', '23'); //El new indica que estamos creando un objeto 
const p2 = new Persona('David', '27'); 


console.log(p1.nombre);
console.log(p2.nombre);

p1.imprimir();
p2.imprimir();