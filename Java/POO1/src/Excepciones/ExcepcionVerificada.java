
package Excepciones;

import java.io.*;
import java.util.logging.Level;
import java.util.logging.Logger;

public class ExcepcionVerificada {
    public static void main(String[] args) throws FileNotFoundException {
        readFile1();
    }
    
    public static void readFile1()
        //Lanzar una Excepción en el método
        //throws FileNotFoundException
    {
            File file = new File("c://file.txt");
        try {
            FileReader fr = new FileReader(file);
        } catch (FileNotFoundException ex) {
            System.out.println("El archivo no se puede leer");
            ex.printStackTrace(System.out);
        }
    }
}
