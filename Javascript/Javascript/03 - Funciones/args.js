let suma = 0;
function sumar(...args) {
    //console.log(args);
    for(let i = 0; i < args.length; i++){
        suma += args[i];
    }
    return suma;
}

const f = sumar(40,75,42,15,45);
console.log(f);