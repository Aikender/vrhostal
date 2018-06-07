using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VRHostel.VrHostelData;
using VRHostel.VrHostelData.Models;
namespace VRHostel.VrHostelData
{
    public interface IRoom
    {
        IEnumerable<Room> getAll();    //Get All the Rooms
       
        IEnumerable<Bed> getBedsWhitRoomId(int roomId);  //get  beds whit roomid
        Room GetRoomWhitId(int id);                      //get bed whit roomId
        void InsertRoom(Room newRoom);   //insert a room
        void InsertBed(Bed newBed);      //insert a bed
        void DeleteBed(Bed bed);         // delete a bed
        Bed GetBedById(int bedId);        //get bed whit Id
       
    }
}
