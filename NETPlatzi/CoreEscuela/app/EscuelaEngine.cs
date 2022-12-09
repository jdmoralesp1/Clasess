﻿using CoreEscuela.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CoreEscuela.app
{
    public class EscuelaEngine
    {
        public Escuela Escuela { get; set; }

        public EscuelaEngine()
        {
            
        }

        public void Inicializar()
        {
            Escuela = new Escuela("Nueva Escuela", 2012, TipoEscuela.Secundaria, ciudad: "Bogota");

            CargarCursos();

            CargarAsignaturas();
            
            CargarEvaluaciones();

        }

        private void CargarAsignaturas()
        {
            foreach(var curso in Escuela.Cursos)
            {
                var listaAsignaturas = new List<Asignatura>() {
                    new Asignatura{Nombre="Matematicas"},
                    new Asignatura{Nombre = "Educación Fisica"},
                    new Asignatura{Nombre = "Castellano"},
                    new Asignatura{Nombre= "Ciencias Naturales"}
                };
                curso.Asignaturas = listaAsignaturas;
            }
        }


        private List<Alumno> GenerarAlumnosAlAzar(int cantidad)
        {
            string[] nombre1 = { "Alba", "Felipa", "Eusebio", "Farid", "Donald", "Alvaro", "Nicolás" };
            string[] apellido1 = { "Ruiz", "Sarmiento", "Uribe", "Maduro", "Trump", "Toledo", "Herrera" };
            string[] nombre2 = { "Freddy", "Anabel", "Rick", "Murty", "Silvana", "Diomedes", "Nicomedes", "Teodoro" };

            var listaAlumnos = from n1 in nombre1
                               from n2 in nombre2
                               from a1 in apellido1
                               select new Alumno { Nombre = $"{n1} {n2} {a1}" };
            return listaAlumnos.OrderBy( (al)=> al.UniqueId).Take(cantidad).ToList();
        }

        private void CargarEvaluaciones()
        {
            foreach (var curso in Escuela.Cursos)
            {
                foreach (var asignatura in curso.Asignaturas)
                {
                    foreach (var alumno in curso.Alumnos)
                    {
                        var rnd = new Random(System.Environment.TickCount);

                        for (int i = 0; i < 5; i++)
                        {
                            var ev = new Evaluaciones
                            {
                                Asignatura = asignatura,
                                Nombre = $"{asignatura.Nombre} Ev#{i + 1}",
                                Nota = (float)(5 * rnd.NextDouble()),
                                Alumno = alumno
                            };
                            alumno.Evaluaciones.Add(ev);
                        }
                    }
                }
            }
        }

        private void CargarCursos()
        {
            Escuela.Cursos = new List<Curso>() {
                new Curso(){Nombre="101", Jornada=TipoJornada.Mañana},
                new Curso(){Nombre="201", Jornada=TipoJornada.Mañana},
                new Curso(){Nombre="301", Jornada=TipoJornada.Mañana},
                new Curso(){Nombre="401", Jornada=TipoJornada.Tarde},
                new Curso(){Nombre="501", Jornada=TipoJornada.Tarde},
            };

            Random rnd = new Random();
            

            foreach (var c in Escuela.Cursos)
            {
                int cantRandom = rnd.Next(5, 20);
                c.Alumnos = GenerarAlumnosAlAzar(cantRandom);
            }
        }
    }
}
