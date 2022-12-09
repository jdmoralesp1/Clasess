using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;

//Lo que hara es usar logger para guardar en consola los errores que no se muestren con los try u otros puntos de control
//Reescribiendo el OnException

namespace APIPrueba.Filtros
{
    public class FiltroDeExcepcion: ExceptionFilterAttribute
    {
        private readonly ILogger<FiltroDeExcepcion> logger;

        public FiltroDeExcepcion(ILogger<FiltroDeExcepcion> logger)
        {
            this.logger = logger;
        }

        public override void OnException(ExceptionContext context)
        {
            logger.LogError(context.Exception, context.Exception.Message);
            base.OnException(context);
        }

    }
}
