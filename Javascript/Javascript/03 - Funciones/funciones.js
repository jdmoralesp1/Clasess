function saludar(nombre){
    //console.log("Hola desde la función saludar");
   // console.log(`Hola ${nombre} desde la función saludar`);
   return `Hola ${nombre} desde la función saludar`

}

const s = saludar("Andres");
const r = saludar("Juan");

//console.log(s);
//console.log(r);



function sumar(a=null,b=null){
    if(a==null || b==null){
        console.log("Error debes colocar dos numeros en la función");
        return;
    }
    return a+b;
}

const c = sumar(4,9);
console.log(c);