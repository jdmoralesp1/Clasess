
package test;

import encapsulamiento.*;

public class TestPersona {
    public static void main(String[] args) {
        Persona persona1 = new Persona("Juan", 23, false);
        System.out.println(persona1);
        System.out.println(persona1.getNombre());
        persona1.setNombre("David");
        persona1.setEdad(26);
        System.out.println(persona1.getNombre());
        System.out.println(persona1.getEdad());
        System.out.println(persona1);
    }
}
