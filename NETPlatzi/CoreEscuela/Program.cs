using System;
using System.Collections.Generic;
using System.Runtime.ConstrainedExecution;
using CoreEscuela.app;
using CoreEscuela.Entidades;
using CoreEscuela.Util;
using static System.Console;

namespace CoreEscuela
{
    class Program
    {
        static void Main(string[] args)
        {
            var engine = new EscuelaEngine();
            engine.Inicializar();
            Printer.WriteTitle("Bienvenidos a la Escuela");
            Printer.Beep(10000, cantidad:10);
            ImprimirCursosEscuela(engine.Escuela);
            
        }

        private static void ImprimirCursosEscuela(Escuela escuela)
        {
            Printer.WriteTitle("Cursos de la Escuela");
            // No me va a verificar Cursos salvo que escuela exista
            if (escuela?.Cursos != null) { 
                foreach (var curso in escuela.Cursos)
                {
                    WriteLine($"Nombre {curso.Nombre}, Id {curso.UniqueId}");
                }
            }
        }

    }
}
