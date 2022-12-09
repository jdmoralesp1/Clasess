
public class Funciones {
    public static void main(String[] args) {
        var suma = sumar(5, 6);
        System.out.println("La suma es: "+suma);
        
        var nombre = "Juan";
        var edad = 25;
        saludar(nombre, edad);
        //saludar("Juan",23); otra forma
        
    }
    
    static int sumar(int a, int b){
        return a+b;
    }
    
    static void saludar(String nombre, int edad){
        System.out.printf("Hola %s tu edad es %d\n",nombre, edad);
    }
}
