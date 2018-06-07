using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VRHostel.Models;
using VRHostel.VrHostelData;
using VRHostel.VrHostelData.Models;
using VRHostel.Models.MVCViewModels.EmployeeViewModel;

namespace VRHostel.Controllers
{
    public class EmployeeController : Controller
    {
        private IEmployee _employee;
       

       public  EmployeeController(IEmployee employee)
        {
            _employee = employee;
        }
        [HttpGet]
        public IActionResult Index()
        {
            
            var employee = _employee.getAll();
            var viewemployee = employee.Select(p => new EmployeeIndexView
            {
                EmployeeId=p.EmployeeId,
                FirstName = p.FirstName,
                LastName=p.LastName,
                DateOfBirth=p.DateOfBirth,
                Gender=p.Gender,
                PassportNumber=p.PassportNumber,
                Email=p.Email,
                CellPhone=p.CellPhone,
                Country=p.Country,
                State=p.State,
                City=p.City,
                Street=p.Street,
                Number=p.Number,
                Buss=p.Buss,
                Postalcode=p.Postalcode,
                Username=p.Username,
                Password=p.Password,
            });

            return View(viewemployee);
        
        }
        [HttpPost]
        public IActionResult InsertEmployee(EmployeeIndexView employee)
        {
            if (ModelState.IsValid)
            {
                Employee dbemployee = new Employee();
                dbemployee.HostelId = 1;
                dbemployee.FirstName = employee.FirstName;
                dbemployee.LastName = employee.LastName;
                dbemployee.DateOfBirth = employee.DateOfBirth;
                dbemployee.Gender = employee.Gender;
                dbemployee.PassportNumber = employee.PassportNumber;
                dbemployee.Email = employee.Email;
                dbemployee.CellPhone = employee.CellPhone;
                dbemployee.Country = employee.Country;
                dbemployee.State = employee.State;
                dbemployee.City = employee.City;
                dbemployee.Street = employee.Street;
                dbemployee.Buss = employee.Buss;
                dbemployee.Number = employee.Number;
                dbemployee.Postalcode = employee.Postalcode;
                dbemployee.Username = employee.Username;
                dbemployee.Password = employee.Password;

                _employee.Insert(dbemployee);

                return RedirectToAction("Index");
            }
            return View("CreateEmployee");
        }

        public IActionResult editEmployee(int employeeId)
        {
            var employee = _employee.getbyId(employeeId);
            var viewemployee = new EmployeeIndexView
            {
             EmployeeId=employee.EmployeeId,
             FirstName =employee.FirstName,
             LastName=employee.LastName,
             DateOfBirth=employee.DateOfBirth,
             Gender=employee.Gender,
             PassportNumber=employee.PassportNumber,
             Email=employee.Email,
             CellPhone=employee.CellPhone,
             Country=employee.Country,
             State=employee.State,
             City=employee.City,
             Street=employee.Street,
             Number=employee.Number,
             Buss=employee.Buss,
             Postalcode=employee.Postalcode,
             Username=employee.Username,
             Password=employee.Password

            };

            return View(viewemployee);
        }

        public IActionResult UpdateEmployee(EmployeeIndexView employee)
        {
            if (ModelState.IsValid)
            {
                Employee dbemployee = _employee.getbyId(employee.EmployeeId);

                dbemployee.FirstName = employee.FirstName;
                dbemployee.LastName = employee.LastName;
                dbemployee.DateOfBirth = employee.DateOfBirth;
                dbemployee.Gender = employee.Gender;
                dbemployee.PassportNumber = employee.PassportNumber;
                dbemployee.Email = employee.Email;
                dbemployee.CellPhone = employee.CellPhone;
                dbemployee.Country = employee.Country;
                dbemployee.State = employee.State;
                dbemployee.City = employee.City;
                dbemployee.State = employee.State;
                dbemployee.Buss = employee.Buss;
                dbemployee.Postalcode = employee.Postalcode;
                dbemployee.Username = employee.Username;
                dbemployee.Password = employee.Password;
                _employee.Update(dbemployee);
                return RedirectToAction("index");
            }
            return View("editEmployee");
        }

        public IActionResult DeleteEmployee(int employeeId)
        {
            var employee = _employee.getbyId(employeeId);
            _employee.DeleteEmployee(employee);
            return RedirectToAction("Index");
        }

        public IActionResult CreateEmployee()
        {


            return View();
        }

    

    }
}