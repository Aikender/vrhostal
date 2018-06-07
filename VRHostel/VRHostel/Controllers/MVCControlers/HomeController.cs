using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VRHostel.Models;
using VRHostel.VrHostelData;

namespace VRHostel.Controllers
{
    public class HomeController : Controller
    {
        private IHostel _hostel;

        public HomeController (IHostel hostel)
        {
            _hostel = hostel;
        }
        public IActionResult Index(int id)
        {
          
          
            return View();
        }

        public IActionResult Login(int id)
        {


            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
