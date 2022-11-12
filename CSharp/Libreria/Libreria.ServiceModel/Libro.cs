using ServiceStack;
using System;
using System.Collections.Generic;

namespace Libreria.ServiceModel
{
    [Route("/getLibro")]
    public class Libro : IReturn<List<LibroResponse>>
    { }

    [Serializable]
    public class LibroResponse
    {
        public string Titolo { get; set; }
        public string Autore { get; set; }
    }
}
