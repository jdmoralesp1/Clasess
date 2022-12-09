let pares = [];
let impares = [];
let numero = [1,2,3,4,5,6,7,8,9];
let numrandom=0;

for(let n of numero){
    numrandom = parseInt(Math.random()*100);
    let r = n*numrandom;
    if(r%2==0){
        console.log(`${n} x ${numrandom} = ${r}`);
        pares.push(r);
    }else{
        console.log(`${n} x ${numrandom} = ${r}`);
        impares.push(r);
    }
}

console.log(`Array de pares ${pares}`);
console.log(`Array de pares ${impares}`);