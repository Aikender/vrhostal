using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VRHostel.VrHostelData.Models;
using VRHostel.VrHostelData;
namespace VRHostel.VrhostelServices
{
    public class BookedBedService :IBookedBeds
    {
     
        private VrhostelContext _context;
        public BookedBedService(VrhostelContext context)
        {
            _context = context;
        }
        public IEnumerable<BookedBeds> GetAllBookedBeds()
        {
            return _context.BookedBeds;
        }
        public void DeleteBookedBed(BookedBeds bookedBed)
        {
            _context.Remove(bookedBed);
            _context.SaveChanges();
        }

     

        public void InsertBookedBed(BookedBeds newbookdBeds)
        {
            _context.Add(newbookdBeds);
            _context.SaveChanges();
        }

        public IEnumerable<BookedBeds> GetBookedbedsWhitBedId(int bedId)
        {
          return GetAllBookedBeds().Where(b => b.BedId == bedId);
        }
    }
}
