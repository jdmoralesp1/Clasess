/*
El patron modular tiene la siguiente sintaxis
(()=>{

})();*/

const myModule = (()=>{
    'use strict'
    // Area y perimetro de un cuadrado
    const valueResult = document.getElementById('result');

    const   btnPerimSquare = document.querySelector('#btnPerimSquare'),
            btnAreaSquare = document.querySelector('#btnAreaSquare'),
            btnPerimTriangulo = document.querySelector('#btnPerimTriangulo'),
            btnAreaTriangulo = document.querySelector('#btnAreaTriangulo'),
            btnDiamCircle = document.querySelector('#btnDiamCircle'),
            btnPerimCircle = document.querySelector('#btnPerimCircle'),
            btnAreaCircle = document.querySelector('#btnAreaCircle');

    const perimSquare = (side) => side*4;
    const areaSquare = (side) => side*side;

    btnPerimSquare.addEventListener('click',()=>{
        let inputSide = document.getElementById('inputSide');
        let value = Number(inputSide.value);
        const result = `El perimetro de cuadrado es: ${perimSquare(value)} cm`;
        valueResult.innerText = result;
    });

    btnAreaSquare.addEventListener('click',()=>{
        let inputSide = document.getElementById('inputSide');
        let value = Number(inputSide.value);
        const result = `El cuadrado de cuadrado es: ${areaSquare(value)} cm^2`;
        valueResult.innerText = result;
    });


    //Area y perimetro del triangulo

    const perimTriangulo = (side1,side2,side3) => side1+side2+side3;
    const areaTriangulo = (base,altura) => (base*altura)/2;

    btnPerimTriangulo.addEventListener('click',()=>{
        let inputSide1 = document.getElementById('1side');
        let inputSide2 = document.getElementById('2side');
        let inputSide3 = document.getElementById('3side');
        let value1 = Number(inputSide1.value);
        let value2 = Number(inputSide2.value);
        let value3 = Number(inputSide3.value);
        const result = `El perimetro del triangulo es: ${perimTriangulo(value1,value2,value3)} cm`;
        valueResult.innerText = result;
    });

    btnAreaTriangulo.addEventListener('click',()=>{
        let inputSide1 = document.getElementById('base');
        let inputSide2 = document.getElementById('altura');
        let value1 = Number(inputSide1.value);
        let value2 = Number(inputSide2.value);
        const result = `El area del triangulo es: ${areaTriangulo(value1,value2)} cm^2`;
        valueResult.innerText = result;
    });

    // Area y perimetro del circulo
    const pi = Math.PI;

    const diamCircle = (radio) => radio*2;
    const areaCircle = (radio) => (radio**2)*pi;
    const perimCircle = (radio) => pi*(radio*radio);

    btnDiamCircle.addEventListener('click',()=>{
        let inputSide = document.getElementById('radio');
        let value = Number(inputSide.value);
        const result = `El diametro del circulo es: ${diamCircle(value)} cm`;
        valueResult.innerText = result;
    });

    btnAreaCircle.addEventListener('click',()=>{
        let inputSide = document.getElementById('radio');
        let value = Number(inputSide.value);
        const result = `El Area del circulo es: ${areaCircle(value)} cm^2`;
        valueResult.innerText = result;
    });

    btnPerimCircle.addEventListener('click',()=>{
        let inputSide = document.getElementById('radio');
        let value = Number(inputSide.value);
        const result = `El perimetro del circulo es: ${perimCircle(value)} cm`;
        valueResult.innerText = result;
    });

    
})();