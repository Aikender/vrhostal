using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VRHostel.VrHostelData.Models;
namespace VRHostel.Models.APIModels
{
    public class APICustomerBooking
    {
         public int AccountId { get; set; }
        public int CustomerId { get; set; }
        public int RoomId { get; set; }
        public int BedId { get; set; }
        public string CheckinDate { get; set; }
        public string CheckoutDate { get; set; }
        public int TotalPrice { get; set; }



    }
}
