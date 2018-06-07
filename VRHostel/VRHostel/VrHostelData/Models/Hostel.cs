using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace VRHostel.VrHostelData.Models
{
    [Table("hostel")]
    public class Hostel
    {

        [Column("HostelID", TypeName = "int(11)")]
        public int HostelId { get; set; }
        [Required]
        [Column("Hostel Name")]
        [StringLength(30)]
        public string HostelName { get; set; }
        [Required]
        [StringLength(50)]
        public string Country { get; set; }
        [Required]
        [StringLength(50)]
        public string City { get; set; }
        [Required]
        [StringLength(50)]
        public string Street { get; set; }
        [Column(TypeName = "int(10)")]
        public int Number { get; set; }
        [Column("Postal Code", TypeName = "int(10)")]
        public int PostalCode { get; set; }
        [Column("Phone Number", TypeName = "int(40)")]
        public int PhoneNumber { get; set; }
        [Required]
        [StringLength(30)]
        public string Email { get; set; }

        [InverseProperty("Hostel")]
        public ICollection<Employee> Employee { get; set; }

        [InverseProperty("Hostel")]
        public ICollection<Customer> Customer { get; set; }


        [InverseProperty("Hostel")]
        public ICollection<Activity> Activity { get; set; }

        [InverseProperty("Hostel")]
        public ICollection<HostelReviewMessage> HostelReviewMessage { get; set; }
    }
}
