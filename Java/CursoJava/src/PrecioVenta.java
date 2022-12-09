
import java.util.Scanner;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author juan.morales1
 */
public class PrecioVenta {
    public static void main(String[] args) {
        Scanner leer = new Scanner(System.in);
        System.out.println("Ingrese valor de venta: ");
        double vv = leer.nextDouble();
        double iva = vv*0.18;
        double pv = vv + iva;
        System.out.println("Valor de venta "+ vv);
        System.out.println("Iva: " + iva);
        System.out.println("Precio de venta final: "+ pv);
    }
}
