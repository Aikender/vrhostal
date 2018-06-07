using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VRHostel.VrHostelData.Models;
namespace VRHostel.VrHostelData
{
    public interface IActivity
    {
        IEnumerable<Activity> getAllActivities();
        void CreateActivity(Activity newActivity);
        Activity getActivityById(int activityId);
        void DeleteActivity(Activity acitvity);


    }
}
