import java.util.Scanner;

public class Sumar {
    public static void main(String[] args) {
        Scanner leer = new Scanner(System.in);
        System.out.println("Ingrese numero 1: ");
        var n1 = leer.nextInt();
        System.out.println("Ingrese numero 2: ");
        var n2 = leer.nextInt();
        var suma = n1+n2;
        System.out.printf("La suma de %d + %d = %d \n", n1, n2, suma);
    }
}
