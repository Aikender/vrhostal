using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VRHostel.VrHostelData.Models;

namespace VRHostel.VrHostelData
{
    public interface IHostel
    {
        IEnumerable<Hostel> getAll();     
        Hostel getbyId(int id);
        void UpdateHostel(Hostel hostel);
    }
}
