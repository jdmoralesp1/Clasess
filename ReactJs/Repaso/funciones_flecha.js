let miFuncion = function duplicar(valor){
    return valor * 2;
}

let duplicar = (valor) => {
    return valor*2;
}

let duplicar2 = valor => valor * 2; 

let sumar = (num1, num2) => num1+num2;

let imprimirAlgo =() => console.log('Algo');

let funcionCompleja = () => {

}



const obj = {
    funcionNormal: function(){
        console.log('Funcion normal', this);
    },
    funcionFlecha: () => {
        console.log('Funcion flecha', this);
    }
}

console.log('this del ambiente');
obj.funcionNormal();
obj.funcionFlecha();