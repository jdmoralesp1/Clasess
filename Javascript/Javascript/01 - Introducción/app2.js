//variables
let valor, iva, total;

//Entrada de datos
n1 = Number(prompt("Ingrese valor del producto: "));

iva = n1*0.19;

total = n1+iva;

// Salida

/*document.write('Iva ' + iva +'<br>');
document.write('Total ',total);*/

document.write(`Iva es igual a ${iva} <br>
                Total es igual a ${total}`);

console.log(`\tIva es igual a ${iva}\n Total es igual a ${total}`);