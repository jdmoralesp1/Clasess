using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using proyectoef;
using proyectoef.Models;

var builder = WebApplication.CreateBuilder(args);
//Esta es para una BD en memoria
//builder.Services.AddDbContext<TareasContext>(p => p.UseInMemoryDatabase("TareasDB"));

//Esta es para conexión a SQL Server, los parametros de conexión estan en el appsettings.json en "cnTareas"
builder.Services.AddSqlServer<TareasContext>(builder.Configuration.GetConnectionString("cnTareas"));

var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.MapGet("/dbconexion", async ([FromServices] TareasContext dbContext) =>
{
    //Este metodo asegura que la DB este creada y si no la crea
    dbContext.Database.EnsureCreated();
    return Results.Ok("Base de datos en SQL: " + dbContext.Database.IsSqlServer());
    //return Results.Ok("Base de datos en memoria: " + dbContext.Database.IsInMemory());
});


/////////////////   TAREAS        ////////////////////



// Defino un endpoint dandole la ruta, diciendole que es un método asincrono, en el que traigo del "FromServices" que es esta misma clase
//Le paso el TareasContext que es donde cree la conexión a la Bd y doy el nombre de dbContext y con este trabajare dentro del metodo
app.MapGet("/api/tareas", async ([FromServices] TareasContext dbContext) =>
{
    return Results.Ok(dbContext.Tareas.Include(p=> p.Categoria)); // o dbContext.Categorias
});

//Le digo que desde el "FromBody" va a llegar el objeto tarea
app.MapPost("/api/tareas", async ([FromServices] TareasContext dbContext, [FromBody] Tarea tarea) =>
{
    tarea.TareaId = Guid.NewGuid();
    tarea.FechaCreacion = DateTime.Now;

    //await dbContext.AddAsync(tarea); //otra forma de hacerlo
    await dbContext.Tareas.AddAsync(tarea);

    await dbContext.SaveChangesAsync();

    return Results.Ok();
});

//Uso el FromRoute para obtener desde la Url el id
app.MapPut("/api/tareas/{id}", async ([FromServices] TareasContext dbContext, [FromBody] Tarea tarea, [FromRoute] Guid id) =>
{
    //El Find() por defecto busca por la llave primaria 
    var tareaActual = dbContext.Tareas.Find(id);

    //Si tareaActual es != null, si lelgo algo y lo voy a actualizar
    if (tareaActual != null)
    {
        tareaActual.CategoriaId = tarea.CategoriaId;
        tareaActual.Titulo = tarea.Titulo;
        tareaActual.PrioridadTarea = tarea.PrioridadTarea;
        tareaActual.Descripcion = tarea.Descripcion;

        await dbContext.SaveChangesAsync();

        return Results.Ok();
    }

    return Results.NotFound();
});

app.MapDelete("/api/tareas/{id}", async ([FromServices] TareasContext dbContext, [FromRoute] Guid id) =>
{
    var tareaActual = dbContext.Tareas.Find(id);

    if (tareaActual != null) 
    { 
        dbContext.Remove(tareaActual);
        await dbContext.SaveChangesAsync();
        return Results.Ok();
    }

    return Results.NotFound();
});


/////////////////       CATEGORIAS        ////////////////////



app.MapGet("/api/categorias", async ([FromServices] TareasContext dbContext) =>
{
    return Results.Ok(dbContext.Categorias); // o dbContext.Categorias
});

app.MapPost("/api/categorias", async ([FromServices] TareasContext dbContext, [FromBody] Categoria categoria) =>
{
    categoria.CategoriaId = Guid.NewGuid();

    //await dbContext.AddAsync(tarea); //otra forma de hacerlo
    await dbContext.Categorias.AddAsync(categoria);

    await dbContext.SaveChangesAsync();

    return Results.Ok();
});

app.MapPut("/api/categorias/{id}", async ([FromServices] TareasContext dbContext, [FromBody] Categoria categoria, [FromRoute] Guid id) =>
{
    var CategoriaActual = dbContext.Categorias.Find(id);

    if(CategoriaActual != null) 
    {
        CategoriaActual.Nombre= categoria.Nombre;
        CategoriaActual.Descripcion= categoria.Descripcion;
        CategoriaActual.Peso= categoria.Peso;

        await dbContext.SaveChangesAsync();

        return Results.Ok();
    }

    return Results.NotFound();
});


app.MapDelete("/api/categorias/{id}", async ([FromServices] TareasContext dbContext, [FromRoute] Guid id) =>
{
    var CategoriaActual = dbContext.Categorias.Find(id);

    if (CategoriaActual != null)
    {
        dbContext.Remove(CategoriaActual);
        await dbContext.SaveChangesAsync();
        return Results.Ok();
    }

    return Results.NotFound();
});


app.Run();
