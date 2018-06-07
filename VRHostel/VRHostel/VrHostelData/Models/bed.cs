using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VRHostel.VrHostelData.Models
{
    public class Bed
    {

        [Column("BedID", TypeName = "int(11)")]
        public int BedId { get; set; }
        [Column("RoomID", TypeName = "int(11)")]
        public int RoomId { get; set; }
        [Required]
        [Column("bed type")]
        [StringLength(20)]
        public string BedType { get; set; }
        [Required]
        [Column("Bed Number", TypeName = "int(10)")]
        public int BedNumber { get; set; }
        [Column("Bottem_top")]
        [StringLength(20)]
        public string Bottem_top { get; set; }

        [ForeignKey("RoomId")]
        [InverseProperty("Bed")]
        public Room Room { get; set; }

        [InverseProperty("Bed")]
        public ICollection<BookedBeds>BookedBeds{ get; set; }



    }
}
