
package herencia;

public class Empleado extends Persona {
    private int idEmpleado;
    private double sueldo;
    public static int contadorEmpleado;

    public Empleado(double sueldo, String nombre) {
        super(nombre);
        this.idEmpleado = ++Empleado.contadorEmpleado; //con esto autoincremento el id del empleado cada vez que se cree uno
        this.sueldo = sueldo;
    }

    public int getIdEmpleado() {
        return this.idEmpleado;
    }

    public double getSueldo() {
        return this.sueldo;
    }

    public void setSueldo(double sueldo) {
        this.sueldo = sueldo;
    }

    //Aca uso polimorfismo para sobreescribir un método que herede de la clase Persona
    @Override
    public String obtenerDetalle() {
        return super.obtenerDetalle() + "Sueldo: " + this.sueldo; // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/OverriddenMethodBody
    }
    
    

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Empleado{");
        sb.append("idEmpleado=").append(this.idEmpleado);
        sb.append(", sueldo=").append(this.sueldo);
        sb.append(", ").append(super.toString());
        sb.append('}');
        return sb.toString();
    }
    
    
    
}
