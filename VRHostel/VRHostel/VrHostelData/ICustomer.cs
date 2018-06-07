using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VRHostel.VrHostelData.Models;

namespace VRHostel.VrHostelData
{
    public interface ICustomer
    {
        IEnumerable<Customer> getAllCusomers();
        void CreateCustomer(Customer newCustomer);
        void UpdateCustomer(Customer UpdateCustomer);
        Customer getCustomerById(int id);
    }
}
