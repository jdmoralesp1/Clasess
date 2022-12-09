import clases.Calculadora;
import clases.Persona;
import clases.Rectangulos;

public class Main {
    //las constantes deben ir fuera del main
    final int a = 20;
    
    public static void main(String[] args) {
        Persona persona1 = new Persona();
        Persona persona2 = new Persona("Juan");
        Persona persona3 = new Persona();
        persona3.nombre = "Juan Morales";
        persona3.edad = 25;
        persona3.mostrarDatos();
        
        //Clase Calculadora
        
        Calculadora calcular = new Calculadora();
        System.out.println(calcular.resta(50, 30));
        System.out.println(calcular.resta(50.5, 30));
        
        
        Rectangulos r1 = new Rectangulos();
        System.out.println(r1.area(8, 4));
        Rectangulos r2 = new Rectangulos();
        System.out.println(r2);
    }
    
}
