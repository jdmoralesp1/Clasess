using System;

namespace ConversionTipoDatos
{
    internal class Program
    {
        static void Main(string[] args)
        {
            String Nombre;
            int Edad;
            bool Consulta;
            double Sueldo;

            Console.Write("Ingrese su nombre: ");
            Nombre = Console.ReadLine();

            Console.Write("Ingrese su edad: ");
            //Edad = int.Parse(Console.ReadLine());
            Edad = Convert.ToInt32(Console.ReadLine());

            Console.Write("¿Eres casado?: ");
            Consulta = bool.Parse(Console.ReadLine());

            Console.Write("Ingrese su sueldo: ");
            Sueldo = double.Parse(Console.ReadLine());

            Console.WriteLine("Sus datos son: \nNombre: " + Nombre + ", Edad: " + Edad + 
                ", Casado: " + Consulta + ", Sueldo: " + Sueldo);
            Console.ReadKey();
        }
    }
}
