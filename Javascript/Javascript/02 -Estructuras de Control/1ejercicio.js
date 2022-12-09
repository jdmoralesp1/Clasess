let valor = 155.5, descuento =0, iva=0, total=0;

if(valor<=100){
    descuento=valor*0.1;
}else{
    descuento=valor*0.2;
}

iva = valor*0.19;

total = valor-descuento+iva;

console.log(`El descuento es ${descuento}
\nEl iva es ${iva}
\nEl total es ${total}`);