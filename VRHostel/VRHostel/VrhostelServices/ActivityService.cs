using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VRHostel.VrHostelData.Models;
using VRHostel.VrHostelData;
namespace VRHostel.VrhostelServices
{
    public class ActivityService :IActivity
    {
        private VrhostelContext _context;
        public ActivityService(VrhostelContext context)
        {
            _context = context;
        }

        public void CreateActivity(Activity newActivity)
        {
            _context.Add(newActivity);
            _context.SaveChanges();
        }

        public void DeleteActivity(Activity activity)
        {
            _context.Remove(activity);
            _context.SaveChanges();
        }

        public Activity getActivityById(int activityId)
        {
            return getAllActivities().FirstOrDefault(a => a.ActivityId == activityId);
        }

        public IEnumerable<Activity> getAllActivities()
        {
            return _context.Activity;
        }
    }
}
