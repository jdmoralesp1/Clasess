using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace SistemaInventario.AccesoDatos.Repositorio.IRepositorio
{
    //Se le envian clases para poder manejar objetos
    public interface IRepositorio<T> where T : class
    {
        //Traera una bodega por medio del id
        T Obtener(int id);

        IEnumerable<T> ObtenerTodos(
            Expression<Func<T, bool>> filter = null,
            Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null,
            string incluirPropiedades = null
            );

        T ObtenerPrimero(
            Expression<Func<T, bool>> filter = null,
            string incluirPropiedades = null
            );

        void Agregar(T entidad);

        void Remover(int id);

        void Remover(T entidad);

        void RemoverRango(IEnumerable<T> entidad);
    }
}
