using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Models;

//[Table("Task")]
public class Tarea
{
    //[Key]
    public Guid TareaId {get; set;}

    //[ForeignKey("CategoriaId")]
    public Guid CategoriaId {get; set;}

    //[Required]
    //[MaxLength(200)]
    public string Titulo {get; set;}

    public string Descripcion {get; set;}

    public Prioridad PrioridadTarea{get;set;}

    public DateTime FechaCreacion {get;set;}

    //que sea de tipo virtual quiere decir que va a traerme lo de la clase Categoria
    public virtual Categoria Categoria {get; set;}

    public string Resumen { get; set; }
}

public enum Prioridad
{
    Baja,
    Media,
    Alta
}