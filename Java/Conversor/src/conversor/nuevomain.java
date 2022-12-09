/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package conversor;

import java.util.Scanner;

public class nuevomain {
    public static void main(String[] args) {
        char opcion;
        do{
            System.out.println("CONVERSOR DE MONEDAS");
            System.out.println("1. Soles Peruanos a dolares\n"
                              +"2. Pesos Mexicanos a dolares\n"
                              +"3. Pesos Colombianos a dolares\n"
                              +"4. Salir\n"
            );
            
            System.out.println("Ingrese una opción");
            Scanner leer = new Scanner(System.in);
            opcion = leer.next().charAt(0);
            
            switch(opcion){
                case '1':
                    convertir(3.97, "Soles Peruanos");
                    break;
                case '2':
                    convertir(20.06, "Pesos Mexicanos");
                    break;
                case '3':
                    convertir(4607, "Pesos Colombianos");
                    break;
                case '4':
                    System.out.println("Cerrando programa");
                    break;
                default:
                    System.out.println("OPCIÓN INCORRECTA");
                    break;
                
            }
        }while(opcion != '4');
    }
    
    static void convertir(double valorDolar, String pais ){
        Scanner leer = new Scanner(System.in);
        System.out.println("Ingrese el monto en moneda "+pais+": ");
        double cantidadMoneda = leer.nextDouble();
        
        double dolares = cantidadMoneda / valorDolar;
        
        dolares = (double) Math.round(dolares*100d)/100;
        
        System.out.println("-------------------------------------");
        System.out.println("|   Tienes $" + dolares+" Dolares   |");
        System.out.println("-------------------------------------");
    }
}
