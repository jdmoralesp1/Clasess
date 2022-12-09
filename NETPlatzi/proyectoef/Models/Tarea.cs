using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace proyectoef.Models;

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



    public virtual Categoria Categoria {get; set;}

    // Es una propiedad que no se va a crear en la BD//se cambio por FluentAPI en el archivo TareasContext.cs
    //[NotMapped]
    public string Resumen { get; set; }
}

public enum Prioridad
{
    Baja,
    Media,
    Alta
}