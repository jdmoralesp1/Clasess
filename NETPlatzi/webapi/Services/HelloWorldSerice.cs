namespace webapi.Services
{
    public class HelloWorldSerice : IHelloWorldService
    {
        public string GetHelloWorld()
        {
            return "Hello World!";
        }
    }

    public interface IHelloWorldService
    {
        string GetHelloWorld();
    }
}
