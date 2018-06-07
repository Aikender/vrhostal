using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VRHostel.VrHostelData;
using VRHostel.VrHostelData.Models;
using MySql.Data.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace VRHostel.VrhostelServices
{
    public class RoomServices : IRoom
    {
        private VrhostelContext _context;
        public RoomServices(VrhostelContext context)
        {
            _context = context;
        }

        public void DeleteBed(Bed bed)
        {
            _context.Remove(bed);
            _context.SaveChanges();
        }

        public IEnumerable<Room> getAll()
        {
            return _context.Room;
        }

        public IEnumerable<Bed> getAlLBeds()
        {
            return _context.Bed;
        }

        public Bed GetBedById(int bedId)
        {
            return getAlLBeds().FirstOrDefault(b=> b.BedId == bedId);
        }

        public IEnumerable<Bed> getBedsWhitRoomId(int roomId)
        {

            return getAlLBeds().Where(b => b.RoomId == roomId);
        }

        

        public Room GetRoomWhitId(int id)
        {
            return getAll().FirstOrDefault(b => b.RoomId == id);
        }

        public void InsertBed(Bed newBed)
        {
            _context.Add(newBed);
            _context.SaveChanges();
        }

        public void InsertRoom(Room newRoom)
        {
            _context.Add(newRoom);
            _context.SaveChanges();
        }

        
    }
}
