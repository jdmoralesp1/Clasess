using System;
using System.Collections.Generic;
using System.Text;

namespace CoreEscuela.Entidades
{
    public  class Alumno
    {
        public List<Evaluaciones> Evaluaciones { get; private set; }
        public string UniqueId { get; private set; }
        public string Nombre { get; set; }

        

        public Alumno()
        {
            Evaluaciones = new List<Evaluaciones>();
            UniqueId = Guid.NewGuid().ToString();
        }
    }
}
