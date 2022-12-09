const esPrimo = (numero) =>{
    let cont = 0;

    let numeros = [];

    for (let i = 0; i < numero; i++) {
        numeros.push(i+1);
    }
    
    for (let n of numeros) {
        if(n==1 || n==numero){
            continue;
        }
        if(numero%n==0){
            cont++;
        }
    }

    return cont == 0;
}

let num =Number(prompt("Ingrese un numero"));

if(esPrimo(num)){
    document.write("Es primo")
}else{
    document.write("No es primo")
}