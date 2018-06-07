using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VRHostel.Models.APIModels;
 using VRHostel.VrHostelData.Models;
using VRHostel.VrHostelData;
namespace VRHostel.Controllers
{
    [Produces("application/json")]
    [Route("api/APILogin")]
    public class APILoginController : Controller
    {
        private ICustomerAcount _icustomerAcount;
        


        public APILoginController(ICustomerAcount iAcount)
        {
            _icustomerAcount = iAcount;
        }



        [HttpPost]
        public IActionResult Login ([FromBody]  APILogin data)
        {

          var account =_icustomerAcount.GetCustomerAccountByUsenAndPas(data.Username, data.Password);
       
            
            int pass;
                
         
            if(!account.Any())
            {
                pass = 1;
                return Ok(1);
            }
            else
            {

                pass = 2;
                return Ok(account);
            }
        }
    }
}