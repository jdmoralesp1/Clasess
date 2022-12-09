public class ClaseString {
    public static void main(String[] args) {
        String nombre = "Juancho";
        System.out.println(nombre.charAt(6));
        System.out.println("Cantidad de caracteres: "+ nombre.length());
        
        for(int i=0; i<nombre.length();i++){
            System.out.println(nombre.charAt(i));
        }
        
        System.out.println(nombre.substring(0,4));
        System.out.println(nombre.toLowerCase());
        System.out.println(nombre.toUpperCase());
        nombre = "J u a n c h o ";
        System.out.println(nombre.replace(" ", ""));
        System.out.println("Hola".equals("Hola"));
        
        StringBuilder nuevo = new StringBuilder();
        nuevo.append("Hola ");
        nuevo.append("Mundo");
        
        System.out.println(nuevo);
        
        System.out.println(nuevo.toString());
    }
}
