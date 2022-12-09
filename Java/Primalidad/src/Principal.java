
import java.util.Scanner;


public class Principal {
    public static void main(String[] args) {
        Scanner leer = new Scanner(System.in);
        System.out.print("Ingrese un numero: ");
        int numero = leer.nextInt();
        if(esPrimo(numero)){
            System.out.println("======================");
            System.out.println("Es número primo");
            System.out.println("======================");
        }else{
            System.out.println("======================");
            System.out.println("No es número primo");
            System.out.println("======================");
        }
    }
    
    /**
     * <h2>Función esPrimo</h2>
     * @param numero recibe un numero entero
     * @return retorna un valor booleano indicando si el numero recibido es primo o no
     */
    
    static boolean esPrimo(int numero){
        int count = 0;
        int[] numeros = new int[numero];
        for(int i=0;i<numeros.length;i++){
            numeros[i] = i+1;
        }
        
        for(int i : numeros){
            if(i==1 || i == numero){
                continue;
            }
            if(numero%i==0){
                count++;
            }
        }
        
        return count==0;
    }
}
