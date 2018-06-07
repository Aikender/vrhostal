using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VRHostel.VrHostelData.Models;
using VRHostel.VrHostelData;
namespace VRHostel.VrhostelServices
{
    public class BookingService : IBooking
    {
        private VrhostelContext _context;
        public BookingService(VrhostelContext context)
        {
            _context = context;
        }
        public void CreateBooking(Booking newBooking)
        {
            _context.Add(newBooking);
            _context.SaveChanges();
        }

        public IEnumerable<Bed> getAlLBeds()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Booking> getAllBookings()
        {
            return _context.Booking;
        }

        public IEnumerable<Booking> GetAllBookingsWhitCustomerId(int customerId)
        {
            return getAllBookings().Where(b => b.CustomerId == customerId);
        }
    }
}
