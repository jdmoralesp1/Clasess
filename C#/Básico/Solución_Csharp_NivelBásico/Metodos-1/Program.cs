using System;

namespace Metodos_1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            IngresoDatos();
            Sumar(5);
            Multiplicar(7);
            Console.ReadKey();
        }

        //mi primer método
        static void IngresoDatos()
        {
            string Nombre;
            Console.Write("Ingrese nombre: ");
            Nombre = Console.ReadLine();
            Console.WriteLine("Tu nombre es: "+Nombre);
        }

        //metodo con parametros
        static void Sumar(int Numero)
        {
            for(int i = 0; i <= 10; i++)
            {
                Console.WriteLine(Numero + " + " + i + " = " + (Numero + i));
            }
        }

        static void Multiplicar(int Numero)
        {
            for (int i = 0; i <= 10; i++)
            {
                Console.WriteLine(Numero + " x " + i + " = " + (Numero * i));
            }
        }
    }
}
