
public class Arrays {
    public static void main(String[] args) {
        String nombres [];
        
        nombres = new String[3];
        
        nombres[0] = "Juan";
        nombres[1] = "David";
        nombres[2] = "Morales";
        
        System.out.println("El dato es: "  + nombres[2]);
        
        nombres[2] = "Laura";
        
        System.out.println("El dato es: "  + nombres[2]);
        
        System.out.println(nombres.length);
        
        int[] array1={1,2,3,4,5};
        
        System.out.println(array1[0]);
        array1[0]=100;
        System.out.println(array1[0]);
        System.out.println(array1.length);
        
        
        int[] array2 = new int[5];
        
        String[] nombres2 = {"Alex", "Roel", "Juan", "Maria" ,"Pedro"};
        
        for(String dato : nombres2){// este es el foreach
            System.out.println(dato);
        }
    }
}
