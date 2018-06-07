using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VRHostel.Models;
using VRHostel.VrHostelData;
using VRHostel.VrHostelData.Models;
using VRHostel.Models.MVCViewModels.RoomViewModel;

namespace VRHostel.Controllers
{
    public class RoomsController : Controller
    {
        private IRoom _iroom;
        public RoomsController(IRoom iroom)
        {
            _iroom = iroom;
        }

        public IActionResult Index()
        {
            var dbRoom = _iroom.getAll();
            var rooview = dbRoom.Select(r => new RoomViewData
            {

                RoomId = r.RoomId,
                RoomName = r.RoomName,
                RoomType = r.RoomType,
                RoomNumber=r.RoomNumber,
                RoomPrice=r.RoomPrice,
                Bedlist = _iroom.getBedsWhitRoomId(r.RoomId)
                
            });

            return View(rooview);
        }
          

        public IActionResult CreateRoom(RoomViewData roomViewData)
        {





            return View();
        }

        public IActionResult InsertRoom(RoomViewData roomViewData)
        {


            RoomViewData room = roomViewData;
            Room dbroom = new Room
            {
                RoomName = roomViewData.RoomName,
                RoomType=roomViewData.RoomType,
                RoomNumber=roomViewData.RoomNumber,
                RoomPrice=roomViewData.RoomPrice
               
            };

            _iroom.InsertRoom(dbroom);


            return RedirectToAction("Index");
        }
        public IActionResult AddBed(int roomId)
        {
            var dbRoom = _iroom.GetRoomWhitId(roomId);
            var dbBedList = _iroom.getBedsWhitRoomId(roomId);

            var roomview = new RoomViewData
            {
                RoomId=dbRoom.RoomId,
                RoomName=dbRoom.RoomName,
                RoomType=dbRoom.RoomType,
                Bedlist=dbBedList,

            };



            return View(roomview);
        }
        public IActionResult InsertBed(RoomViewData roomviewdata)
        {

            var dbbed = new Bed
            {
                RoomId =roomviewdata.RoomId,
                BedNumber=roomviewdata.BedNumber,
                BedType = roomviewdata.BedType,
                Bottem_top=roomviewdata.Bottem_top
             


            };

            _iroom.InsertBed(dbbed);

            return RedirectToAction("Index");
        }

        public IActionResult DeleteBed( int bedId)
        {

            var bed = _iroom.GetBedById(bedId);
            _iroom.DeleteBed(bed);
            

            return RedirectToAction("Index"); ;
        }

    }
}