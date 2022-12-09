using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    private static List<WeatherForecast> ListWeatherForecast = new List<WeatherForecast>();

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;

        if (ListWeatherForecast == null || !ListWeatherForecast.Any())
        {
            ListWeatherForecast = Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            }).ToList();
        
        }
    }

    [HttpGet(Name = "GetWeatherForecast")]
    [Route("Get/weatherforecast")]
    [Route("Get/weatherforecast2")]
    [Route("[action]")]
    public IEnumerable<WeatherForecast> Get()
    {
        return ListWeatherForecast;
    }

    [HttpPost]
    public ActionResult Post(WeatherForecast weatherForecast) 
    {
        ListWeatherForecast.Add(weatherForecast);

        return Ok();
    }

    [HttpDelete("{index}")]
    public ActionResult Delete(int index) 
    {
        try
        {
            ListWeatherForecast.RemoveAt(index);
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
            return BadRequest();
        }
        return Ok();
    }
}