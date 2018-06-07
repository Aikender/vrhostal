using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VRHostel.VrHostelData;
using VRHostel.VrHostelData.Models;
using VRHostel.Models.MVCViewModels.CustomerViewModel;


namespace VRHostel.Controllers
{
    public class CustomerController : Controller
    {
        private ICustomer _icustomer;
        private IBooking _ibooking;
        private IRoom _iroom;
        private IBed _ibed;

        public CustomerController(ICustomer customer,IBooking booking ,IRoom room ,IBed bed)
        {
            _icustomer = customer;
            _ibooking = booking;
            _iroom = room;
            _ibed = bed;
        }
        public IActionResult Index()
        {
            var customerlist = _icustomer.getAllCusomers();
            var CustomerIndexView = customerlist.Select(p => new CustomerIndexViewModel()
            {
                CustomerId=p.CustomerId,
                FirstName=p.FirstName,
                LastName=p.LastName,

            });
          ;
            return View(CustomerIndexView);
        }
        public IActionResult Booking(int customerId)
        {
            var customer = _icustomer.getCustomerById(customerId);
            var CustomerBookings = _ibooking.GetAllBookingsWhitCustomerId(customerId);
            var b = CustomerBookings.Select(p => new BookingViewModel {

                FirstName = customer.FirstName,
                LastName = customer.LastName,
                Room = _iroom.GetRoomWhitId(p.RoomId),
                Bed = _ibed.GetBedWhitId(p.BedId),
                Totalprice = p.Totalprice,
                CheckinDate = p.CheckinDate.ToShortDateString(),
                ChekoutDate=p.CheckOutDate.ToShortDateString()
                
            });

               

            return View(b);
            
        }

        public IActionResult CustomerDetails(int customerId)
        {
            var customer = _icustomer.getCustomerById(customerId);
            var customerDetailsView = new CustomerDeatailsView() {

                FirstName=customer.FirstName,
                LastName=customer.LastName,
                DateOfBirth=customer.DateOfBirth,
                Gender=customer.Gender,
                Email=customer.Email,
                CellPhone=customer.CellPhone,
                PassportNumber=customer.PassportNumber,
                Country=customer.PassportNumber,
                State=customer.State,
                City=customer.City,
                Street=customer.Street,
                Number=customer.Number,
                Buss=customer.Buss,
                Postalcode=customer.Postalcode,

            };

            return View(customerDetailsView);
        }
    }
}