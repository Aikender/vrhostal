using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VRHostel.VrHostelData.Models;
namespace VRHostel.VrHostelData
{
    public interface IHostelReviewM
    {
        IEnumerable<HostelReviewMessage> HostelRevMgetAll();
        HostelReviewMessage GetHostelRevMById(int hosteReviewM);
        void Update(HostelReviewMessage hostelRevM);
        void Create(HostelReviewMessage newHostelRevM);
        void Delete(HostelReviewMessage hostelRevM);
    }
}
