using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VRHostel.VrHostelData.Models;
using VRHostel.VrHostelData;

namespace VRHostel.VrhostelServices
{
    public class BedServices :IBed
    {
        private VrhostelContext _context;
        public BedServices(VrhostelContext context)
        {
            _context = context;
        }

        public IEnumerable<Bed> GetAllBeds()
        {
            return _context.Bed;
        }

        public Bed GetBedNumber(int bedId)
        {
            return GetAllBeds().FirstOrDefault(b => b.BedId == bedId);
        }

        public IEnumerable<Bed> GetBedsWhitId(int roomId)
        {
            throw new NotImplementedException();
        }

        public Bed GetBedWhitId(int BedId)
        {
            return GetAllBeds().FirstOrDefault(b => b.BedId == BedId); 
        }
    }
}
