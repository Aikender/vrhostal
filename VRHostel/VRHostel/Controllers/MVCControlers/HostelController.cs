using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VRHostel.Models.MVCViewModels.HostelviewModels;
using VRHostel.VrHostelData;
using VRHostel.VrHostelData.Models;

namespace VRHostel.Controllers
{
    public class HostelController : Controller
    {
        private IHostel _hostel;

        public HostelController(IHostel hostel)
        {
            _hostel = hostel;
        }
        public IActionResult Index(int id)
        {

            
            var hostel = _hostel.getbyId(1);
            var viewmodel = new HostelIndexView
            {
                HostelId = hostel.HostelId,
                HostelName = hostel.HostelName,
                Country = hostel.Country,
                City = hostel.City,
                Street = hostel.Street,
                Number = hostel.Number,
                PhoneNumber = hostel.PhoneNumber,
                Email = hostel.Email,
                Postalcode=hostel.PostalCode,

            };
            return View(viewmodel);
        }

        public IActionResult UpdateHostel(int id)
        {
            var hostel = _hostel.getbyId(1);
            var HostelViewModel = new HostelIndexView
            {
                HostelId = hostel.HostelId,
                HostelName = hostel.HostelName,
                Country = hostel.Country,
                City = hostel.City,
                Street = hostel.Street,
                Number = hostel.Number,
                PhoneNumber = hostel.PhoneNumber,
                Email = hostel.Email,
                Postalcode=hostel.PostalCode
                

            };
            return View(HostelViewModel);
        }
        [HttpPost]
        public IActionResult Update( HostelIndexView  hostelindexview)
        {
            
            if (ModelState.IsValid)
            {
                Hostel dbhostel = _hostel.getbyId(hostelindexview.HostelId);
                dbhostel.HostelName = hostelindexview.HostelName;
                dbhostel.Country = hostelindexview.Country;
                dbhostel.City = hostelindexview.City;
                dbhostel.PostalCode = hostelindexview.Postalcode;
                dbhostel.Street = hostelindexview.Street;
                dbhostel.Number = dbhostel.Number;
                dbhostel.PhoneNumber = hostelindexview.PhoneNumber;
                dbhostel.Email = hostelindexview.Email;
                _hostel.UpdateHostel(dbhostel);
                return RedirectToAction("Index");
            }
            return RedirectToAction("UpdateHostel");
        }
    }
}