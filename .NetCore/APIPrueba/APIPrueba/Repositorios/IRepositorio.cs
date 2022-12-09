using APIPrueba.Entidades;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace APIPrueba.Repositorios
{
    public interface IRepositorio
    {
        void CrearGenero(Genero genero);
        Guid ObtenerGUID();
        Task<Genero> ObtenerPorId(int Id);
        List<Genero> ObtenerTodosLosGeneros();
    }
}
