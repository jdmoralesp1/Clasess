using Microsoft.AspNetCore.Mvc;
using webapi.Services;

namespace webapi.Controllers;

[ApiController]
[Route("api/[controller]")]

public class HelloWorldController : ControllerBase
{
    private readonly ILogger<HelloWorldController> _logger;
    IHelloWorldService helloWorldService;

    TareasContext dbcontext;

	public HelloWorldController(IHelloWorldService helloWorld, ILogger<HelloWorldController> logger, TareasContext db)
    {
        helloWorldService = helloWorld;
        _logger = logger;
        dbcontext = db;
    }

    [HttpGet]
    public IActionResult Get()
	{
        _logger.LogInformation("Retornando get de helloworld");
        return Ok(helloWorldService.GetHelloWorld());
	}

    [HttpGet]
    [Route("createdb")]
    public IActionResult CreateDatabase() 
    {
        dbcontext.Database.EnsureCreated();

        return Ok();
    }
}

