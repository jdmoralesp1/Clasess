using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace webapi.Models;

public class Categoria
{
    //[Key]
    public Guid CategoriaId {get; set;}

    //[Required]
    //[MaxLength(150)]
    public string Nombre {get; set;}

    public string Descripcion {get; set;}

    public int Peso { get; set; }

    //Le colocamos el JsonIgnore para que al hacer una consulta de una Tarea y anidarle la categoria no entre a buscar las
    //tareas que tiene asociada
    [JsonIgnore]
    public virtual ICollection<Tarea> Tareas {get; set;}

}