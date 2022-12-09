const DeadPool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}

//console.log(DeadPool.getNombre());



const { nombre, apellido, poder, edad=0 } = DeadPool;
//De esta forma guardo en variavles los valores de la función DeadPool

//console.log(nombre, apellido, poder, edad);

function imprimeHeroe( { nombre, apellido, poder, edad=0 } ){
    nombre = 'Juan';
    console.log(nombre, apellido, poder, edad);
}

//imprimeHeroe(DeadPool);

const heroes = ['Deadpool' ,'Superman' , 'Batman'] ;
// const h1 = heroes [ 0 ] ;
// const h2 = heroes [ 1 ] ;
// const h3 = heroes [ 2 ] ;
const [ , , h3 ] = heroes ;
console.log ( h3 ) ;