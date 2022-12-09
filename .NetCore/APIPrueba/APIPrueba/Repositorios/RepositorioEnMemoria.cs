using APIPrueba.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIPrueba.Repositorios
{
    public class RepositorioEnMemoria: IRepositorio
    {
        private List<Genero> _generos;
        public RepositorioEnMemoria()
        {
            _generos = new List<Genero>() {
                new Genero(){Id=1, Nombre="Comedia"},
                new Genero(){Id=2, Nombre="Acción"}
            };

            _guid = Guid.NewGuid();
        }

        public Guid _guid;

        public List<Genero> ObtenerTodosLosGeneros()
        {
            return _generos;
        }

        // Se puede usar async y await y el Task en donde se encierra el tipo de la función
        // es para poder darle un delay de cuanto esperar
        public async Task<Genero> ObtenerPorId(int Id)
        {

            await Task.Delay(1);//1 milisegundo
            // el FirstOrDefault o va a obtener genero o va a obtener nulo
            return _generos.FirstOrDefault(x => x.Id == Id);
        }

        public Guid ObtenerGUID() 
        {
            return _guid;
        }

        public void CrearGenero(Genero genero)
        {
            genero.Id = _generos.Count() + 1;
            _generos.Add(genero);
        }
    }
}
