
import java.util.Scanner;


public class Main {

    public static void main(String[] args) {
        int opcion;
        do{
            System.out.println("    JUEGO ADIVINA EL NUMERO \n");
            System.out.println("1. Nivel fácil\n" + "2. Nivel intermedio\n"+ "3. Nivel Dificil\n"+ "4. Salir");
            Scanner leer = new Scanner(System.in);
            System.out.print("Ingrese una opción: ");
            opcion = leer.nextInt();
            
            switch (opcion) {
                case 1:
                    jugar(10);
                    break;
                case 2:
                    jugar(7);
                    break;
                case 3:
                    jugar(5);
                    break;
                case 4:
                    System.out.println("Cerrando Programa!!");
                    break;
                default:
                    System.out.println("Ingrese una opcion valida");
                    break;
            }   
        }while(opcion != 4);
        
        
    }
    
    static void jugar(int vidas){
        int numeroRandom = (int)(Math.random()*101);
        int numeroElegido = -1;
        
        Scanner leer = new Scanner(System.in);
        
        while(numeroElegido != numeroRandom){
            System.out.print("Ingrese un numero entre 1 y 100: ");
            numeroElegido = leer.nextInt();
            
            if(numeroRandom<numeroElegido){
                System.out.println("El número es más pequeño");
                vidas--;
            }else if(numeroRandom>numeroElegido){
                System.out.println("El número es más grande");
                vidas--;
            }
            
            if(vidas==0){
                System.out.println("-------------------------");
                System.out.println("|       GAME OVER       |");
                System.out.println("-------------------------");
                break;
            }
            System.out.println("-------------------------");
            System.out.println("| Te quedan "+vidas+" vidas |");
            System.out.println("-------------------------");
        }
        
        if(numeroElegido == numeroRandom){
            System.out.println("-------------------------");
            System.out.println("| Felicidades GANASTE!! |");
            System.out.println("-------------------------");
        }
    }
    
}
