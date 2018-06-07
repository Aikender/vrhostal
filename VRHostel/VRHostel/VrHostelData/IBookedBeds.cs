using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VRHostel.VrHostelData.Models;
namespace VRHostel.VrHostelData
{
   public interface IBookedBeds
    {
        IEnumerable<BookedBeds> GetAllBookedBeds();
        IEnumerable<BookedBeds> GetBookedbedsWhitBedId(int bedId);
        void InsertBookedBed(BookedBeds newbookdBeds);
        void DeleteBookedBed(BookedBeds bookedBed);

    }
}
