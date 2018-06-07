using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace VRHostel.VrHostelData.Models
{
    public class Customer
    {

        [Column("CustomerID", TypeName = "int(11)")]
        public int CustomerId { get; set; }
        [Column("HostelID", TypeName = "int(11)")]
        public int HostelId { get; set; }
       
        [Required]
        [StringLength(50)]
        public string FirstName { get; set; }
        [DataType(DataType.Date)]
        [Column(TypeName = "Date")]
        public DateTime DateOfBirth { get; set; }
        [Required]
        [StringLength(50)]
        public string LastName { get; set; }
        [Required]
        [StringLength(30)]
        public string Email { get; set; }
        [Required]
        [StringLength(3)]
        public string Gender { get; set; }
        [Column("Cell Phone", TypeName = "int(40)")]
        public int CellPhone { get; set; }
        [Required]
        [Column("Passport Number")]
        [StringLength(20)]
        public string PassportNumber { get; set; }
        [Required]
        [StringLength(50)]
        public string Country { get; set; }
        [StringLength(50)]
        public string State { get; set; }
        [Required]
        [StringLength(50)]
        public string City { get; set; }
        [Required]
        [StringLength(50)]
        public string Street { get; set; }
        [Required]
        [StringLength(20)]
        public string Number { get; set; }
        [StringLength(20)]
        public string Buss { get; set; }
        [Column(TypeName = "int(20)")]
        public int Postalcode { get; set; }
        [Required]
      

        [ForeignKey("HostelId")]
        [InverseProperty("Customer")]
        public Hostel Hostel { get; set; }
        [InverseProperty("Customer")]
        public CustomerAccount CustomerAcount { get; set; }
       
    }
}
