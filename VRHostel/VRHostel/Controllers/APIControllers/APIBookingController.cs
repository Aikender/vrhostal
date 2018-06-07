using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VRHostel.VrHostelData;
using VRHostel.VrHostelData.Models;
using VRHostel.Models.APIModels;

using VRHostel.Models;
namespace VRHostel.Controllers
{
    [Produces("application/json")]
    [Route("api/APIBooking")]
    public class APIBookingController : Controller
    {
        private ICustomer _icustomer;
        private ICustomerAcount _iacount;
        private IRoom _iroom;
        private IBooking _ibooking;
        private IBookedBeds _bookedBeds;
        private IBed _ibed;
        public APIBookingController(ICustomer icustomer, ICustomerAcount iacount, IRoom iroom,IBooking ibooking,IBookedBeds bookedbeds,IBed ibed)
        {
            _icustomer = icustomer;
            _iacount = iacount;
            _iroom = iroom;
            _ibooking = ibooking;
            _bookedBeds = bookedbeds;
            _ibed = ibed;
        }

        [HttpGet("{customerId}")]
        public IActionResult GetCustomerId(int customerId)
        {
            var CustomerBookings = _ibooking.GetAllBookingsWhitCustomerId(customerId);
            var booking = CustomerBookings.Select(p => new APIGetCustommerBookings()
            {
                CheckoutDate = p.CheckOutDate.ToShortDateString(),
                CheckinDate = p.CheckinDate.ToShortDateString(),
                Room = _iroom.GetRoomWhitId(p.RoomId),
                Bed = _ibed.GetBedWhitId(p.BedId),
                TotalPrice = p.Totalprice
                
                
            });
            return new ObjectResult(booking) ;
        }

        [HttpPost]
        public string Create([FromBody] APICustomerBooking data)
        {
       
            var booking = new Booking()
            {

                AccountId = data.AccountId,
                CustomerId = data.CustomerId,
                RoomId=data.RoomId,
                BedId=data.BedId,
                CheckinDate = Convert.ToDateTime(data.CheckinDate),
                CheckOutDate=Convert.ToDateTime(data.CheckoutDate),
                Totalprice=data.TotalPrice
              
            };
            _ibooking.CreateBooking(booking);
            var bookingID = booking.BookingId;
            var bookedBeds = new BookedBeds()
            {
                BookingId = bookingID,
                BedId = data.BedId,
                Check_In = Convert.ToDateTime(data.CheckinDate),
                Check_Out = Convert.ToDateTime(data.CheckoutDate)
            };

            _bookedBeds.InsertBookedBed(bookedBeds);


            return "false";
             
        }
    }
}