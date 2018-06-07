using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VRHostel.VrHostelData;
using VRHostel.VrHostelData.Models;
using VRHostel.Models;
namespace VRHostel.Controllers
{
    [Produces("application/json")]
    [Route("api/APIRoom")]
    public class APIRoomController : Controller
    {
        private IRoom _iroom;


        public APIRoomController(IRoom iroom)
        {
            _iroom = iroom;
        }

        [HttpGet]
        public IEnumerable<Room> GetAll()
        {


            return _iroom.getAll();
        }

    }
}