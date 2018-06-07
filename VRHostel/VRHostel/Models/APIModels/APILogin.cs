using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VRHostel.Models.APIModels
{
    public class APILogin
    {
        public string Username { get; set; }  //stores the username recieved from the vrhostalLogin
        public string Password { get; set; }  //stores the password from vrhostel login
    }
}
