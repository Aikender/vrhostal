using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VRHostel.Models;
using VRHostel.VrHostelData;
using VRHostel.VrHostelData.Models;
namespace VRHostel.Controllers
{
    [Produces("application/json")]
    [Route("api/APIActivity")]
    public class APIActivityController : Controller
    {
        private IActivity _IActivity;
        private IActivityReviewMessage _IAmessage;
        public APIActivityController(IActivity iactivity ,IActivityReviewMessage iaMessage)
        {
            _IActivity = iactivity;
            _IAmessage = iaMessage;

        }
        [HttpGet]
        public IEnumerable<Activity> GetAll()
        {
            return _IActivity.getAllActivities();
        }
        [HttpPost]
        public void Create([FromBody] ActivityReviewMessage data)
        {
            var newmessage = new ActivityReviewMessage() {

                ActivityId=data.ActivityId,
                AccountId=data.AccountId,
                MessageCode=data.MessageCode,
                Message=data.Message,
                ActivityScore=data.ActivityScore,
                PostedTime=data.PostedTime,
                PostedDate=data.PostedDate,
            };

            _IAmessage.CreateActivityReviewMessage(newmessage);
        }
    }
}