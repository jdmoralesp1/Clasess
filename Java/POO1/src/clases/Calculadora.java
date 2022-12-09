
package clases;

public class Calculadora {
    //Uso el final para decir que es estatico
    public static final double PI = 3.141592;
    
    public static int sumar(int a, int b){    
        return a+b;
    }
    
    public static double sumar(double a, double b){    
        return a+b;
    }
    
    //Sobrecarga métodos
    public int resta(int a, int b){
        return a-b;
    }
    public double resta(double a, double b){
        return a-b;
    }
}
