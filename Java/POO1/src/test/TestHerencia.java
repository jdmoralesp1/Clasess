
package test;

import herencia.*;
import java.util.Date;

public class TestHerencia {
    public static void main(String[] args) {
                
        Empleado empleado1 = new Empleado(2500000, "Juan Morales");
        imprimir(empleado1);
        
        Empleado empleado2 = new Empleado(3000000, "David");
        imprimir(empleado2);
        
        Empleado empleado3 = new Empleado(5000000, "Johan");
        imprimir(empleado3);
        
        var fecha = new Date();
        Clientes cliente1 = new Clientes(fecha, true, "Carlos", 'M', 23, "San Alejo");
        imprimir(cliente1);
        
        determinarTipo(empleado1);
        
        //Conversion de Objetos
        
            //Downcasting = pasar de la clase padre a la clase hija
        Persona persona1 = new Empleado(30000, "Carlos");
        Empleado empleado4 = (Empleado) persona1;
        System.out.println(empleado4.obtenerDetalle());
        
            //Upcasting = pasar de la clase hija a la clase padre
        Persona persona2 = empleado4;
        System.out.println(persona2.obtenerDetalle());
        
        Persona p1 = new Persona("Juanito", 'M', 25, "Cusco");
        Persona p2 = new Persona("Juanito", 'M', 25, "Cusco");
        
        System.out.println(p1.equals(p2));
        
        System.out.println(p1.hashCode());
        System.out.println(p2.hashCode());
        
        if(p1.hashCode() == p2.hashCode()){
            System.out.println("Los objetos son iguales");
        }else{
            System.out.println("Los objetos no son iguales");
        }
    }
    
    public static void imprimir(Persona persona){
        System.out.println(persona.obtenerDetalle());
    }
    
    public static void determinarTipo(Object objeto){
        if(objeto instanceof Empleado){
            System.out.println("Es de tipo Empleado");
        }else if(objeto instanceof Clientes){
            System.out.println("Es de tipo Cliente");
        }else if(objeto instanceof Persona){
            System.out.println("Es de tipo Persona");
        }else if(objeto instanceof Object){
            System.out.println("Es de tipo Object");
        }
    }
}
