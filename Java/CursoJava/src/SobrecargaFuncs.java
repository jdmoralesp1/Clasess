
public class SobrecargaFuncs {
    public static void main(String[] args) {
        System.out.println(sumar(45, 50));
        System.out.println(sumar(4.5, 4.5));
    }
    
    static int sumar(int a, int b){
        return a+b;
    }
    
    static double sumar(double a, double b){
        return a+b;
    }
    
    //Se crean funciones con el mismo nombre pero con distinto tipo de dato
}

