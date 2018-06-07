using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VRHostel.VrHostelData.Models;
using VRHostel.VrHostelData;

namespace VRHostel.VrhostelServices
{
    public class EmployeeService :VrHostelData.IEmployee
    {
        private VrhostelContext _context;
        public EmployeeService(VrhostelContext context)
        {
            _context = context;
        }
        public IEnumerable<Employee> getAll()
        {
            return _context.Employee;
        }

        public Employee getbyId(int id)
        {
            return getAll().FirstOrDefault(b => b.EmployeeId == id);
        }
        public void Update(Employee newEmployee)
        {
            _context.Update(newEmployee);
            _context.SaveChanges();
        }
        public void DeleteEmployee(Employee employee)
        {
            _context.Remove(employee);
            _context.SaveChanges();

        }
        public void Insert (Employee newEmployee)
        {
            _context.Add(newEmployee);
            _context.SaveChanges();
        }
    }
}
