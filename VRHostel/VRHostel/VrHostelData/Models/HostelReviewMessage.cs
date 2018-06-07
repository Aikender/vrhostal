using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace VRHostel.VrHostelData.Models
{
    [Table("hostel review message")]
    public class HostelReviewMessage
    {
        [Key]
        [Column("HostelReviewID", TypeName = "int(11)")]
        public int HostelReviewId { get; set; }
        [Column("HostelID", TypeName = "int(11)")]
        public int HostelId { get; set; }
        [Column("AccountID", TypeName = "int(11)")]
        public int AccountId { get; set; }
        [Required]
        [Column("Message Code")]
        [StringLength(10)]
        public string MessageCode { get; set; }
        [Required]
        [StringLength(500)]
        public string Message { get; set; }
        [Column("Posted Date", TypeName = "Date")]
        public DateTime PostedDate { get; set;}
        [Column("Posted Time", TypeName = "time")]
        public TimeSpan PostedTime { get; set; }
        [Column("Hostel Score", TypeName = "int(10)")]
        public int HostelScore { get; set; }

        [ForeignKey("AccountId")]
        [InverseProperty("HostelReviewMessage")]
        public CustomerAccount CustomerAccount { get; set; }
        [ForeignKey("HostelId")]
        [InverseProperty("HostelReviewMessage")]
        public Hostel Hostel { get; set; }
    }
}
