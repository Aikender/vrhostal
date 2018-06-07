using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VRHostel.VrHostelData.Models;

namespace VRHostel.VrHostelData
{
    public interface IEmployee
    {
        IEnumerable<Employee> getAll();
        Employee getbyId(int id);
        void Update(Employee newEmployee);
        void Insert(Employee newEmployee);
        void DeleteEmployee(Employee employee);
    }
}
