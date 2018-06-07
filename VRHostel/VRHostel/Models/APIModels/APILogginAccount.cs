using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VRHostel.Models.APIModels
{
    public class APILogginAccount
    {
     
        public int AccountId { get; set; }
        public int CustomerId { get; set; }
        public string Paswoord { get; set; }
        public string Username { get; set; }
    }
}
