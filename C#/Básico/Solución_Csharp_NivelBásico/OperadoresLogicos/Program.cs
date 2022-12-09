using System;

namespace OperadoresLogicos
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int a=10, b=20;
            bool resultado;

            resultado = !(a < b);

            Console.WriteLine(resultado);

        }
    }
}
