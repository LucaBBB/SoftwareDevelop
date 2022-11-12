using ServiceStack;
using Libreria.ServiceModel;
using System.IO;
using System.Text.Json;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace Libreria.ServiceInterface;

public class MyServices : Service
{
    public object Any(Libro request)
    {

        string fileName = "C:\\Users\\PC-di-Luca\\Desktop\\SoftwareDevelop\\CSharp\\data.json";
        if (File.Exists(fileName))
        {
            var response = JsonConvert.DeserializeObject<List<LibroResponse>>(File.ReadAllText(fileName));
            return response;

        }

        return null;
    }
}