class Rectangulo {
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }

    area(){
        console.log(`El area del rectangulo es: ${this.alto * this.ancho}`);
    }

    perimetro(){
        console.log(`El perimetro del rectangulo es: ${(this.alto * 2) + (this.ancho * 2)}`);
    }
}

class Cuadrado extends Rectangulo{
    constructor(lado){
        super(lado, lado)
        this.lado = lado;
    }

    area(){
        console.log(`El area del cuadrado es: ${this.lado * this.lado}`);
    }

    // Al definirla como static no necesito crear un nuevo objeto de esta clase para poder llamarla, ver linea 50
    static miFuncionEstatica(){
        console.log('funcion estatica');
    }
}

const rectangulo1 = new Rectangulo(2,3);

rectangulo1.area();

const rectangulo2 = new Rectangulo(3,7);

rectangulo2.area();

const figura1 = new Cuadrado(6);
figura1.area = function(){
    console.log(`El area de la figura es ${this.lado}`);
}

figura1.area();

const cuadrado1=new Cuadrado(5);
cuadrado1.area();

Cuadrado.miFuncionEstatica();

