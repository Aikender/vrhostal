using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VRHostel.VrHostelData.Models
{
    public class Room
    {
        

        [Column("RoomID", TypeName = "int(11)")]
        public int RoomId { get; set; }
        [Required]
        [StringLength(20)]
        public string RoomType { get; set; }
        [Required]
        [StringLength(20)]
        public string RoomName { get; set; }
        [Column("RoomNumber", TypeName = "int(10)")]
        public int RoomNumber { get; set; }
        [Column(TypeName = "int(10)")]
        public int RoomPrice { get; set; }

        [Column("TotalsleepPlaces", TypeName = "int(10)")]
        public int TotalsleepPlaces { get; set; }
 
        [InverseProperty("Room")]
        public ICollection<Bed> Bed { get; set; }
    }
}
