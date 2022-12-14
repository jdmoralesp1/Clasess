using Microsoft.AspNetCore.Mvc;
using webapi.Services;

namespace webapi.Controllers;

[ApiController]
[Route("api/[controller]")]

public class HelloWorldController : ControllerBase
{
    private readonly ILogger<HelloWorldController> _logger;
    IHelloWorldService helloWorldService;

	public HelloWorldController(IHelloWorldService helloWorld, ILogger<HelloWorldController> logger)
    {
        helloWorldService = helloWorld;
        _logger = logger;
    }

    [HttpGet]
    public IActionResult Get()
	{
        _logger.LogInformation("Retornando get de helloworld");
        return Ok(helloWorldService.GetHelloWorld());
	}
}

