using Microsoft.EntityFrameworkCore;
using proyectoef.Models;

namespace proyectoef;

public class TareasContext: DbContext
{
    public DbSet<Categoria> Categorias {get; set;}

    public DbSet<Tarea> Tareas {get; set;}

    public TareasContext(DbContextOptions<TareasContext> options) :base(options){}

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        //Creamos la data inicial y la agregamos usando categoria.HasData(categoriasInit);
        List<Categoria> categoriasInit = new List<Categoria>();
        categoriasInit.Add(new Categoria() { CategoriaId = Guid.Parse("6528c7a6-39d4-46df-bebf-91c2bcf9d9ca"), Nombre = "Actividades pendientes", Peso = 20 });
        categoriasInit.Add(new Categoria() { CategoriaId = Guid.Parse("6528c7a6-39d4-46df-bebf-91c2bcf9d902"), Nombre = "Actividades personales", Peso = 50 });
        categoriasInit.Add(new Categoria() { CategoriaId = Guid.Parse("6528c7a6-39d4-46df-bebf-91c2bcf9d929"), Nombre = "Actividades laborales", Peso = 35 });


        //Con esto reemplazo las lineas que se comentan en Models/Categoria y aqui indico cual es la llave principal
        //y las restricciones como el equired o el maxlenght
        modelBuilder.Entity<Categoria>(categoria =>
        {
            categoria.ToTable("Categoria");

            categoria.HasKey(p => p.CategoriaId);
            categoria.Property(p => p.Nombre).IsRequired().HasMaxLength(150);

            categoria.Property(p => p.Descripcion).IsRequired(false);

            categoria.Property(p => p.Peso);

            categoria.HasData(categoriasInit);
        });


        //Creamos la data inicial y la agregamos usando tarea.HasData(tareasInit);
        List<Tarea> tareasInit = new List<Tarea>();

        tareasInit.Add(new Tarea() { TareaId = Guid.Parse("6528c7a6-39d4-46df-bebf-91c2bcf9d910"), CategoriaId = Guid.Parse("6528c7a6-39d4-46df-bebf-91c2bcf9d9ca"), PrioridadTarea = Prioridad.Media, Titulo = "Pago de servicios publicos", FechaCreacion = DateTime.Now });
        tareasInit.Add(new Tarea() { TareaId = Guid.Parse("6528c7a6-39d4-46df-bebf-91c2bcf9d911"), CategoriaId = Guid.Parse("6528c7a6-39d4-46df-bebf-91c2bcf9d902"), PrioridadTarea = Prioridad.Baja, Titulo = "Terminar de ver pelicula en Netjlis", FechaCreacion = DateTime.Now });
        tareasInit.Add(new Tarea() { TareaId = Guid.Parse("6528c7a6-39d4-46df-bebf-91c2bcf9d912"), CategoriaId = Guid.Parse("6528c7a6-39d4-46df-bebf-91c2bcf9d929"), PrioridadTarea = Prioridad.Alta, Titulo = "Finalizar curso .Net", FechaCreacion = DateTime.Now });


        modelBuilder.Entity<Tarea>(tarea =>
        {
            tarea.ToTable("Tarea");
            tarea.HasKey(p => p.TareaId);

            tarea.HasOne(p => p.Categoria).WithMany(p=> p.Tareas).HasForeignKey(p=> p.CategoriaId);

            tarea.Property(p => p.Titulo).IsRequired().HasMaxLength(200);

            tarea.Property(p => p.Descripcion).IsRequired(false);

            tarea.Property(p => p.PrioridadTarea);

            tarea.Property(p => p.FechaCreacion);

            tarea.Ignore(p => p.Resumen);

            tarea.HasData(tareasInit);

        });
    }
}