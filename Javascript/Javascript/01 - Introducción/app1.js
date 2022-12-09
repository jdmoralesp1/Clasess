//variables
let n1, n2, cociente, residuo;

//Entrada de datos
n1 = Number(prompt("Ingrese numero entero 1: "));
n2 = Number(prompt("Ingrese numero entero 2: "));

//Proceso
cociente = n1 / n2;
residuo = n1 % n2;

//Salida de datos

document.write('Cociente ' + cociente +'<br>');
document.write('Residuo ',residuo);
