using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VRHostel.Models.MVCViewModels.CustomerViewModel
{
    // data voor index view van customers
    public class CustomerIndexViewModel
    {
        public int CustomerId {get; set;}
        public string FirstName {get; set;}
        public string LastName {get;set;}
     
    }
}
