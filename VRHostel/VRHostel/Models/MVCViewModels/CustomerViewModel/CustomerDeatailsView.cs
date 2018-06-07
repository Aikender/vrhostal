using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VRHostel.Models.MVCViewModels.CustomerViewModel
{
    public class CustomerDeatailsView
    {
        public string FirstName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string LastName { get; set; }
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
        public int Postalcode { get; set; }
 
    }
}
