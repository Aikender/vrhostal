using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VRHostel.Models.MVCViewModels.HostelviewModels

{
    public class HostelIndexView
    {
       
        public int HostelId { get; set; }

        [Required(ErrorMessage = "The first name field is requierd")]
        public string HostelName { get; set; }
        [Required(ErrorMessage = "The first name field is requierd")]
        public string Country { get; set; }

        public string City { get; set; }
     
        public string Street { get; set; }
     
        public int Number { get; set; }
   
        public int PhoneNumber { get; set; }
    
        public string Email { get; set; }
     
        public int Postalcode { get; set; }
      

    }
}
