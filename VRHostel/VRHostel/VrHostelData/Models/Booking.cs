using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace VRHostel.VrHostelData.Models
{
    public class Booking
    {
        [Column("BookingID", TypeName = "int(11)")]
        public int BookingId { get; set; }
        [Column("AccountID", TypeName = "int(11)")]
        public int AccountId { get; set; }

        [Column("CustomerId", TypeName = "int(11)")]
        public int CustomerId { get; set; }
        [Column("RoomID", TypeName = "int(11)")]
        public int RoomId { get; set; }
        [Column("BedID", TypeName = "int(11)")]
        public int BedId { get; set; }
        [DataType(DataType.Date)]
        [Column("Checkin Date",TypeName = "Date")]
        public DateTime CheckinDate { get; set; }
        [DataType(DataType.Date)]
        [Column("CheckOut Date",TypeName = "Date")]
        public DateTime CheckOutDate { get; set; }

        public int Totalprice { get; set; }


        [ForeignKey("AccountId")]
        [InverseProperty("Booking")]
        public CustomerAccount CustomerAccount { get; set; }

  
        [InverseProperty("Booking")]
        public ICollection<BookedBeds> BookedBeds { get; set; }

    }
}
