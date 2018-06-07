using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VRHostel.VrHostelData.Models;
namespace VRHostel.Models.MVCViewModels.CustomerViewModel

{
    public class BookingViewModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string CheckinDate { get; set; }
        public string ChekoutDate{ get; set; }
        public  Room Room  {get; set; }
        public  Bed Bed { get; set; }
        public int Totalprice { get; set; }
    }
}
