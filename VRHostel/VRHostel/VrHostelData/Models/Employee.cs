using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VRHostel.VrHostelData.Models
{
    public class Employee
    {
        [Column("EmployeeID", TypeName = "int(11)")]
        public int EmployeeId { get; set; }
        [Column("HostelID", TypeName = "int(11)")]
        public int HostelId { get; set; }
        [Required]
        [StringLength(50)]
        public string FirstName { get; set; }
        [Required]
        [StringLength(50)]
        public string LastName { get; set; }
        [DataType(DataType.Date)]
        [Column(TypeName  ="Date")]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:MM/dd/yyyy}")]
        public DateTime DateOfBirth { get; set; }
        [Required]
        [StringLength(3)]
        public string Gender { get; set; }
        [Required]
        [Column("Passport Number")]
        [StringLength(20)]
        public string PassportNumber { get; set; }
        [Required]
        [StringLength(30)]
        public string Email { get; set; }
        [Column("Cell Phone", TypeName = "int(40)")]
        public int? CellPhone { get; set; }
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
        [StringLength(20)]
        public string Username { get; set; }
        [StringLength(20)]
        public string Password { get; set; }

        [ForeignKey("HostelId")]
        [InverseProperty("Employee")]
        public Hostel Hostel { get; set; }
    }
}
