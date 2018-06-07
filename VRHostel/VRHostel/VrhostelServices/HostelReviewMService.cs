using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VRHostel.VrHostelData.Models;
using VRHostel.VrHostelData;
namespace VRHostel.VrhostelServices
{
    public class HostelReviewMService : IHostelReviewM
    {

        private VrhostelContext _context;
        public 
            HostelReviewMService(VrhostelContext context)
        {
            _context = context;
        }
      

        public IEnumerable<HostelReviewMessage> HostelRevMgetAll()
        {
            return _context.HostelReviewMessage;
        }

        public HostelReviewMessage GetHostelRevMById(int hostelRevMId)
        {
            return HostelRevMgetAll().FirstOrDefault(m => m.HostelReviewId == hostelRevMId);
        }

        public void Create(HostelReviewMessage newHostelRevM)
        {
            _context.Add(newHostelRevM);
            _context.SaveChanges();
            
        }

       
        public void Delete(HostelReviewMessage hostelRevM)
        {
            _context.Remove(hostelRevM);
            _context.SaveChanges();
        }

        public void Update(HostelReviewMessage hostelRevM)
        {
            throw new NotImplementedException();
        }
    }
}
