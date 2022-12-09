using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DatosPrimitivos
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int Edad = 23;
            string Nombre = "Juan";
            double Sueldo = 1000000 ;
            Sueldo = Sueldo + 100;

            dynamic Contenido; //Es la forma de declarar una variable que soporte cualquier tipo de dato
            Contenido = "Bienvenido a mi sistema";
            Console.WriteLine("Contenido: " + Contenido);
            Console.WriteLine("Nombre: "+Nombre+" Edad: "+Edad+" Sueldo + 100 = "+Sueldo);
            Contenido = 10;
            Console.WriteLine("Contenido: "+Contenido);


            Console.ReadKey();


            

            Console.ReadKey();//Pausa el cmd que se ejecuta para poder visualizar datos de consola

            
        }
    }
}
