using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VRHostel.VrHostelData.Models;

namespace VRHostel.Models.MVCViewModels.RoomViewModel
{
    public class RoomViewData
    {

     
        public int RoomId { get; set; }
        public string RoomType { get; set; }
        public string RoomName { get; set; }
        public int RoomNumber { get; set; }
        public int RoomPrice { get; set; }
        public int TotalsleepPlaces { get; set; }



        public int BedId { get; set; }
        public string BedType { get; set; }
        public int BedNumber { get; set; }
        public string Bottem_top { get; set; }

        public IEnumerable<Bed> Bedlist { get; set; }
    }
}
