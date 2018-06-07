using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace VRHostel.VrHostelData.Models
{
   
    public class CustomerAccount
    {

        [Key]
        [Column("AccountID", TypeName = "int(11)")]
        public int AccountId { get; set; }
        [Column("CustomerID", TypeName = "int(11)")]
        public int CustomerId { get; set; }
        [Required]
        [StringLength(20)]
        
        public string Paswoord { get; set; }
        [Required]
        [StringLength(20)]
        public string Username { get; set; }
        [Required]
        [StringLength(5)]
        public string IsActive { get; set; }

        [ForeignKey("CustomerId")]
        public Customer Customer { get; set; }

        [InverseProperty("CustomerAccount")]
        public ICollection<Booking> Booking { get; set; }

        [InverseProperty("CustomerAccount")]
        public ICollection<ActivityReviewMessage> ActivityReviewMessage { get; set; }

        [InverseProperty("CustomerAccount")]
        public ICollection<HostelReviewMessage> HostelReviewMessage { get; set; }

    }
}
