let array = ['juan','david','morales',0,100];

array[0] = 'juancho';

array.push('Nuevo') // metodo para agregar un elemento al final del arreglo

array.unshift(25) // metodo para agregar un elemento al inicio del arreglo
console.log(array);

array.pop(); // metodo para eliminar el ultimo elemento
console.log(array);

array.shift() // metodo para eliminar el primer elemento
console.log(array);

console.log(array.length);

console.log(array.indexOf('david')); //me devuelve la posición del elemento