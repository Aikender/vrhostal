using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VRHostel.VrHostelData;
using VRHostel.VrHostelData.Models;
using VRHostel.Models.APIModels;
namespace VRHostel.Controllers
{
    [Produces("application/json")]
    [Route("api/APIBookBed")]
    public class APIBookBedController : Controller
    {

        private IBookedBeds _IbookedBeds;
        public APIBookBedController(IBookedBeds ibookedBed)
        {
            _IbookedBeds = ibookedBed;
        }
        [HttpGet("{BedId}")]
        public IActionResult GetBookedDates(int BedId)
        {
            var bookedBeds = _IbookedBeds.GetBookedbedsWhitBedId(BedId);
         
           var bookingDates = new APIBookingDates()
            {
                CheckinDates= bookedBeds.Select(p => p.Check_In.ToShortDateString()),
                CheckOutDates=bookedBeds.Select(p => p.Check_Out.ToShortDateString())
            };
            if (!bookingDates.CheckinDates.Any() && !bookingDates.CheckOutDates.Any())

            {
                return Ok(2);
            }
            else
            {
                return Ok(bookingDates);
            }
        }
        [HttpPost]
        public void Create([FromBody] BookedBeds bookedBeds)
        {
            var bookbed= new BookedBeds()
            {
                BookingId=bookedBeds.BookingId,
                BedId=bookedBeds.BedId,
                Check_In=bookedBeds.Check_In,
                Check_Out=bookedBeds.Check_Out,
              
            };

            _IbookedBeds.InsertBookedBed(bookbed);
        }
    }
}