using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace VRHostel.VrHostelData.Models
{
    public class Activity
    {
        [Key]
        [Column("ActivityID", TypeName = "int(11)")]
        public int ActivityId { get; set; }
        [Column("HostelID", TypeName = "int(11)")]
        public int HostelId { get; set; }
        [Required]
        [StringLength(30)]
        public string Name { get; set; }
        [Required]
        [StringLength(500)]
        public string Description { get; set; }
        [Column("Date of Activity",TypeName = "Date")]
        
        public DateTime DateOfActivity { get; set; }
        [Column("Time of Activity", TypeName = "time")]
        public TimeSpan TimeOfActivity { get; set; }
        [Column(TypeName = "int(10)")]
        public int Price { get; set; }

        [ForeignKey("HostelId")]
        [InverseProperty("Activity")]
        public Hostel Hostel { get; set; }

        [InverseProperty("Activity")]
        public ICollection<ActivityReviewMessage> ActivityReviewMessage{ get; set; }
    }
}
