using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VRHostel.VrHostelData.Models;
using VRHostel.VrHostelData;
namespace VRHostel.VrhostelServices
{
    public class CustomerAcountService : ICustomerAcount
    {
        private VrhostelContext _context;
        public CustomerAcountService(VrhostelContext context)
        {
            _context = context;
        }


        public void AddAcount(CustomerAccount newAcount)
        {
            _context.Add(newAcount);
            _context.SaveChanges();
        }

      

        public void deleteAcount(CustomerAccount customerAcount)
        {
            _context.Remove(customerAcount);
            _context.SaveChanges();
        }

        public IEnumerable<CustomerAccount> getAllAcounts()
        {
            return _context.CustomerAccount;
        }

        public IEnumerable< CustomerAccount> GetCustomerAccountByUsenAndPas(string username, string password)
        {
            
           

            return getAllAcounts().Where(u => u.Username == username).Where(p => p.Paswoord == password);
        }

        public CustomerAccount GetCustomerAcountById(int customerId)
        {
            return getAllAcounts().FirstOrDefault(p => p.CustomerId == customerId);
        }

        public int GetCustomerAcountId(int customerId)
        {     
             var account = getAllAcounts().FirstOrDefault(b => b.CustomerId == customerId);
            return account.AccountId;
        }

        public void UpdateAcount(CustomerAccount updateAcount)
        {
           _context.Update(updateAcount);
           _context.SaveChanges();
        }
    }
}
