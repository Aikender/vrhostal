using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VRHostel.VrHostelData;
using VRHostel.VrHostelData.Models;
using VRHostel.Models;

namespace VRHostel.Controllers
{
    [Produces("application/json")]
    [Route("api/APICustomer")]
    public class APICustomerController : Controller
    {
        private ICustomer _icustomer;
        private ICustomerAcount _iacount;
        public APICustomerController(ICustomer icustomer,ICustomerAcount iacount)
        {
            _icustomer = icustomer;
            _iacount = iacount;
        }

        // GET: api/APICustomer
      

        [HttpGet("{id}")]
        public IActionResult GetAcountId(int id)
        {
            var customer = _icustomer.getCustomerById(id);
            
            var customerbooking = new APICreateAcount {

                FirstName = customer.FirstName,
                LastName = customer.LastName,
                CustomerId = customer.CustomerId,
                DateOfBirth = customer.DateOfBirth.ToShortDateString(),
                Email = customer.Email,
                Gender = customer.Gender,
                CellPhone = customer.CellPhone,
                PassportNumber = customer.PassportNumber,
                Country = customer.Country,
                State = customer.State,
                City = customer.City,
                Street = customer.Street,
                Number = customer.Number,
                Buss = customer.Buss,
                Postcode = customer.Postalcode,
                AccountId = _iacount.GetCustomerAcountId(customer.CustomerId),
               

            };
            var account = _iacount.GetCustomerAcountById(customer.CustomerId);
            customerbooking.Password = account.Paswoord;
            customerbooking.Username = account.Username;
            return new ObjectResult(customerbooking);
        }
        [HttpPost]
        public void Create([FromBody] APICreateAcount data)
        {

            DateTime dateOfbirth = Convert.ToDateTime(data.DateOfBirth);
            Customer createCustommer = new Customer()
            {
                HostelId=1,
                FirstName = data.FirstName,
                LastName = data.LastName,
                DateOfBirth = dateOfbirth,
                Email = data.Email,
                Gender = data.Gender,
                CellPhone = data.CellPhone,
                PassportNumber = data.PassportNumber,
                Country = data.Country,
                State = data.State,
                City = data.City,
                Street = data.Street,
                Number = data.Number,
                Buss = data.Buss,
                Postalcode = data.Postcode,
                
            };
            _icustomer.CreateCustomer(createCustommer);
            CustomerAccount cstAcount = new CustomerAccount()
            {
                CustomerId = createCustommer.CustomerId,
                Paswoord = data.Password,
                Username = data.Username,
                IsActive="true"
            };
            _iacount.AddAcount(cstAcount);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id,[FromBody] APICreateAcount data)
        {

            DateTime dat = Convert.ToDateTime(data.DateOfBirth);
            Customer dbCustomer = _icustomer.getCustomerById(id);
       

          

            dbCustomer.FirstName = data.FirstName;
            dbCustomer.LastName = data.LastName;
            dbCustomer.DateOfBirth = dat;
            dbCustomer.Email = data.Email;
            dbCustomer.Gender = data.Gender;
            dbCustomer.PassportNumber = data.PassportNumber;
            dbCustomer.CellPhone = data.CellPhone;
            dbCustomer.Country = data.Country;
            dbCustomer.State = data.State;
            dbCustomer.City = data.City;
            dbCustomer.Street = data.Street;
            dbCustomer.Number = data.Number;
            dbCustomer.Buss = data.Buss;
            dbCustomer.Postalcode = data.Postcode;
            _icustomer.UpdateCustomer(dbCustomer);

    
         


         
            return NoContent();
        }
       
    }
}
