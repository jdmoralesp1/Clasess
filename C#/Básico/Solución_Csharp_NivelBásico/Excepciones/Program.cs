using System;

namespace Excepciones
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int Edad;
            try
            {
                Console.Write("Ingrese edad: ");
                Edad = int.Parse(Console.ReadLine());
            }
            catch (Exception ex) { 
                Console.WriteLine("El error: " + ex.Message);
            }

            Console.ReadKey();
        }
    }
}
