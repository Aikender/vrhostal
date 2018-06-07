using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VRHostel.VrHostelData;
using VRHostel.VrHostelData.Models;

namespace VRHostel.VrhostelServices
{
    public class HostelService : VrHostelData.IHostel
    {
        private VrhostelContext _context;
        public HostelService(VrhostelContext context)
        {
            _context = context;
        }
        public IEnumerable<Hostel> getAll()
        {
            return _context.Hostel;
        }

        public Hostel getbyId(int id)
        {
            return getAll().FirstOrDefault(b => b.HostelId == id);
        }

        public void UpdateHostel(Hostel hostel)
        {
            _context.Update(hostel);
            _context.SaveChanges();
        }
    }
}
