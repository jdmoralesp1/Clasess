/*function sumar (a,b){
    return a+b;
}*/

const sumar = (a,b) => {
    return a+b;
}

const sumar2 = (a,b) => a + b;
//sumar y sumar2 son lo mismo, cuando es un return sencillo no necesito encerrar en llaves

const saludar = () => 'Hola mundo';

console.log(sumar(9,6));
console.log(sumar2(9,6));
console.log(saludar());