
public class VarArgs {
    public static void main(String[] args) {
        System.out.println(sumar("Juan Morales",4,8,6,9,7,1));
        System.out.println(sumar(6.3,8.9,10.2));
    }
    
    //Con esto recibo n numeros a sumar y la variable "numeros" se convierte en un array de los datos que yo le envie
    static int sumar(String nombre, int... numeros){
        System.out.println("la suma de: "+nombre);
        int suma =0;
        for(int num : numeros){
            suma += num;
        }
        return suma;        
    }
    
    static double sumar(double... numeros){
        double suma =0;
        for(double num : numeros){
            suma += num;
        }
        return suma;        
    }
}
