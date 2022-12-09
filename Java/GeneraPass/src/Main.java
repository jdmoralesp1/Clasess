
public class Main {
    public static void main(String[] args) {
        System.out.println("La contraseña generada es: ");
        System.out.println(generaPassw());
    }
    
    static String generaPassw(){
        char[] mayusculas = {'A','B','C','D','E','F','G'};
        char[] minusculas = {'a','b','c','d','e','f','g'};
        char[] numeros = {'1','2','3','4','5','6','7','8','9','0'};
        
        
        StringBuilder caracteres = new StringBuilder();
        caracteres.append(mayusculas);
        caracteres.append(minusculas);
        caracteres.append(numeros);
        
        StringBuilder contrasena = new StringBuilder();
        for(int i=0;i<=15;i++){
            int cantidad = caracteres.length();
            int numeroRandom = (int)(Math.random()*cantidad);
            contrasena.append((caracteres.toString()).charAt(numeroRandom));
        }
        return contrasena.toString();
    }
    
}
