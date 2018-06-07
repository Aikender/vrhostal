using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VRHostel.VrHostelData.Models;
using VRHostel.VrHostelData;
namespace VRHostel.VrhostelServices
{
    public class ActivityReviewMessageService:IActivityReviewMessage
    {
        private VrhostelContext _context;
        public ActivityReviewMessageService(VrhostelContext context)
        {
            _context = context;
        }

        public void CreateActivityReviewMessage(ActivityReviewMessage newActivityMessage)
        {
            _context.Add(newActivityMessage);
            _context.SaveChanges();
        }

        public ActivityReviewMessage getActivityById(int actvityMessageId)
        {
          return  getAllActivityMessages().FirstOrDefault(b => b.ActivityId == actvityMessageId);
        }

        public IEnumerable<ActivityReviewMessage> getAllActivityMessages()
        {
            return _context.ActivityReviewMessage;
        }
    }
}
