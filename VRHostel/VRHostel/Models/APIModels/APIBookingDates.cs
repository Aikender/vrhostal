using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VRHostel.Models.APIModels
{
    public class APIBookingDates
    {

        public IEnumerable<string> CheckinDates { get; set; }
        public IEnumerable<string> CheckOutDates { get; set; }
    }
}
