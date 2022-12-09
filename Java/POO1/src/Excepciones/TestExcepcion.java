package Excepciones;

import java.util.*;

public class TestExcepcion {

    public static void main(String[] args) {
        Scanner leer = new Scanner(System.in);

        try {
            System.out.println("Ingrese N1: ");
            int n1 = leer.nextInt();
            System.out.println("Ingrese N2: ");
            int n2 = leer.nextInt();

            int result = n1 / n2;

            System.out.println(result);
        } catch (InputMismatchException e) {
            System.err.println("Ocurrio un error: Ingrese solo numeros enteros");
            e.printStackTrace(System.out);
            System.out.println(e);
        }
    }

}
