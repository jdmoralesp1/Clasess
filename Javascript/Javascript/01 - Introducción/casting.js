/*Conversión de datos
a String, String(), toString
a Numeros, Number(), parseInt()
a Decimal, Number(), parseFloat()
*/

//De entero a String
let dato = 15;
console.log(typeof(dato));

//dato = String(dato); esta es otra forma
dato = dato.toString()
console.log(typeof(dato));

//De String a entero
//dato = Number(dato);
dato = parseInt(dato);
console.log(typeof(dato));