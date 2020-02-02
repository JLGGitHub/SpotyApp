using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using GetTokenSpotify.Modelo;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RestSharp;

namespace GetTokenSpotify.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SpotifyServiceController : ControllerBase
    {

      

        public ActionResult<respuesta> ObtenerToken()
        {
            var client = new RestClient("https://accounts.spotify.com/api/token");
            client.Timeout = -1;
            var request = new RestRequest(Method.POST);
            request.AddHeader("Content-Type", "application/x-www-form-urlencoded");
            request.AddParameter("grant_type", "client_credentials");
            request.AddParameter("client_id", "ea71b81f6b334632a43cc4ccb3f87121");
            request.AddParameter("client_secret", "4b3a0ec8cd5a4a2a86860054eebf4954");
            IRestResponse response = client.Execute(request);

            var accesToken = JsonConvert.DeserializeObject<respuesta>(response.Content);
            return Ok(accesToken);
           
        }
    }
}