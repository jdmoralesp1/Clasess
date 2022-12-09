
package test;

import Interfaces.*;

public class TestInterface {
    public static void main(String[] args) {
        BaseDatos datos = new ImplementarMySQL();
        datos.insertar();
        datos.actualizar();
        datos.eliminar();
        datos.listar();
    }
    
}
