using System;
using System.Collections.Generic;
using System.Text;

namespace CoreEscuela.Entidades
{
    public  class Asignatura
    {
        public string UniqueId { get; private set; }
        public string Nombre { get; set; }

        public double Evaluacion { get; set; }

        public Asignatura()
        {
            UniqueId = Guid.NewGuid().ToString();
        }
    }
}
