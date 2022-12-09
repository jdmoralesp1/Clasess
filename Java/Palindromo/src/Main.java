
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner leer = new Scanner(System.in);
        System.out.print("Ingrese una palabra: ");
        String mot = leer.nextLine();
        
        if(esPalindromo(mot)){
            System.out.println("======================");
            System.out.println(mot+" es palindromo");
            System.out.println("======================");
        }else{
            System.out.println("======================");
            System.out.println(mot+" no es palindromo");
            System.out.println("======================");
        }
    }
    
    static boolean esPalindromo(String cadena){
        cadena = cadena.replace(" ", "");
        cadena = cadena.toLowerCase();
        
        StringBuilder cadenaInvertida = new StringBuilder();
        
        for(int i= cadena.length()-1;i>=0;i--){
            cadenaInvertida.append(cadena.charAt(i));
        }
        
        return cadena.equals(cadenaInvertida.toString());
    }
    
}
