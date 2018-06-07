using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace VRHostel.VrHostelData.Models
{
    public class BookedBeds
    {
        [Key]
        [Column("bookedBedsID", TypeName = "int(11)")]
        public int BookedBedsId { get; set; }
        [Column("bookingID", TypeName = "int(11)")]
        public int BookingId { get; set; }
        [Column("bedID", TypeName = "int(11)")]
        public int BedId { get; set; }
        [DataType(DataType.Date)]
        [Column("check_In",TypeName = "Date")]

        public DateTime Check_In { get; set; }
        [DataType(DataType.Date)]
        [Column("Check_Out",TypeName = "Date")]
        public DateTime Check_Out { get; set; }
   

        [ForeignKey("BookingId")]
        [InverseProperty("BookedBeds")]
        public Booking Booking { get; set; }

        [ForeignKey("BedId")]
        [InverseProperty("BookedBeds")]
        public Bed Bed{ get; set; }
    }
}
