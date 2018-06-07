using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace VRHostel.Models.MVCViewModels.EmployeeViewModel
{
    public class EmployeeIndexView
    {
        
        public int EmployeeId { get; set; }
    
        public int HostelId { get; set; }
        [Required(ErrorMessage = "The first name field is requierd")]
        [MinLength(3 ,ErrorMessage ="the First Name field must contain  3 characters") ]
        [MaxLength(50,ErrorMessage ="the First Name field can not contain more than 50 characters")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "The Last Name field is requierd")]
        [MinLength(3,ErrorMessage = "the Last Name field must contain  3 characters")]
        [MaxLength(50,ErrorMessage = "the LastName field can not contain more than 50 characters")]
        public string LastName { get; set; }
        [Required (ErrorMessage ="The Birth Date Field is Required")]
    
        public DateTime DateOfBirth { get; set; }
        [Required (ErrorMessage = "the Gender field is requierd")]
        [MinLength(1, ErrorMessage = "the Gender field must at least contain 1 character")]
        [MaxLength(1, ErrorMessage = "the Gender field may not contain moer than 1 character")]
        public string Gender { get; set; }
        [Required (ErrorMessage ="The password field is required")]
        [MaxLength(15)]
        public string PassportNumber { get; set; }
        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress (ErrorMessage ="The email addres you enterd is not a valid one")]
        public string Email { get; set; }
        [Required (ErrorMessage ="this field is requierd")]

        
        public int? CellPhone { get; set; }
        [Required (ErrorMessage ="This field is requierd")]
        [MaxLength(50, ErrorMessage = "the Country field can not contain more than 50 characters")]
        public string Country { get; set; }
        [Required (ErrorMessage ="this field is required")]
        [MaxLength(50, ErrorMessage = "the State field can not contain more than 50 characters")]
        public string State { get; set; }
        [Required(ErrorMessage = "this field is required")]
        [MaxLength(50, ErrorMessage = "the City field can not contain more than 50 characters")]
        public string City { get; set; }
        [Required(ErrorMessage = "this field is required")]
        [MaxLength(50, ErrorMessage = "the Street field can not contain more than 50 characters")]
        public string Street { get; set; }
        [Required(ErrorMessage = "this field is required")]
        [MaxLength(20,ErrorMessage ="the Number field may not conatain more than 20 characters")]
        public string Number { get; set; }
        [Required(ErrorMessage = "this field is required")]
        [MaxLength(20,ErrorMessage ="the Buss Field may not conatain moere than 20 characters")]
        public string Buss { get; set; }
        [Required(ErrorMessage = "this field is required")]
        //[MaxLength(20, ErrorMessage = "the Postalcode Field may not conatain moere than 20 characters")]
        public int Postalcode { get; set; }
        [Required(ErrorMessage = "this field is required")]
        [MaxLength(20, ErrorMessage = "the Username Field may not conatain moere than 20 characters")]
        public string Username { get; set; }
        [Required(ErrorMessage = "this field is required")]
        [MaxLength(20, ErrorMessage = "the Password Field may not conatain moere than 20 characters")]
        public string Password { get; set; }

    }
}
