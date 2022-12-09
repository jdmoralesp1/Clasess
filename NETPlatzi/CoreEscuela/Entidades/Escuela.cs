
using System;
using System.Collections.Generic;

namespace CoreEscuela.Entidades
{
    public class Escuela
    {
        public string UniqueId { get; private set; } = Guid.NewGuid().ToString();

        string nombre;

        public string Nombre
        {
            get { return nombre; }
            set { nombre = value.ToUpper(); }
        }

        public int AñoDeCreación { get; set; }

        public string Pais { get; set; }

        public string Ciudad { get; set; }

        public TipoEscuela TipoEscuela { get; set; }

        public List<Curso> Cursos { get; set; }



        public Escuela(string nombre, int año) => (Nombre, AñoDeCreación) = (nombre, año);

        public Escuela(string nombre, int año, TipoEscuela tipo, string pais="", string ciudad="") 
        {
            (Nombre, AñoDeCreación) = (nombre, año);
            this.Pais = pais;
            this.Ciudad = ciudad;
        }

        public override string ToString()
        {
            return $"Nombre: {Nombre} , Tipo: {TipoEscuela} \nPais: {Pais}, Ciudad: {Ciudad}";
        }
    }
}