using Microsoft.AspNetCore.Mvc;
using webapi.Models;
using webapi.Services;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    public class TareaController : ControllerBase
    {
        ITareasService tareasService;

        public TareaController(ITareasService service)
        {
            this.tareasService = service;
        }

        [HttpGet]
        public ActionResult Get() 
        {
            return Ok(tareasService.Get());
        }

        [HttpPost]
        public ActionResult Post([FromBody] Tarea tarea)
        {
            tareasService.Save(tarea);
            return Ok();
        }

        [HttpPut("{id}")]
        public ActionResult Put(Guid id, [FromBody] Tarea tarea)
        {
            tareasService.Update(id, tarea);
            return Ok();
        }

        [HttpDelete]
        public ActionResult Delete(Guid id)
        {
            tareasService.Delete(id);
            return Ok();
        }
    }
}
