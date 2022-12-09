
package bloque.codigo;

public class Persona {
    private final int idPersona;
    private static int contadorPersona;
    
    static {
        System.out.println("Ejecución bloque estatico");
        ++Persona.contadorPersona;
    }
    
    {
        System.out.println("Ejecución bloque no codigo");
        this.idPersona = Persona.contadorPersona++;
    }

    public Persona() {
        System.out.println("Ejecución del constructor");
    }

    public int getIdPersona() {
        return idPersona;
    }

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPersona + '}';
    }
    
    
}
