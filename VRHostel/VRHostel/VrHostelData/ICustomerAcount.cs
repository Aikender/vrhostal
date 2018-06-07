using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VRHostel.VrHostelData.Models;
namespace VRHostel.VrHostelData
{
    public interface ICustomerAcount
    {
        IEnumerable<CustomerAccount> getAllAcounts();      // get all the custommer  accounts
        CustomerAccount GetCustomerAcountById(int acountId); // get custommer a account by id
        IEnumerable<CustomerAccount> GetCustomerAccountByUsenAndPas(string username, string password); // get a custommer account by username and password
       int GetCustomerAcountId(int customerId);   // get a custommer acount id whit a customer id
        void AddAcount(CustomerAccount newAcount);    // add a  custommer account
        void UpdateAcount(CustomerAccount updateAcount); // update a  custommer acount
        void deleteAcount(CustomerAccount customerAcount);  // delete a customer account

    }
}
