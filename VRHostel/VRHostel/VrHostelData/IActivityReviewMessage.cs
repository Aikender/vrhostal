using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VRHostel.VrHostelData.Models;

namespace VRHostel.VrHostelData
{
    public interface IActivityReviewMessage
    {
        IEnumerable<ActivityReviewMessage> getAllActivityMessages();
        void CreateActivityReviewMessage(ActivityReviewMessage newActivityMessage);
        ActivityReviewMessage getActivityById(int actvityMessageId);
    }
}
