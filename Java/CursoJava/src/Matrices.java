/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author juan.morales1
 */
public class Matrices {
    public static void main(String[] args) {
        /*int [][]x=new int[2][3];
        x[0][0] = 1;
        x[0][1] = 2;
        x[0][2] = 3;
        x[1][0] = 4;
        x[1][1] = 5;
        x[1][2] = 6;*/
        
        int [][]x ={
            {1,2,3},//filas
            {4,5,6},
            {7,8},
        };
        
        
        
        for(int[] matrizinterna:x){
            for(int dato: matrizinterna){
                System.out.println(dato);
            }
        }
    }
}
