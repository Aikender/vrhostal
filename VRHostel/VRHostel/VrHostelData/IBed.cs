using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VRHostel.VrHostelData.Models;

namespace VRHostel.VrHostelData
{
    public interface IBed
    {
        IEnumerable<Bed> GetBedsWhitId(int roomId);
        IEnumerable<Bed> GetAllBeds();
        Bed GetBedWhitId(int BedId);
    }
}
