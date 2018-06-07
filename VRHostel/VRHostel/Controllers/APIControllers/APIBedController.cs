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
    [Route("api/APIBed")]
    public class APIBedController : Controller
    {
        private IRoom _iroom;


        public APIBedController(IRoom iroom)
        {
            _iroom = iroom;
        }

     

        [HttpGet("{roomid}")]
        public IEnumerable <Bed> GetBedsWhitRoomId(int roomid)
        {
            var bed = _iroom.getBedsWhitRoomId(roomid);
            return bed;
        }

    }
}