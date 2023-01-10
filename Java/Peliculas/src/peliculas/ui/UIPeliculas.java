package peliculas.ui;

import peliculas.modelo.*;
import javax.swing.JOptionPane;

public class UIPeliculas {
    public static void interfazUsuario(){
        ICatalogoPeliculas peliculas = new ImplementacionCatalogoPelicula();
        Pelicula pelicula;
        
        CERRAR:
        while (true) {            
            String opcion = JOptionPane.showInputDialog(
                    null,
                    "1 - Insertar pelicula\n"
                    + "2 - Listar pelicula\n"
                    + "3 - Buscar pelicula\n"
                    + "4 - Salir\n",
                    "Ingrese una opción",
                    3
            );
            
            int opcionInt = 0;
            try {
                opcionInt = Integer.parseInt(opcion);
            } catch (NumberFormatException e) {
                JOptionPane.showMessageDialog(null, 
                        "Las opciones tienen que ser numeros enteros\n" + e,
                        "Error",
                        JOptionPane.ERROR_MESSAGE
                );
            } catch (Exception e){
                JOptionPane.showMessageDialog(null, 
                        e,
                        "Error",
                        JOptionPane.ERROR_MESSAGE
                );
            }
            
            switch (opcionInt) {
                case 1:
                    String nombrePelicula = JOptionPane.showInputDialog(
                            null,
                            "Ingrese el Nombre de la pelicula",
                            "Entrada",
                            3
                    );
                    
                    pelicula = new Pelicula(nombrePelicula);
                    peliculas.insertarPelicula(pelicula);
                    break;
                
                case 2:
                    peliculas.listarPelicula();
                    break;
                    
                case 3:
                    nombrePelicula = JOptionPane.showInputDialog(
                            null,
                            "Ingrese el Nombre de la pelicula",
                            "Entrada",
                            3
                    );
                    peliculas.buscarPelicula(nombrePelicula);
                    break;
                    
                case 4:
                    break CERRAR;
                    
                default:
                    JOptionPane.showMessageDialog(
                        null,
                        "OPCION INCORRECTA\n"
                        + "VUELVA A INGRESAR UNA\n"
                        + "OPCIÓN VALIDA\n"
                        + "LAS OPCIONES SON DE 1 A 4",
                        "Error",
                        JOptionPane.ERROR_MESSAGE
                        );
            }
        }
    }
}
