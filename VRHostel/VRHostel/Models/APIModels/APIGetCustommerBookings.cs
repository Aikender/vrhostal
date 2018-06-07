using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VRHostel.VrHostelData.Models;
namespace VRHostel.Models.APIModels
{
    public class APIGetCustommerBookings
    {
       public string CheckinDate { get; set; }
       public string CheckoutDate { get; set; }
     public   Room Room { get; set; }
      public  Bed Bed { get; set; }
       public int TotalPrice { get; set; }
    }
}
