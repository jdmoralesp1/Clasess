using System;

namespace OperadoresRelacionales
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int num1=10, num2=5;
            bool operaciones;

            operaciones = num1 < num2;

            Console.WriteLine("Num1 es menor que Num2? "+ operaciones);
            Console.ReadKey();
        }
    }
}
