using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VRHostel.VrHostelData.Models;

namespace VRHostel.VrHostelData
{
    public class VrhostelContext : DbContext
    {
        public VrhostelContext(DbContextOptions options) : base(options) { }
        public DbSet<Hostel> Hostel { get; set; }
        public DbSet<Employee> Employee { get; set; }
        public DbSet<Room> Room { get; set; }
        public DbSet<Bed> Bed { get; set; }
        public DbSet<Customer> Customer{get;set;}
        public DbSet<CustomerAccount> CustomerAccount { get; set; }
        public DbSet<Booking>Booking { get; set;}
        public DbSet<Activity> Activity { get; set; }
        public DbSet<ActivityReviewMessage> ActivityReviewMessage {get; set;}
        public DbSet<HostelReviewMessage> HostelReviewMessage { get; set; }
        public DbSet<BookedBeds> BookedBeds { get; set; }
        public VrhostelContext() { }
    }
}
