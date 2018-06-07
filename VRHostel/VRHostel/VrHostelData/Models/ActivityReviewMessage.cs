using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VRHostel.VrHostelData.Models
{
    [Table("activity review message")]
    public class ActivityReviewMessage
    {
        [Key]
        [Column("ReviewMessageID", TypeName = "int(11)")]
        public int ReviewMessageId { get; set; }
        [Column("ActivityID", TypeName = "int(11)")]
        public int ActivityId { get; set; }
        [Column("AccountID", TypeName = "int(11)")]
        public int AccountId { get; set; }
        [Required]
        [Column("Message Code")]
        [StringLength(10)]
        public string MessageCode { get; set; }
        [Required]
        [StringLength(500)]
        public string Message { get; set; }
        [Column("Posted Date",TypeName = "Date")]
        public DateTime PostedDate { get; set; }
        [Column("Posted Time", TypeName = "time")]
        public TimeSpan PostedTime { get; set; }
        [Column("Activity Score", TypeName = "int(10)")]
        public int ActivityScore { get; set; }

        [ForeignKey("AccountId")]
        [InverseProperty("ActivityReviewMessage")]
        public CustomerAccount CustomerAccount { get; set; }

        [ForeignKey("ActivityId ")]
        [InverseProperty("ActivityReviewMessage")]
        public Activity Activity { get; set; }
    }
}
