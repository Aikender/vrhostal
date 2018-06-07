using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VRHostel.VrHostelData.Models;

namespace VRHostel.VrHostelData
{
    public interface IBooking
    {
        IEnumerable<Booking> getAllBookings();
        IEnumerable<Bed> getAlLBeds();
        void CreateBooking(Booking newBooking);
        IEnumerable<Booking> GetAllBookingsWhitCustomerId(int customerId);
    }
}
