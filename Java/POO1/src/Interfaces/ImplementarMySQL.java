
package Interfaces;

// para implementar una clase tipo Interface no usamos el "extends" si no el "implements"

public class ImplementarMySQL implements BaseDatos{

    @Override
    public void insertar() {
        System.out.println("Se inserto un dato");
    }

    @Override
    public void listar() {
        System.out.println("Se listaron los datos");
    }

    @Override
    public void actualizar() {
        System.out.println("Se actualizo un dato");
    }

    @Override
    public void eliminar() {
        System.out.println("Se elimino un dato");
    }
    
}
