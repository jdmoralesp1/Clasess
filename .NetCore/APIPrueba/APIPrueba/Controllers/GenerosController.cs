using APIPrueba.Entidades;
using APIPrueba.Filtros;
using APIPrueba.Repositorios;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace APIPrueba.Controllers
{
    /*Los controllers se nombran "NombreController" y asi los toma .net, en el Route se define el endpoint
     el cual puede tener de nombre "api/nombredeclase" o "api/[controller]" tomando asi el nombre de la clase
     ese segundo metodo no es tan recomendado*/
    [Route("api/generos")]
    [ApiController]
    // con esto todas mis acciones estan protegidas
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    //El ControllerBase me permite heredar métodos auxiliares
    public class GenerosController: ControllerBase
    {
        private readonly IRepositorio repositorio;
        private readonly WeatherForecastController weatherForecastController;
        private readonly ILogger<GenerosController> logger;

        public GenerosController(IRepositorio repositorio, 
            WeatherForecastController weatherForecastController,
            ILogger<GenerosController> logger
            )
        {
            this.repositorio = repositorio;
            this.weatherForecastController = weatherForecastController;
            this.logger = logger;
        }

        [HttpGet] // api/generos
        [HttpGet("listado")] // api/generos/listado
        // Este hace que no necesite colocar api/generos al inicio si no solo /listadogeneros
        [HttpGet("/listadogeneros")] // /listadogeneros
        //[ResponseCache(Duration = 60)]
        //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)] // puedo dejarlo aca para darle un Autorize solo a este metodo
        [ServiceFilter(typeof(MiFiltroDeAccion))]
        public ActionResult<List<Genero>> Get()
        {
            logger.LogInformation("Vamos a mostrar los generos");
            return repositorio.ObtenerTodosLosGeneros();
        }

        [HttpGet("guid")] // /api/generos/guid
        public ActionResult<Guid> GetGUID()
        {
            return Ok(new
            {
                GUID_GenerosController = repositorio.ObtenerGUID(),
                GUID_WeatherForecastController = weatherForecastController.ObtenerGUIDWeatherForecastController()
            });
        }

        //Lo que hago es que al agregar al metodo ("loquesea") lo concateno con api/generos/loquesea y al usar
        //"{Id}" le concateno el Id del genero que quiero traer, algo como api/generos/1
        // Tambien podemos decirle el tipo de dato a la variable como Id:int
        [HttpGet("{Id:int}")] // api/generos/felipe
        // Al encerrar ActionResult de Genero, puedo retornar un genero o un tipo de ActionResult, en este caso
        // NotFound que es una respuesta 404, puede ser otra ActionResult

        // Una alternativa es IActionResult pero casi no se usa

        // Si yo creo metodos asincronos, donde lo llame tambien debe ser asincrono
        public async Task<ActionResult<Genero>> Get(int Id, [FromHeader]string nombre) 
        //Para recibir el parametro como un key-value uso el BindRequired, tambien el FromBody, FromHeader,
        //FromQuery, etc
        {
            logger.LogDebug($"Obteniendo un género por el id {Id}");

            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var genero = await repositorio.ObtenerPorId(Id);

            if(genero == null)
            {
                throw new ApplicationException($"El género de Id {Id} no fue encontrado");
                logger.LogWarning($"No pudimos encontrar el género de id {Id}");
                return NotFound();
            }

            return genero;
        }

        [HttpPost]
        public ActionResult Post([FromBody] Genero genero)
        {
            repositorio.CrearGenero(genero);
            return NoContent();
        }

        [HttpPut]
        public ActionResult Put([FromBody] Genero genero)
        {
            return NoContent();
        }

        [HttpDelete]
        public ActionResult Delete()
        {
            return NoContent();
        }
        
    }
}
