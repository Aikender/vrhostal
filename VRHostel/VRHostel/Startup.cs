using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using VRHostel.VrHostelData;
using VRHostel.VrhostelServices;

namespace VRHostel
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            
            services.AddDbContext<VrhostelContext>(options => options.UseMySql(Configuration.GetConnectionString("vrhostelconnection")));
            services.AddScoped<IHostel, HostelService>();
            services.AddScoped<IEmployee, EmployeeService>();
            services.AddScoped<IRoom, RoomServices>();
            services.AddScoped<ICustomer,CustomerServices>();
            services.AddScoped<ICustomerAcount, CustomerAcountService>();
            services.AddScoped<IBooking, BookingService>();
            services.AddScoped<IActivity, ActivityService>();
            services.AddScoped<IActivityReviewMessage, ActivityReviewMessageService>();
            services.AddScoped<IHostelReviewM, HostelReviewMService>();
            services.AddScoped<IBookedBeds, BookedBedService>();
            services.AddScoped<IBed, BedServices>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }
            
            app.UseStaticFiles();
            app.UseCors(options => options.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
            
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=index}/{id?}");
            });
        }
    }
}
