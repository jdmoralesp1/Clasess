package clases;

public class Persona {
    public String nombre;
    public int edad;
    
    //Asi se crea un constructor
    public Persona(){
        System.out.println("Construyendo el objeto");
    }
    
    //Sobrecarga de constructores
    public Persona(String nombre){
        System.out.println("Hola " + nombre + " desde el contructor");
    }
    
    //Este es un metodo y no una funcion porque pertenece a una clase
    public void mostrarDatos(){
        System.out.println("Nombre: "+ nombre);
        System.out.println("Edad: "+ edad);
    }
}
