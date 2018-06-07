using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VRHostel.VrHostelData.Models;
using VRHostel.VrHostelData;

namespace VRHostel.VrhostelServices
{
    public class CustomerServices : ICustomer
    {

        private VrhostelContext _context;
        public CustomerServices(VrhostelContext context)
        {
            _context = context;
        }

        public void CreateCustomer(Customer newCustomer)
        {
            _context.Add(newCustomer);
            _context.SaveChanges();
        }

        public IEnumerable<Customer> getAllCusomers()
        {
            return _context.Customer;
        }

        public Customer getCustomerById(int id)
        {
            return getAllCusomers().FirstOrDefault(b => b.CustomerId== id); 
        }

        public void UpdateCustomer(Customer UpdateCustomer)
        {
            _context.Update(UpdateCustomer);
            _context.SaveChanges();
        }
    }
}
