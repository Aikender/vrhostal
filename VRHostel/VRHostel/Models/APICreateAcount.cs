using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VRHostel.Models
{
    public class APICreateAcount
    {
       
     
        public int CustomerId { get; set; }
        public int AccountId { get; set; }
        public string FirstName { get; set;}
       
        public string LastName { get; set; }
      
        public string DateOfBirth { get; set; }
        public string Email { get; set; }
        public string Gender { get; set; }
        public int CellPhone { get; set; }
        public string PassportNumber { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public string Number { get; set; }
        public string Buss { get; set; }
        public int Postcode { get; set; }
        public string Password { get; set; }
        public string Username { get; set; }
        public string IsActive { get; set; }

    }
}
