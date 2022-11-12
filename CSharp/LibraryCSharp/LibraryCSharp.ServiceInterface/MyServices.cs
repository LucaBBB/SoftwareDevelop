using ServiceStack;
using LibraryCSharp.ServiceModel;

namespace LibraryCSharp.ServiceInterface;

public class MyServices : Service
{
    public object Any(Hello request)
    {
        return new HelloResponse { Result = $"Hello, {request.Name}!" };
    }
}