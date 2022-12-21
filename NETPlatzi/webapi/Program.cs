using webapi;
using webapi.Middlewares;
using webapi.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSqlServer<TareasContext>("Data Source=localhost;Initial Catalog=TareasDb;user id=soporte;password=123456");
//builder.Services.AddScoped<IHelloWorldService, HelloWorldSerice>();
builder.Services.AddScoped <IHelloWorldService>(p=> new HelloWorldSerice());
builder.Services.AddScoped<ICategoriaService, CategoriaService>();
builder.Services.AddScoped<ITareasService, TareasService>();

var app = builder.Build();

//Swagger es muy util para sacar la documentación de la API, pero solo se usa en desarrollo para no dejarla expuesta a hackers o gente maliciosa
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

//app.UseWelcomePage();

//app.UseTimeMiddleware();

app.MapControllers();

app.Run();
