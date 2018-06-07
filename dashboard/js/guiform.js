


var RenderViews =function()
{
    var temp={};
    temp.login={}; //stores the username and password to bes sent to the api to check if its valid
    temp.customerId={}; //stores the custommer and the account id when the user has logged in
    temp.postaccinfo={};
    temp.Rooms={};
    temp.booking={};
    temp.bedsPerRoom={};
    temp.bookingdata={};
    temp.CheckTimeDates = {CheckinTimeDates :[] ,CheckoutTimeDates:[]} ;    // to store dates dat have been recieved from the APIBookBed Controller
    temp.BookingTimeDates={CheckinTimeDate:"",CheckoutTimeDate:""}

    temp.ClearData=function(classname,nextview){

        temp.login={};
        temp.customerId={};
        temp.postaccinfo={};
        temp.Rooms={};   // stores room data that have been send from the API controller
        temp.booking={}; //stores from choises that have been made while booking and can be used in other views
        temp.bedsPerRoom={};   //stores data for beds
        temp.bookingdata={};// data to be send to the API
        temp.CheckTimeDates = {CheckinTimeDates :[] ,CheckoutTimeDates:[]} ;    // empyt data after logout
        temp.BookingTimeDates={CheckinTimeDate:"",CheckoutTimeDate:""}    //to store the picked checkin and checkout dates

        temp.ClearView(classname,nextview);

    };
    temp.ClearView=function(classname,nextview,arg){     //removes the elemetns from the view when navigate to a other view
      
        var childs =document.getElementsByClassName(classname);
        while(childs[0])
        {
            childs[0].parentNode.removeChild(childs[0]);
        }
        temp.ViewHandler(nextview);
    };

    temp.ViewHandler=function(nextview){   //navigates to other view based on next view
     
        switch(nextview)
        {
            case 'Home':
               temp.HomeView();
              break;
            case 'Acountdetails':
              temp.AcountDetails();
            break;

            case 'ChoseRoom':
            temp.ChoseRoom();
          break;

          case 'PickBed':
           temp.PickBed();
           break;
          case 'update':
           temp.updateAccount();
           break;

           case 'PickDate':
           temp.PickDate();
           break;

           case 'createaccount':
           temp.CreateAccount();
           break;

           case 'priceandbooking':
           temp.PriceAndPlaceBooking();
           break;
           case 'custommerbookings':
           temp.CustommerBookings();
           break;

           case 'login':
           temp.LoginView();
           break;
        }
    };
    temp.CalculateTotalPrice=function(totaldays,roomprice)  //calculates the total price for the days that have been booked
    {
        var totalprice=totaldays * roomprice;
        return totalprice;
    }
    temp.MakeTimeDates=function (date){ // transforms a stringdate into a time date 
        
        var splitCheckinData=date.split("/");
        var makedate=new Date(splitCheckinData[2],splitCheckinData[1] -1,splitCheckinData[0],);
        var TimeDate =makedate.getTime();
        return TimeDate;

    };
    temp.UpdateAccInformation=function(arg){              //gets data from the textfields to make a post or put request

    
    
        temp.postaccinfo.firstName= document.getElementById("firstname").textvalue;
        temp.postaccinfo.lastName= document.getElementById("lastname").getAttribute("textcontent");

        var day= document.getElementById("day").textvalue;
        var month= document.getElementById("month").textvalue;
        var year= document.getElementById("year").textvalue;
        var DateOfBirth=day+"/"+month+"/"+year;
         
        temp.postaccinfo.DateOfBirth=DateOfBirth;
       
       temp.postaccinfo.gender= document.getElementById("gender").textvalue;
       temp.postaccinfo.email= document.getElementById("email").textvalue;
       temp.postaccinfo.cellPhone= document.getElementById("cellphone").textvalue;
       temp.postaccinfo.passportNumber= document.getElementById("passportnumber").textvalue;
       temp.postaccinfo.country= document.getElementById("country").textvalue;
       temp.postaccinfo.state= document.getElementById("state").textvalue;
       temp.postaccinfo.city= document.getElementById("city").textvalue;
       temp.postaccinfo.street= document.getElementById("street").textvalue;
       temp.postaccinfo.number= document.getElementById("number").textvalue;
       temp.postaccinfo.buss= document.getElementById("buss").textvalue;
       temp.postaccinfo.postcode= document.getElementById("postcode").textvalue;
       temp.postaccinfo.password= document.getElementById("username").textvalue;
       temp.postaccinfo.username= document.getElementById("password").textvalue;
   
  
        
       var data=JSON.stringify(temp.postaccinfo);
 

       if(arg=="createaccount")
       {
        http("http://localhost:59446/api/APICustomer").post(data);  
       }
       else
       http("http://localhost:59446/api/APICustomer/"+temp.account.customerId).put(data);  
    };

    temp.updateAccount=function(){  //makes the text en input fields and shows information of the account 

  
    http("http://localhost:59446/api/APICustomer/"+ temp.account.customerId).get().then(function(result){
         
        var data=JSON.parse(result);
      temp.account=data;
          
            var FirstNameText=document.createElement("a-text");
            FirstNameText.className="updateaccount";
            
            FirstNameText.setAttribute("scale", "0.2 0.2 0.2");
            FirstNameText.setAttribute("rotation","0 180 0");
            FirstNameText.setAttribute("color", "white");
            FirstNameText.setAttribute("value", "First name");
            FirstNameText.setAttribute("position","7 1.9 -3.227");
        
            var LastNameText=document.createElement("a-text");
            LastNameText.className="updateaccount";
            LastNameText.setAttribute("scale", "0.2 0.2 0.2");
            LastNameText.setAttribute("rotation","0 180 0");
            LastNameText.setAttribute("color", "white");
            LastNameText.setAttribute("value", "LastName");
            LastNameText.setAttribute("position","7 1.8 -3.227");
        
           
            
            var GenderText=document.createElement("a-text");
            GenderText.className="updateaccount";
            GenderText.setAttribute("scale", "0.2 0.2 0.2");
            GenderText.setAttribute("rotation","0 180 0");
            GenderText .setAttribute("color", "white");
            GenderText .setAttribute("value", "Gender");
            GenderText.setAttribute("position","7 1.6 -3.227");
        
            var EmailText=document.createElement("a-text");
            EmailText.className="updateaccount";
            EmailText.setAttribute("scale", "0.2 0.2 0.2");
            EmailText.setAttribute("rotation","0 180 0");
            EmailText .setAttribute("color", "white");
            EmailText .setAttribute("value", "Email");
            EmailText.setAttribute("position","7 1.5 -3.227");
        
            var CellPhoneText=document.createElement("a-text");
            CellPhoneText.className="updateaccount";
            CellPhoneText.setAttribute("scale", "0.2 0.2 0.2");
            CellPhoneText.setAttribute("rotation","0 180 0");
            CellPhoneText .setAttribute("color", "white");
            CellPhoneText .setAttribute("value", "Phone");
            CellPhoneText.setAttribute("position","7 1.4 -3.227");
        
            var PassportNumberText=document.createElement("a-text");
            PassportNumberText.className="updateaccount";
            PassportNumberText.setAttribute("scale", "0.2 0.2 0.2");
            PassportNumberText.setAttribute("rotation","0 180 0");
            PassportNumberText .setAttribute("color", "white");
            PassportNumberText  .setAttribute("value", "Passport Number");
            PassportNumberText .setAttribute("position","7 1.3 -3.227");
        
            var CountryText=document.createElement("a-text");
            CountryText.className="updateaccount";
            CountryText.setAttribute("scale", "0.2 0.2 0.2");
            CountryText.setAttribute("rotation","0 180 0");
            CountryText.setAttribute("color", "white");
            CountryText.setAttribute("value", "Country");
            CountryText.setAttribute("position","7 1.2 -3.227");
        
            var StateText=document.createElement("a-text");
            StateText.className="updateaccount";
            StateText.setAttribute("scale", "0.2 0.2 0.2");
            StateText.setAttribute("rotation","0 180 0");
            StateText.setAttribute("color", "white");
            StateText.setAttribute("value", "State");
            StateText.setAttribute("position","6 1.9 -3.227");
        
            
            var CityText=document.createElement("a-text");
            CityText.className="updateaccount";
            CityText.setAttribute("scale", "0.2 0.2 0.2");
            CityText.setAttribute("rotation","0 180 0");
            CityText.setAttribute("color", "white");
            CityText.setAttribute("value", "City");
            CityText.setAttribute("position","6 1.8 -3.227");
        
              
            var StreetText=document.createElement("a-text");
            StreetText.className="updateaccount";
            StreetText.setAttribute("scale", "0.2 0.2 0.2");
            StreetText.setAttribute("rotation","0 180 0");
            StreetText.setAttribute("color", "white");
            StreetText.setAttribute("value", "Street");
            StreetText.setAttribute("position","6 1.7 -3.227");
        
                
            var HouseNumberText=document.createElement("a-text");
            HouseNumberText.className="updateaccount";
            HouseNumberText.setAttribute("scale", "0.2 0.2 0.2");
            HouseNumberText.setAttribute("rotation","0 180 0");
            HouseNumberText.setAttribute("color", "white");
            HouseNumberText.setAttribute("value", "House Number");
            HouseNumberText.setAttribute("position","6 1.6 -3.227");
        
            var BussNumberText=document.createElement("a-text");
            BussNumberText.className="updateaccount";
            BussNumberText.setAttribute("scale", "0.2 0.2 0.2");
            BussNumberText.setAttribute("rotation","0 180 0");
            BussNumberText.setAttribute("color", "white");
            BussNumberText.setAttribute("value", "Buss Nr.");
            BussNumberText.setAttribute("position","6 1.5 -3.227");
        
            var PostCodeText=document.createElement("a-text");
            PostCodeText.className="updateaccount";
            PostCodeText.setAttribute("scale", "0.2 0.2 0.2");
            PostCodeText.setAttribute("rotation","0 180 0");
            PostCodeText.setAttribute("color", "white");
            PostCodeText.setAttribute("value", "Postcode");
            PostCodeText.setAttribute("position","6 1.4 -3.227");
        
        
            var FirstName =document.createElement("input-text");
            FirstName.className="updateaccount";
            FirstName.id="firstname";
            FirstName.setAttribute("gkeyboardtarget","qi");
            FirstName.setAttribute("textfieldcolor","blue");
            FirstName.setAttribute("bordercolor","red");
            FirstName.setAttribute("rotation","0 180 0");
            FirstName.setAttribute("borderscale","0.02 0.02 0.02");
            FirstName.setAttribute("borderwidth","20");
            FirstName.setAttribute("textcontent",temp.account.firstName);
            FirstName.setAttribute("position","6.5 1.9 -3.227");
            
            var LastName =document.createElement("input-text");
            LastName.className="updateaccount";
            LastName.id="lastname";
            LastName.setAttribute("gkeyboardtarget","qi");
            LastName.setAttribute("textfieldcolor","blue");
            LastName.setAttribute("bordercolor","red");
            LastName.setAttribute("borderscale","0.02 0.02 0.02");
            LastName.setAttribute("rotation","0 180 0");
            LastName.setAttribute("borderwidth","20");
            LastName.setAttribute("textcontent",temp.account.lastName);
            LastName.setAttribute("position","6.5 1.8 -3.227");
           
         
            var Gender=document.createElement("input-text");
            Gender.className="updateaccount";
            Gender.id="gender";
            Gender.setAttribute("gkeyboardtarget","qi");
            Gender.setAttribute("textfieldcolor","blue");
            Gender.setAttribute("bordercolor","red");
            Gender.setAttribute("rotation","0 180 0");
            Gender.setAttribute("borderscale","0.02 0.02 0.02");
            Gender.setAttribute("borderwidth","20");
            Gender.setAttribute("textcontent",temp.account.gender);
            Gender.setAttribute("position","6.5 1.6 -3.227");
           
            var Email=document.createElement("input-text");
            Email.className="updateaccount";
            Email.id="email";
            Email.setAttribute("gkeyboardtarget","qi");
            Email.setAttribute("textfieldcolor","blue");
            Email.setAttribute("bordercolor","red");
            Email.setAttribute("rotation","0 180 0");
            Email.setAttribute("borderscale","0.02 0.02 0.02");
            Email.setAttribute("borderwidth","20");
            Email.setAttribute("textcontent",temp.account.email);
            Email.setAttribute("position","6.5 1.5 -3.227");
        
            var CellPhone=document.createElement("input-text");
            CellPhone.className="updateaccount";
            CellPhone.id="cellphone";
            CellPhone.setAttribute("gkeyboardtarget","qi");
            CellPhone.setAttribute("textfieldcolor","blue");
            CellPhone.setAttribute("bordercolor","red");
            CellPhone.setAttribute("rotation","0 180 0");
            CellPhone.setAttribute("borderscale","0.02 0.02 0.02");
            CellPhone.setAttribute("borderwidth","20");
            CellPhone.setAttribute("textcontent",temp.account.cellPhone);
            CellPhone.setAttribute("position","6.5 1.4 -3.227");
        
            var PassPortNumber=document.createElement("input-text");
            PassPortNumber.className="updateaccount";
            PassPortNumber.id="passportnumber";
            PassPortNumber.setAttribute("gkeyboardtarget","qi");
            PassPortNumber.setAttribute("textfieldcolor","blue");
            PassPortNumber.setAttribute("bordercolor","red");
            PassPortNumber.setAttribute("rotation","0 180 0");
            PassPortNumber.setAttribute("borderscale","0.02 0.02 0.02");
            PassPortNumber.setAttribute("borderwidth","20");
            PassPortNumber.setAttribute("textcontent",temp.account.passportNumber);
            PassPortNumber.setAttribute("position","6.4 1.3 -3.227");
        
            var Country=document.createElement("input-text");
            Country.className="updateaccount";
            Country.id="country";
            Country.setAttribute("gkeyboardtarget","qi");
            Country.setAttribute("textfieldcolor","blue");
            Country.setAttribute("bordercolor","red");
            Country.setAttribute("borderscale","0.02 0.02 0.02");
            Country.setAttribute("rotation","0 180 0");
            Country.setAttribute("borderwidth","20");
            Country.setAttribute("textcontent",temp.account.country);
            Country.setAttribute("position","6.4 1.2 -3.227");
           
            var State=document.createElement("input-text");
            State.className="updateaccount";
            State.id="state";
            State.setAttribute("gkeyboardtarget","qi");
            State.setAttribute("textfieldcolor","blue");
            State.setAttribute("bordercolor","red");
            State.setAttribute("rotation","0 180 0");
            State.setAttribute("borderscale","0.02 0.02 0.02");
            State.setAttribute("borderwidth","20");
            State.setAttribute("textcontent",temp.account.state);
            State.setAttribute("position","5.4 1.9 -3.227");
        
            var City=document.createElement("input-text");
            City.className="updateaccount";
            City.id="city";
            City.setAttribute("gkeyboardtarget","qi");
            City.setAttribute("textfieldcolor","blue");
            City.setAttribute("bordercolor","red");
            City.setAttribute("rotation","0 180 0");
            City.setAttribute("borderscale","0.02 0.02 0.02");
            City.setAttribute("borderwidth","20");
            City.setAttribute("textcontent",temp.account.city);
            City.setAttribute("position","5.4 1.8 -3.227");
        
            var Street=document.createElement("input-text");
            Street.className="updateaccount";
            Street.id="street";
            Street.setAttribute("gkeyboardtarget","qi");
            Street.setAttribute("textfieldcolor","blue");
            Street.setAttribute("bordercolor","red");
            Street.setAttribute("borderscale","0.02 0.02 0.02");
            Street.setAttribute("rotation","0 180 0");
            Street.setAttribute("borderwidth","20");
            Street.setAttribute("textcontent",temp.account.street);
            Street.setAttribute("position","5.4 1.7 -3.227");
        
            var HouseNumber=document.createElement("input-text");
            HouseNumber.className="updateaccount";
            HouseNumber.id="number";
            HouseNumber.setAttribute("gkeyboardtarget","qi");
            HouseNumber.setAttribute("textfieldcolor","blue");
            HouseNumber.setAttribute("bordercolor","red");
            HouseNumber.setAttribute("rotation","0 180 0");
            HouseNumber.setAttribute("borderscale","0.02 0.02 0.02");
            HouseNumber.setAttribute("borderwidth","20");
            HouseNumber.setAttribute("textcontent",temp.account.number);
            HouseNumber.setAttribute("position","5.4 1.6 -3.227");
        
            var Buss=document.createElement("input-text");
            Buss.className="updateaccount";
            Buss.id="buss";
            Buss.setAttribute("gkeyboardtarget","qi");
            Buss.setAttribute("textfieldcolor","blue");
            Buss.setAttribute("bordercolor","red");
            Buss.setAttribute("rotation","0 180 0");
            Buss.setAttribute("borderscale","0.02 0.02 0.02");
            Buss.setAttribute("borderwidth","20");
            Buss.setAttribute("textcontent",temp.account.buss);
            Buss.setAttribute("position","5.4 1.5 -3.227");
        
            var PostCode=document.createElement("input-text");
            PostCode.className="updateaccount";
            PostCode.id="postcode";
            PostCode.setAttribute("gkeyboardtarget","qi");
            PostCode.setAttribute("textfieldcolor","blue");
            PostCode.setAttribute("bordercolor","red");
            PostCode.setAttribute("rotation","0 180 0");
            PostCode.setAttribute("borderscale","0.02 0.02 0.02");
            PostCode.setAttribute("borderwidth","20");
            PostCode.setAttribute("textcontent",temp.account.postcode);
            PostCode.setAttribute("position","5.4 1.4 -3.227");

            var DatOfBirthText=document.createElement("a-text");
            DatOfBirthText.className="updateaccount";
            DatOfBirthText.setAttribute("scale", "0.2 0.2 0.2");
            DatOfBirthText.setAttribute("rotation","0 180 0");
            DatOfBirthText .setAttribute("color", "white");
            DatOfBirthText .setAttribute("value", "Birthday");
            DatOfBirthText.setAttribute("position","6 1.3 -3.227");

           


            var Day=document.createElement("input-text");
            Day.className="updateaccount";
            Day.id="day";
            Day.setAttribute("gkeyboardtarget","qi");
            Day.setAttribute("textfieldcolor","blue");
            Day.setAttribute("bordercolor","red");
            Day.setAttribute("rotation","0 180 0");
            Day.setAttribute("borderscale","0.02 0.02 0.02");
            Day.setAttribute("borderwidth","2");
            Day.setAttribute("textcontent","15");
            Day.setAttribute("position","5.7 1.3 -3.227");

            var Month=document.createElement("input-text");
            Month.className="updateaccount";
            Month.id="month";
            Month.setAttribute("gkeyboardtarget","qi");
            Month.setAttribute("textfieldcolor","blue");
            Month.setAttribute("bordercolor","red");
            Month.setAttribute("rotation","0 180 0");
            Month.setAttribute("borderscale","0.02 0.02 0.02");
            Month.setAttribute("borderwidth","2");
            Month.setAttribute("textcontent","01");
            Month.setAttribute("position","5.65 1.3 -3.227");

            var Year=document.createElement("input-text");
            Year.className="updateaccount";
            Year.id="year";
            Year.setAttribute("gkeyboardtarget","qi");
            Year.setAttribute("textfieldcolor","green");
            Year.setAttribute("bordercolor","red");
            Year.setAttribute("rotation","0 180 0");
            Year.setAttribute("borderscale","0.02 0.02 0.02");
            Year.setAttribute("borderwidth","4");
            Year.setAttribute("textcontent","1980");
            Year.setAttribute("position","5.55 1.3 -3.227");

            var DateInfoLabel=document.createElement("a-text");
            DateInfoLabel.className="updateaccount";
            DateInfoLabel.setAttribute("scale", "0.2 0.2 0.2");
            DateInfoLabel.setAttribute("rotation","0 180 0");
            DateInfoLabel .setAttribute("color", "white");
            DateInfoLabel .setAttribute("value", "(Day/Month/Year)");
            DateInfoLabel.setAttribute("position","5.5 1.3 -3.227");
           

            var UpdateButton =document.createElement("a-plane");
            UpdateButton.className="updateaccount";
           
            UpdateButton.setAttribute("width","11");
            UpdateButton.setAttribute("height","2");
            UpdateButton.setAttribute("scale","0.05 0.05 0.05");
            UpdateButton.setAttribute("rotation","0 180 0");
            UpdateButton.setAttribute("color","darkgreen");
            UpdateButton.setAttribute("position","5.92 1 -3.227");
            UpdateButton.addEventListener("click",function(){
                
             temp.UpdateAccInformation();
            });

            var UpdateLabel=document.createElement("a-text");
            UpdateLabel.className="updateaccount";
            UpdateLabel.setAttribute("scale", "0.2 0.2 0.2");
            UpdateLabel.setAttribute("rotation","0 180 0");
            UpdateLabel.setAttribute("color", "white");
            UpdateLabel.setAttribute("value", "Change Information");
            UpdateLabel.setAttribute("position","6.12 1 -3.227");
               

          
            var HomeLabel=document.createElement("a-text");
            HomeLabel.className="updateaccount";
            HomeLabel.setAttribute("scale", "0.2 0.2 0.2");
            HomeLabel.setAttribute("rotation","0 180 0");
            HomeLabel.setAttribute("color", "white");
            HomeLabel.setAttribute("value", "Home");
            HomeLabel.setAttribute("position","5.4 2.1 -3.227");
               
           
            var LogoutLabel=document.createElement("a-text");
            LogoutLabel.className="updateaccount";
            LogoutLabel.setAttribute("scale", "0.2 0.2 0.2");
            LogoutLabel.setAttribute("rotation","0 180 0");
            LogoutLabel.setAttribute("color", "white");
            LogoutLabel.setAttribute("value", "Log Out");
            LogoutLabel.setAttribute("position","5.12 2.1 -3.227");

            var HomeButton =document.createElement("a-plane");
            HomeButton.className="updateaccount";
            HomeButton.setAttribute("width","3");
            HomeButton.setAttribute("height","2");
            HomeButton.setAttribute("scale","0.05 0.05 0.05");
            HomeButton.setAttribute("rotation","0 180 0");
            HomeButton.setAttribute("color","lightblue");
            HomeButton.setAttribute("position","5.33 2.1 -3.227");
            HomeButton.addEventListener("click",function(){
                 var classname="updateaccount";
                 var nextview="Home"
                temp.ClearView(classname,nextview);
            });

            var logoutButton =document.createElement("a-plane");
            logoutButton.className="updateaccount";
            logoutButton.setAttribute("width","3");
            logoutButton.setAttribute("height","2");
            logoutButton.setAttribute("scale","0.05 0.05 0.05");
            logoutButton.setAttribute("rotation","0 180 0");
            logoutButton.setAttribute("color","lightblue");
            logoutButton.setAttribute("position","5.040 2.1 -3.227");
            logoutButton.addEventListener("click",function(){
                 var classname="updateaccount";
                 var nextview="login"
                temp.ClearData(classname,nextview);
            });
        
        
            document.getElementById("ascene").appendChild(FirstName);
            document.getElementById("ascene").appendChild(LastName);
            document.getElementById("ascene").appendChild(Day);
            document.getElementById("ascene").appendChild(Month);
            document.getElementById("ascene").appendChild(Year);
            document.getElementById("ascene").appendChild(DateInfoLabel);
            document.getElementById("ascene").appendChild(Gender);
            document.getElementById("ascene").appendChild(Email);
            document.getElementById("ascene").appendChild(CellPhone);
            document.getElementById("ascene").appendChild(PassPortNumber);
            document.getElementById("ascene").appendChild(Country);
            document.getElementById("ascene").appendChild(State);
            document.getElementById("ascene").appendChild(Street);
            document.getElementById("ascene").appendChild(City);
            document.getElementById("ascene").appendChild(HouseNumber);
            document.getElementById("ascene").appendChild(Buss);
            document.getElementById("ascene").appendChild(PostCode);
            document.getElementById("ascene").appendChild(FirstNameText);
            document.getElementById("ascene").appendChild(LastNameText);
            document.getElementById("ascene").appendChild(DatOfBirthText);
            document.getElementById("ascene").appendChild(GenderText);
            document.getElementById("ascene").appendChild(EmailText);
            document.getElementById("ascene").appendChild(CellPhoneText);
            document.getElementById("ascene").appendChild(PassportNumberText);
            document.getElementById("ascene").appendChild(CountryText);
            document.getElementById("ascene").appendChild(StateText);
            document.getElementById("ascene").appendChild(CityText);
            document.getElementById("ascene").appendChild(StreetText);
            document.getElementById("ascene").appendChild(HouseNumberText);
            document.getElementById("ascene").appendChild(BussNumberText);
            document.getElementById("ascene").appendChild(PostCodeText);
            document.getElementById("ascene").appendChild(UpdateButton);
            document.getElementById("ascene").appendChild(UpdateLabel);
            document.getElementById("ascene").appendChild(HomeLabel);
            document.getElementById("ascene").appendChild(HomeButton);
            document.getElementById("ascene").appendChild(LogoutLabel);
            document.getElementById("ascene").appendChild(logoutButton);
           
           
        }); 
    };
    // view to make a chose to view account make a booking and to show mad bookings
    temp.HomeView=function(){
        
         
        var AcountLabel=document.createElement("a-text");
        AcountLabel.className="Home";
        AcountLabel.setAttribute("scale", "0.2 0.2 0.2");
        AcountLabel.setAttribute("rotation","0 180 0");
        AcountLabel.setAttribute("color", "white");
        AcountLabel.setAttribute("value", "Account Information");
        AcountLabel.setAttribute("position","6.24 1.8 -3.227");

        var BookingLabel=document.createElement("a-text");
        BookingLabel.className="Home";
        BookingLabel.setAttribute("scale", "0.2 0.2 0.2");
        BookingLabel.setAttribute("rotation","0 180 0");
        BookingLabel.setAttribute("color", "white");
        BookingLabel.setAttribute("value", "Place A Booking");
        BookingLabel.setAttribute("position","6.24 1.6 -3.227");

        var custbookingsLabel=document.createElement("a-text");
        custbookingsLabel.className="Home";
        custbookingsLabel.setAttribute("scale", "0.2 0.2 0.2");
        custbookingsLabel.setAttribute("rotation","0 180 0");
        custbookingsLabel.setAttribute("color", "white");
        custbookingsLabel.setAttribute("value", "Show Placed bookings");
        custbookingsLabel.setAttribute("position","6.24 1.4 -3.227");

        var AccountButton =document.createElement("a-plane");
        AccountButton.className="Home";
        AccountButton.setAttribute("width","11");
        AccountButton.setAttribute("height","2");
        AccountButton.setAttribute("scale","0.05 0.05 0.05");
        AccountButton.setAttribute("rotation","0 180 0");
        AccountButton.setAttribute("color","darkgreen");
        AccountButton.setAttribute("position","6.05 1.8 -3.227");
        AccountButton.addEventListener("click",function(){

            var classname="Home"
            var nextview="Acountdetails"
          temp.ClearView(classname,nextview);
           
        });

        var BookingButton =document.createElement("a-plane");
        BookingButton.className="Home";
        BookingButton.setAttribute("width","11");
        BookingButton.setAttribute("height","2");
        BookingButton.setAttribute("scale","0.05 0.05 0.05");
        BookingButton.setAttribute("rotation","0 180 0");
        BookingButton.setAttribute("color","darkgreen");
        BookingButton.setAttribute("position","6.05 1.6 -3.227");
        BookingButton.addEventListener("click",function(){

            var classname="Home"
            var nextview="ChoseRoom"
          temp.ClearView(classname,nextview);
           
        });

        var CustBookingButton =document.createElement("a-plane");
        CustBookingButton.className="Home";
        CustBookingButton.setAttribute("width","11");
        CustBookingButton.setAttribute("height","2");
        CustBookingButton.setAttribute("scale","0.05 0.05 0.05");
        CustBookingButton.setAttribute("rotation","0 180 0");
        CustBookingButton.setAttribute("color","darkgreen");
        CustBookingButton.setAttribute("position","6.05 1.4 -3.227");
        CustBookingButton.addEventListener("click",function(){

            var classname="Home"
            var nextview="custommerbookings"
          temp.ClearView(classname,nextview);
           
        });
        document.getElementById("ascene").appendChild(AcountLabel);
        document.getElementById("ascene").appendChild(AccountButton);
        document.getElementById("ascene").appendChild(BookingLabel);
        document.getElementById("ascene").appendChild(BookingButton);
        document.getElementById("ascene").appendChild(custbookingsLabel);
        document.getElementById("ascene").appendChild(CustBookingButton);

    };
    temp.AcountDetails=function(){
       
 
        http("http://localhost:59446/api/APICustomer/"+temp.customerId.custId).get().then(function(result){
         
            var data=JSON.parse(result);
          temp.account=data;
       
                var FirstNameText=document.createElement("a-text");
                FirstNameText.className="account";
                FirstNameText.setAttribute("scale", "0.2 0.2 0.2");
                FirstNameText.setAttribute("rotation","0 180 0");
                FirstNameText.setAttribute("color", "white");
                FirstNameText.setAttribute("value", "First name");
                FirstNameText.setAttribute("position","7 1.9 -3.227");
            
                var LastNameText=document.createElement("a-text");
                LastNameText.className="account";
                LastNameText.setAttribute("scale", "0.2 0.2 0.2");
                LastNameText.setAttribute("rotation","0 180 0");
                LastNameText.setAttribute("color", "white");
                LastNameText.setAttribute("value", "LastName");
                LastNameText.setAttribute("position","7 1.8 -3.227");
            
                var DatOfBirthText=document.createElement("a-text");
                DatOfBirthText.className="account";
                DatOfBirthText.setAttribute("scale", "0.2 0.2 0.2");
                DatOfBirthText.setAttribute("rotation","0 180 0");
                DatOfBirthText .setAttribute("color", "white");
                DatOfBirthText .setAttribute("value", "Birthday");
                DatOfBirthText.setAttribute("position","7 1.7 -3.227");
                
                var GenderText=document.createElement("a-text");
                GenderText.className="account";
                GenderText.setAttribute("scale", "0.2 0.2 0.2");
                GenderText.setAttribute("rotation","0 180 0");
                GenderText .setAttribute("color", "white");
                GenderText .setAttribute("value", "Gender");
                GenderText.setAttribute("position","7 1.6 -3.227");
            
                var EmailText=document.createElement("a-text");
                EmailText.className="account";
                EmailText.setAttribute("scale", "0.2 0.2 0.2");
                EmailText.setAttribute("rotation","0 180 0");
                EmailText .setAttribute("color", "white");
                EmailText .setAttribute("value", "Email");
                EmailText.setAttribute("position","7 1.5 -3.227");
            
                var CellPhoneText=document.createElement("a-text");
                CellPhoneText.className="account";
                CellPhoneText.setAttribute("scale", "0.2 0.2 0.2");
                CellPhoneText.setAttribute("rotation","0 180 0");
                CellPhoneText .setAttribute("color", "white");
                CellPhoneText .setAttribute("value", "Phone");
                CellPhoneText.setAttribute("position","7 1.4 -3.227");
            
                var PassportNumberText=document.createElement("a-text");
                PassportNumberText.className="account";
                PassportNumberText.setAttribute("scale", "0.2 0.2 0.2");
                PassportNumberText.setAttribute("rotation","0 180 0");
                PassportNumberText .setAttribute("color", "white");
                PassportNumberText  .setAttribute("value", "Passport Number");
                PassportNumberText .setAttribute("position","7 1.3 -3.227");
            
                var CountryText=document.createElement("a-text");
                CountryText.className="account";
                CountryText.setAttribute("scale", "0.2 0.2 0.2");
                CountryText.setAttribute("rotation","0 180 0");
                CountryText.setAttribute("color", "white");
                CountryText.setAttribute("value", "Country");
                CountryText.setAttribute("position","7 1.2 -3.227");
            
                var StateText=document.createElement("a-text");
                StateText.className="account";
                StateText.setAttribute("scale", "0.2 0.2 0.2");
                StateText.setAttribute("rotation","0 180 0");
                StateText.setAttribute("color", "white");
                StateText.setAttribute("value", "State");
                StateText.setAttribute("position","6 1.9 -3.227");
            
                
                var CityText=document.createElement("a-text");
                CityText.className="account";
                CityText.setAttribute("scale", "0.2 0.2 0.2");
                CityText.setAttribute("rotation","0 180 0");
                CityText.setAttribute("color", "white");
                CityText.setAttribute("value", "City");
                CityText.setAttribute("position","6 1.8 -3.227");
            
                  
                var StreetText=document.createElement("a-text");
                StreetText.className="account";
                StreetText.setAttribute("scale", "0.2 0.2 0.2");
                StreetText.setAttribute("rotation","0 180 0");
                StreetText.setAttribute("color", "white");
                StreetText.setAttribute("value", "Street");
                StreetText.setAttribute("position","6 1.7 -3.227");
            
                    
                var HouseNumberText=document.createElement("a-text");
                HouseNumberText.className="account";
                HouseNumberText.setAttribute("scale", "0.2 0.2 0.2");
                HouseNumberText.setAttribute("rotation","0 180 0");
                HouseNumberText.setAttribute("color", "white");
                HouseNumberText.setAttribute("value", "House Number");
                HouseNumberText.setAttribute("position","6 1.6 -3.227");
            
                var BussNumberText=document.createElement("a-text");
                BussNumberText.className="account";
                BussNumberText.setAttribute("scale", "0.2 0.2 0.2");
                BussNumberText.setAttribute("rotation","0 180 0");
                BussNumberText.setAttribute("color", "white");
                BussNumberText.setAttribute("value", "Buss Nr.");
                BussNumberText.setAttribute("position","6 1.5 -3.227");
            
                var PostCodeText=document.createElement("a-text");
                PostCodeText.className="account";
                PostCodeText.setAttribute("scale", "0.2 0.2 0.2");
                PostCodeText.setAttribute("rotation","0 180 0");
                PostCodeText.setAttribute("color", "white");
                PostCodeText.setAttribute("value", "Postcode");
                PostCodeText.setAttribute("position","6 1.4 -3.227");
            
            
                var FirstName =document.createElement("input-text");
                FirstName.className="account";
                FirstName.setAttribute("textfieldcolor","blue");
                FirstName.setAttribute("bordercolor","red");
                FirstName.setAttribute("rotation","0 180 0");
                FirstName.setAttribute("borderscale","0.02 0.02 0.02");
                FirstName.setAttribute("borderwidth","20");
                FirstName.setAttribute("textcontent",temp.account.firstName);
                FirstName.setAttribute("position","6.5 1.9 -3.227");
                
                var LastName =document.createElement("input-text");
                LastName.className="account";
                LastName.setAttribute("textfieldcolor","blue");
                LastName.setAttribute("bordercolor","red");
                LastName.setAttribute("borderscale","0.02 0.02 0.02");
                LastName.setAttribute("rotation","0 180 0");
                LastName.setAttribute("borderwidth","20");
                LastName.setAttribute("textcontent",temp.account.lastName);
                LastName.setAttribute("position","6.5 1.8 -3.227");
               
                var DateOfBirth=document.createElement("input-text");
                DateOfBirth.className="account";
                DateOfBirth.setAttribute("textfieldcolor","blue");
                DateOfBirth.setAttribute("bordercolor","red");
                DateOfBirth.setAttribute("rotation","0 180 0");
                DateOfBirth.setAttribute("borderscale","0.02 0.02 0.02");
                DateOfBirth.setAttribute("borderwidth","20");
                DateOfBirth.setAttribute("textcontent",temp.account.dateOfBirth);
                DateOfBirth.setAttribute("position","6.5 1.7 -3.227");
               
                var Gender=document.createElement("input-text");
                Gender.className="account";
                Gender.setAttribute("textfieldcolor","blue");
                Gender.setAttribute("bordercolor","red");
                Gender.setAttribute("rotation","0 180 0");
                Gender.setAttribute("borderscale","0.02 0.02 0.02");
                Gender.setAttribute("borderwidth","20");
                Gender.setAttribute("textcontent",temp.account.gender);
                Gender.setAttribute("position","6.5 1.6 -3.227");
               
                var Email=document.createElement("input-text");
                Email.className="account";
                Email.setAttribute("textfieldcolor","blue");
                Email.setAttribute("bordercolor","red");
                Email.setAttribute("rotation","0 180 0");
                Email.setAttribute("borderscale","0.02 0.02 0.02");
                Email.setAttribute("borderwidth","20");
                Email.setAttribute("textcontent",temp.account.email);
                Email.setAttribute("position","6.5 1.5 -3.227");
            
                var CellPhone=document.createElement("input-text");
                CellPhone.className="account";
                CellPhone.setAttribute("textfieldcolor","blue");
                CellPhone.setAttribute("bordercolor","red");
                CellPhone.setAttribute("rotation","0 180 0");
                CellPhone.setAttribute("borderscale","0.02 0.02 0.02");
                CellPhone.setAttribute("borderwidth","20");
                CellPhone.setAttribute("textcontent",temp.account.cellPhone);
                CellPhone.setAttribute("position","6.5 1.4 -3.227");
            
                var PassPortNumber=document.createElement("input-text");
                PassPortNumber.className="account";
                PassPortNumber.setAttribute("textfieldcolor","blue");
                PassPortNumber.setAttribute("bordercolor","red");
                PassPortNumber.setAttribute("rotation","0 180 0");
                PassPortNumber.setAttribute("borderscale","0.02 0.02 0.02");
                PassPortNumber.setAttribute("borderwidth","20");
                PassPortNumber.setAttribute("textcontent",temp.account.passportNumber);
                PassPortNumber.setAttribute("position","6.4 1.3 -3.227");
            
                var Country=document.createElement("input-text");
                Country.className="account";
                Country.setAttribute("textfieldcolor","blue");
                Country.setAttribute("bordercolor","red");
                Country.setAttribute("borderscale","0.02 0.02 0.02");
                Country.setAttribute("rotation","0 180 0");
                Country.setAttribute("borderwidth","20");
                Country.setAttribute("textcontent",temp.account.country);
                Country.setAttribute("position","6.4 1.2 -3.227");
               
                var State=document.createElement("input-text");
                State.className="account";
                State.setAttribute("textfieldcolor","blue");
                State.setAttribute("bordercolor","red");
                State.setAttribute("rotation","0 180 0");
                State.setAttribute("borderscale","0.02 0.02 0.02");
                State.setAttribute("borderwidth","20");
                State.setAttribute("textcontent",temp.account.state);
                State.setAttribute("position","5.4 1.9 -3.227");
            
                var City=document.createElement("input-text");
                City.className="account";
                City.setAttribute("textfieldcolor","blue");
                City.setAttribute("bordercolor","red");
                City.setAttribute("rotation","0 180 0");
                City.setAttribute("borderscale","0.02 0.02 0.02");
                City.setAttribute("borderwidth","20");
                City.setAttribute("textcontent",temp.account.city);
                City.setAttribute("position","5.4 1.8 -3.227");
            
                var Street=document.createElement("input-text");
                Street.className="account";
                Street.setAttribute("textfieldcolor","blue");
                Street.setAttribute("bordercolor","red");
                Street.setAttribute("borderscale","0.02 0.02 0.02");
                Street.setAttribute("rotation","0 180 0");
                Street.setAttribute("borderwidth","20");
                Street.setAttribute("textcontent",temp.account.street);
                Street.setAttribute("position","5.4 1.7 -3.227");
            
                var HouseNumber=document.createElement("input-text");
                HouseNumber.className="account";
                HouseNumber.setAttribute("textfieldcolor","blue");
                HouseNumber.setAttribute("bordercolor","red");
                HouseNumber.setAttribute("rotation","0 180 0");
                HouseNumber.setAttribute("borderscale","0.02 0.02 0.02");
                HouseNumber.setAttribute("borderwidth","20");
                HouseNumber.setAttribute("textcontent",temp.account.number);
                HouseNumber.setAttribute("position","5.4 1.6 -3.227");
            
                var Buss=document.createElement("input-text");
                Buss.className="account";
                Buss.setAttribute("textfieldcolor","blue");
                Buss.setAttribute("bordercolor","red");
                Buss.setAttribute("rotation","0 180 0");
                Buss.setAttribute("borderscale","0.02 0.02 0.02");
                Buss.setAttribute("borderwidth","20");
                Buss.setAttribute("textcontent",temp.account.buss);
                Buss.setAttribute("position","5.4 1.5 -3.227");
            
                var PostCode=document.createElement("input-text");
                PostCode.className="account";
                PostCode.setAttribute("textfieldcolor","blue");
                PostCode.setAttribute("bordercolor","red");
                PostCode.setAttribute("rotation","0 180 0");
                PostCode.setAttribute("borderscale","0.02 0.02 0.02");
                PostCode.setAttribute("borderwidth","20");
                PostCode.setAttribute("textcontent",temp.account.postcode);
                PostCode.setAttribute("position","5.4 1.4 -3.227");

                var UpdateButton =document.createElement("a-plane");
                UpdateButton.className="account";
                UpdateButton.setAttribute("width","11");
                UpdateButton.setAttribute("height","2");
                UpdateButton.setAttribute("scale","0.05 0.05 0.05");
                UpdateButton.setAttribute("rotation","0 180 0");
                UpdateButton.setAttribute("color","darkgreen");
                UpdateButton.setAttribute("position","5.92 1 -3.227");
                UpdateButton.addEventListener("click",function(){
                     var classname="account";
                     var nextview="update"
                    temp.ClearView(classname,nextview);
                });

                var UpdateLabel=document.createElement("a-text");
                UpdateLabel.className="account";
                UpdateLabel.setAttribute("scale", "0.2 0.2 0.2");
                UpdateLabel.setAttribute("rotation","0 180 0");
                UpdateLabel.setAttribute("color", "white");
                UpdateLabel.setAttribute("value", "Change Information");
                UpdateLabel.setAttribute("position","6.12 1 -3.227");
                   

                var HomeLabel=document.createElement("a-text");
                HomeLabel.className="account";
                HomeLabel.setAttribute("scale", "0.2 0.2 0.2");
                HomeLabel.setAttribute("rotation","0 180 0");
                HomeLabel.setAttribute("color", "white");
                HomeLabel.setAttribute("value", "Home");
                HomeLabel.setAttribute("position","5.4 2.1 -3.227");
                   
               
                var LogoutLabel=document.createElement("a-text");
                LogoutLabel.className="account";
                LogoutLabel.setAttribute("scale", "0.2 0.2 0.2");
                LogoutLabel.setAttribute("rotation","0 180 0");
                LogoutLabel.setAttribute("color", "white");
                LogoutLabel.setAttribute("value", "Log Out");
                LogoutLabel.setAttribute("position","5.12 2.1 -3.227");

                var HomeButton =document.createElement("a-plane");
                HomeButton.className="account";
                HomeButton.setAttribute("width","3");
                HomeButton.setAttribute("height","2");
                HomeButton.setAttribute("scale","0.05 0.05 0.05");
                HomeButton.setAttribute("rotation","0 180 0");
                HomeButton.setAttribute("color","lightblue");
                HomeButton.setAttribute("position","5.33 2.1 -3.227");
                HomeButton.addEventListener("click",function(){
                     var classname="account";
                     var nextview="Home"
                    temp.ClearView(classname,nextview);
                });

                var logoutButton =document.createElement("a-plane");
                logoutButton.className="account";
                logoutButton.setAttribute("width","3");
                logoutButton.setAttribute("height","2");
                logoutButton.setAttribute("scale","0.05 0.05 0.05");
                logoutButton.setAttribute("rotation","0 180 0");
                logoutButton.setAttribute("color","lightblue");
                logoutButton.setAttribute("position","5.040 2.1 -3.227");
                logoutButton.addEventListener("click",function(){
                     var classname="account";
                     var nextview="login"
                    temp.ClearData(classname,nextview);
                });
            
            
                document.getElementById("ascene").appendChild(FirstName);
                document.getElementById("ascene").appendChild(LastName);
                document.getElementById("ascene").appendChild(DateOfBirth);
                document.getElementById("ascene").appendChild(Gender);
                document.getElementById("ascene").appendChild(Email);
                document.getElementById("ascene").appendChild(CellPhone);
                document.getElementById("ascene").appendChild(PassPortNumber);
                document.getElementById("ascene").appendChild(Country);
                document.getElementById("ascene").appendChild(State);
                document.getElementById("ascene").appendChild(City);
                document.getElementById("ascene").appendChild(HouseNumber);
                document.getElementById("ascene").appendChild(Buss);
                document.getElementById("ascene").appendChild(PostCode);
                document.getElementById("ascene").appendChild(FirstNameText);
                document.getElementById("ascene").appendChild(LastNameText);
                document.getElementById("ascene").appendChild(DatOfBirthText);
                document.getElementById("ascene").appendChild(GenderText);
                document.getElementById("ascene").appendChild(EmailText);
                document.getElementById("ascene").appendChild(CellPhoneText);
                document.getElementById("ascene").appendChild(PassportNumberText);
                document.getElementById("ascene").appendChild(CountryText);
                document.getElementById("ascene").appendChild(StateText);
                document.getElementById("ascene").appendChild(CityText);
                document.getElementById("ascene").appendChild(StreetText);
                document.getElementById("ascene").appendChild(HouseNumberText);
                document.getElementById("ascene").appendChild(BussNumberText);
                document.getElementById("ascene").appendChild(PostCodeText);
                document.getElementById("ascene").appendChild(UpdateButton);
                document.getElementById("ascene").appendChild(UpdateLabel);
                document.getElementById("ascene").appendChild(HomeLabel);
                document.getElementById("ascene").appendChild(LogoutLabel);
                document.getElementById("ascene").appendChild(HomeButton);
                document.getElementById("ascene").appendChild(logoutButton);
                
                
                
            }); 

        
    };
    
    temp.ChoseRoom=function(){
        http("http://localhost:59446/api/APIRoom").get().then(function(result){

          
            var data=JSON.parse(result);
            temp.Rooms=data;
             
               var x=7;
               var y=2
               var counter=0;
               var comp=2
               for (var i=0;i < data.length;i++)
               {
   
              var RoomnameLabel=document.createElement("a-text");
                RoomnameLabel.setAttribute("scale", "0.2 0.2 0.2");
                RoomnameLabel.className="ChoseRoom";
                RoomnameLabel.setAttribute("rotation","0 180 0");
                RoomnameLabel.setAttribute("color", "white");
                RoomnameLabel.setAttribute("value", "RoomName");
                RoomnameLabel.setAttribute("position",{x:x, y:y , z:-3.227});

              var Roomname=document.createElement("a-text");
              Roomname.setAttribute("scale", "0.2 0.2 0.2");
              Roomname.className="ChoseRoom";
              Roomname.setAttribute("rotation","0 180 0");
              Roomname.setAttribute("color", "white");
              Roomname.setAttribute("value", temp.Rooms[i].roomName);
              Roomname.setAttribute("position",{x:x-0.28, y:y , z:-3.227});
              
              var RoomTypeLabel=document.createElement("a-text");
              RoomTypeLabel.setAttribute("scale", "0.2 0.2 0.2");
              RoomTypeLabel.className="ChoseRoom";
              RoomTypeLabel.setAttribute("rotation","0 180 0");
              RoomTypeLabel.setAttribute("color", "white");
              RoomTypeLabel.setAttribute("value", "Room Type");
              RoomTypeLabel.setAttribute("position",{x:x, y:y-0.05 , z:-3.227});

              var RoomType=document.createElement("a-text");
              RoomType.setAttribute("scale", "0.2 0.2 0.2");
              RoomType.className="ChoseRoom";
              RoomType.setAttribute("rotation","0 180 0");
              RoomType.setAttribute("color", "white");
              RoomType.setAttribute("value", temp.Rooms[i].roomType);
              RoomType.setAttribute("position",{x:x-0.4, y:y-0.05 , z:-3.227});

              var RoomNumberLabel=document.createElement("a-text");
              RoomNumberLabel.setAttribute("scale", "0.2 0.2 0.2");
              RoomNumberLabel.className="ChoseRoom";
              RoomNumberLabel.setAttribute("rotation","0 180 0");
              RoomNumberLabel.setAttribute("color", "white");
              RoomNumberLabel.setAttribute("value", "Room Number");
              RoomNumberLabel.setAttribute("position",{x:x, y:y-0.1 , z:-3.227});

              var RoomNumber=document.createElement("a-text");
              RoomNumber.setAttribute("scale", "0.2 0.2 0.2");
              RoomNumber.className="ChoseRoom";
              RoomNumber.setAttribute("rotation","0 180 0");
              RoomNumber.setAttribute("color", "white");
              RoomNumber.setAttribute("value", temp.Rooms[i].roomNumber);
              RoomNumber.setAttribute("position",{x:x -0.4, y:y-0.1 , z:-3.227});

              var RoomPriceLabel=document.createElement("a-text");
              RoomPriceLabel.setAttribute("scale", "0.2 0.2 0.2");
              RoomPriceLabel.className="ChoseRoom";
              RoomPriceLabel.setAttribute("rotation","0 180 0");
              RoomPriceLabel.setAttribute("color", "white");
              RoomPriceLabel.setAttribute("value", "Room Price");
              RoomPriceLabel.setAttribute("position",{x:x, y:y-0.15 , z:-3.227});


              var RoomPrice=document.createElement("a-text");
              RoomPrice.setAttribute("scale", "0.2 0.2 0.2");
              RoomPrice.className="ChoseRoom";
              RoomPrice.setAttribute("rotation","0 180 0");
              RoomPrice.setAttribute("color", "white");
              RoomPrice.setAttribute("Value", temp.Rooms[i].roomPrice);
              RoomPrice.setAttribute("position",{x:x-0.4, y:y-0.15 , z:-3.227});

              var RoomButton =document.createElement("a-plane");
        RoomButton.className="ChoseRoom";
        RoomButton.setAttribute("width","13");
        RoomButton.setAttribute("height","4");
        RoomButton.setAttribute("scale","0.05 0.05 0.05");
        RoomButton.setAttribute("rotation","0 180 0");
        RoomButton.setAttribute("Value",i);
        RoomButton.setAttribute("color","darkgreen");
        RoomButton.setAttribute("position",{x:x-0.3 , y:y-0.08 , z:-3.227});
        RoomButton.addEventListener("click",function(){

            var classname="ChoseRoom"
            var nextview="PickBed"
                        
                   var index=this.getAttribute("value")
                         temp.booking.roomId=temp.Rooms[index].roomId;
                         temp.booking.roomType=temp.Rooms[index].roomType;
                        temp.booking.roomName=temp.Rooms[index].roomName;
                        temp.booking.roomNumber=temp.Rooms[index].roomNumber;
                        temp.booking.roomPrice=temp.Rooms[index].roomPrice;

                        temp.bookingdata.RoomId=temp.Rooms[index].roomId;
                      

                        var t=JSON.stringify(temp.bookingdata);
                   
          temp.ClearView(classname,nextview);
           
        });
           
                if (counter==comp)
                {
                
                    x=7
                    y=y-0.3;
                   
                    Roomname.setAttribute("position",{x:6.6, y:y , z:-3.227});
                    RoomnameLabel.setAttribute("position",{x:x, y:y , z:-3.227});
                    RoomTypeLabel.setAttribute("position",{x:x, y:y-0.05 , z:-3.227});
                    RoomType.setAttribute("position",{x:x-0.4, y:y-0.05 , z:-3.227});
                    RoomNumberLabel.setAttribute("position",{x:x, y:y-0.1 , z:-3.227});
                    RoomNumber.setAttribute("position",{x:x -0.4, y:y-0.1 , z:-3.227});
                    RoomPriceLabel.setAttribute("position",{x:x, y:y-0.15 , z:-3.227});
                    RoomPrice.setAttribute("position",{x:x-0.4, y:y-0.15 , z:-3.227});
                    RoomButton.setAttribute("position",{x:x-0.3 , y:y-0.08 , z:-3.227});
            
                 
                    counter =0;
                
                }
                x=x-1; 
                counter =counter+1;
               
                document.getElementById("ascene").appendChild(RoomnameLabel);
                document.getElementById("ascene").appendChild(RoomTypeLabel);
                document.getElementById("ascene").appendChild(Roomname);
                document.getElementById("ascene").appendChild(RoomType);
                document.getElementById("ascene").appendChild(RoomNumberLabel);
                document.getElementById("ascene").appendChild(RoomNumber);
               document.getElementById("ascene").appendChild(RoomPriceLabel);
                document.getElementById("ascene").appendChild(RoomPrice);
             
                document.getElementById("ascene").appendChild(RoomButton);
               }
    });

    var HomeLabel=document.createElement("a-text");
        HomeLabel.className="ChoseRoom";
        HomeLabel.setAttribute("scale", "0.2 0.2 0.2");
        HomeLabel.setAttribute("rotation","0 180 0");
        HomeLabel.setAttribute("color", "white");
        HomeLabel.setAttribute("value", "Home");
        HomeLabel.setAttribute("position","5.4 2.1 -3.227");
           
       
        var LogoutLabel=document.createElement("a-text");
        LogoutLabel.className="ChoseRoom";
        LogoutLabel.setAttribute("scale", "0.2 0.2 0.2");
        LogoutLabel.setAttribute("rotation","0 180 0");
        LogoutLabel.setAttribute("color", "white");
        LogoutLabel.setAttribute("value", "Log Out");
        LogoutLabel.setAttribute("position","5.12 2.1 -3.227");
     
        var HomeButton =document.createElement("a-plane");
        HomeButton.className="ChoseRoom";
        HomeButton.setAttribute("width","3");
        HomeButton.setAttribute("height","2");
        HomeButton.setAttribute("scale","0.05 0.05 0.05");
        HomeButton.setAttribute("rotation","0 180 0");
        HomeButton.setAttribute("color","lightblue");
        HomeButton.setAttribute("position","5.33 2.1 -3.227");
        HomeButton.addEventListener("click",function(){
             var classname="ChoseRoom";
             var nextview="Home"
            temp.ClearView(classname,nextview);
        });
     
        var logoutButton =document.createElement("a-plane");
        logoutButton.className="ChoseRoom";
        logoutButton.setAttribute("width","3");
        logoutButton.setAttribute("height","2");
        logoutButton.setAttribute("scale","0.05 0.05 0.05");
        logoutButton.setAttribute("rotation","0 180 0");
        logoutButton.setAttribute("color","lightblue");
        logoutButton.setAttribute("position","5.040 2.1 -3.227");
        logoutButton.addEventListener("click",function(){
             var classname="pickbed";
             var nextview="login"
            temp.ClearData(classname,nextview);
        });
        document.getElementById("ascene").appendChild(HomeLabel);
        document.getElementById("ascene").appendChild(LogoutLabel);
        document.getElementById("ascene").appendChild(HomeButton);
        document.getElementById("ascene").appendChild(logoutButton);
    };
    
    temp.PickBed=function()      
    {
        http("http://localhost:59446/api/APIBed/"+temp.booking.roomId).get().then(function(result){

           
            var data=JSON.parse(result);
            temp.bedsPerRoom=data;
            var x=7;
            var y=2
            var counter=0;
            var comp=4
            for (var i=0;i < temp.bedsPerRoom.length;i++)
            {
                var BedNumberLabel=document.createElement("a-text");
                BedNumberLabel.setAttribute("scale", "0.15 0.15 0.15");
                BedNumberLabel.className="pickbed";
                BedNumberLabel.setAttribute("rotation","0 180 0");
                BedNumberLabel.setAttribute("color", "white");
                BedNumberLabel.setAttribute("value", "Nr:");
                BedNumberLabel.setAttribute("position",{x:x, y:y , z:-3.227});

                var BedNumber=document.createElement("a-text");
                BedNumber.setAttribute("scale", "0.15 0.15 0.15");
                BedNumber.className="pickbed";
                BedNumber.setAttribute("rotation","0 180 0");
                BedNumber.setAttribute("color", "white");
                BedNumber.setAttribute("value", temp.bedsPerRoom[i].bedNumber);
                BedNumber.setAttribute("position",{x:x-0.05, y:y , z:-3.227});

                var BedTypeLabel=document.createElement("a-text");
                BedTypeLabel.setAttribute("scale", "0.15 0.15 0.15");
                BedTypeLabel.className="pickbed";
                BedTypeLabel.setAttribute("rotation","0 180 0");
                BedTypeLabel.setAttribute("color", "white");
                BedTypeLabel.setAttribute("value", "BedType:");
                BedTypeLabel.setAttribute("position",{x:x, y:y-0.05 , z:-3.227});

                var BedType=document.createElement("a-text");
                BedType.setAttribute("scale", "0.15 0.15 0.15");
                BedType.className="pickbed";
                BedType.setAttribute("rotation","0 180 0");
                BedType.setAttribute("color", "white");
                BedType.setAttribute("value", temp.bedsPerRoom[i].bedType);
                BedType.setAttribute("position",{x:x-0.15, y:y-0.05 , z:-3.227});

                
                var BottomtopLabel=document.createElement("a-text");
                BottomtopLabel.setAttribute("scale", "0.15 0.15 0.15");
                BottomtopLabel.className="pickbed";
                BottomtopLabel.setAttribute("rotation","0 180 0");
                BottomtopLabel.setAttribute("color", "white");
                BottomtopLabel.setAttribute("value", "Top/Bottom:");
                BottomtopLabel.setAttribute("position",{x:x, y:y-0.1 , z:-3.227});

                var Bottomtop=document.createElement("a-text");
                Bottomtop.setAttribute("scale", "0.15 0.15 0.15");
                Bottomtop.className="pickbed";
                Bottomtop.setAttribute("rotation","0 180 0");
                Bottomtop.setAttribute("color", "white");
                Bottomtop.setAttribute("value", temp.bedsPerRoom[i].bottem_top);
                Bottomtop.setAttribute("position",{x:x-0.2, y:y-0.1 , z:-3.227});


                var BedButton =document.createElement("a-plane");
                BedButton.className="pickbed";
                BedButton.setAttribute("width","11");
                BedButton.setAttribute("height","5");
                BedButton.setAttribute("scale","0.03 0.03 0.03");
                BedButton.setAttribute("rotation","0 180 0");
                BedButton.setAttribute("Value",i);
                BedButton.setAttribute("color","darkgreen");
                BedButton.setAttribute("position",{x:x-0.15 , y:y-0.05 , z:-3.227});
                BedButton.addEventListener("click",function(){
        
                    var classname="pickbed"
                    var nextview="PickDate"
                                
                           var index=this.getAttribute("value")
                              
                              
               temp.booking.bedId=temp.bedsPerRoom[index].bedId;
               temp.booking.bedType=temp.bedsPerRoom[index].bedType;
               temp.booking.bedNumber=temp.bedsPerRoom[index].bedNumber;
               temp.booking.bottem_top=temp.bedsPerRoom[index].bottem_top;

               temp.bookingdata.BedId=temp.bedsPerRoom[index].bedId;
                               var t=JSON.stringify(temp.bookingdata);
                             
                  temp.ClearView(classname,nextview);
                });
                if(counter==comp)
                {
                    x=7;
                    y=y-0.17;
                    BedNumberLabel.setAttribute("position",{x:x, y:y , z:-3.227});
                    BedNumber.setAttribute("position",{x:x-0.05, y:y , z:-3.227});
                    BedTypeLabel.setAttribute("position",{x:x, y:y-0.05 , z:-3.227});
                    BedType.setAttribute("position",{x:x-0.15, y:y-0.05 , z:-3.227});
                    BottomtopLabel.setAttribute("position",{x:x, y:y-0.1 , z:-3.227});
                    Bottomtop.setAttribute("position",{x:x-0.2, y:y-0.1 , z:-3.227});
                    BedButton.setAttribute("position",{x:x-0.15 , y:y-0.05 , z:-3.227});
                    counter=0;
                }
                counter=counter+1;
                x=x-0.4;

                document.getElementById("ascene").appendChild(BedNumberLabel);
                document.getElementById("ascene").appendChild(BedNumber);
                document.getElementById("ascene").appendChild(BedTypeLabel);
                document.getElementById("ascene").appendChild(BedType);
                document.getElementById("ascene").appendChild(BottomtopLabel);
                document.getElementById("ascene").appendChild(Bottomtop);
                document.getElementById("ascene").appendChild(BedButton);
            }
         
        });
        var HomeLabel=document.createElement("a-text");
        HomeLabel.className="pickbed";
        HomeLabel.setAttribute("scale", "0.2 0.2 0.2");
        HomeLabel.setAttribute("rotation","0 180 0");
        HomeLabel.setAttribute("color", "white");
        HomeLabel.setAttribute("value", "Home");
        HomeLabel.setAttribute("position","5.4 2.1 -3.227");
           
       
        var LogoutLabel=document.createElement("a-text");
        LogoutLabel.className="pickbed";
        LogoutLabel.setAttribute("scale", "0.2 0.2 0.2");
        LogoutLabel.setAttribute("rotation","0 180 0");
        LogoutLabel.setAttribute("color", "white");
        LogoutLabel.setAttribute("value", "Log Out");
        LogoutLabel.setAttribute("position","5.12 2.1 -3.227");
     
        var HomeButton =document.createElement("a-plane");
        HomeButton.className="pickbed";
        HomeButton.setAttribute("width","3");
        HomeButton.setAttribute("height","2");
        HomeButton.setAttribute("scale","0.05 0.05 0.05");
        HomeButton.setAttribute("rotation","0 180 0");
        HomeButton.setAttribute("color","lightblue");
        HomeButton.setAttribute("position","5.33 2.1 -3.227");
        HomeButton.addEventListener("click",function(){
             var classname="pickbed";
             var nextview="Home"
            temp.ClearView(classname,nextview);
        });
     
        var logoutButton =document.createElement("a-plane");
        logoutButton.className="pickbed";
        logoutButton.setAttribute("width","3");
        logoutButton.setAttribute("height","2");
        logoutButton.setAttribute("scale","0.05 0.05 0.05");
        logoutButton.setAttribute("rotation","0 180 0");
        logoutButton.setAttribute("color","lightblue");
        logoutButton.setAttribute("position","5.040 2.1 -3.227");
        logoutButton.addEventListener("click",function(){
             var classname="pickbed";
             var nextview="login"
            temp.ClearData(classname,nextview);
        });
        document.getElementById("ascene").appendChild(HomeLabel);
        document.getElementById("ascene").appendChild(LogoutLabel);
        document.getElementById("ascene").appendChild(HomeButton);
        document.getElementById("ascene").appendChild(logoutButton);
    };

    temp.PickDate=function(){

        var CheckinDateLabel=document.createElement("a-text");
        CheckinDateLabel.setAttribute("scale", "0.2 0.2 0.2");
        CheckinDateLabel.className="pickdate";
        CheckinDateLabel.setAttribute("rotation","0 180 0");
        CheckinDateLabel.setAttribute("color", "white");
        CheckinDateLabel.setAttribute("value", "Checkin Date");
        CheckinDateLabel.setAttribute("position","6.5 1.7 -3.227");

        var CheckOutDateLabel=document.createElement("a-text");
        CheckOutDateLabel.setAttribute("scale", "0.2 0.2 0.2");
        CheckOutDateLabel.className="pickdate";
        CheckOutDateLabel.setAttribute("rotation","0 180 0");
        CheckOutDateLabel.setAttribute("color", "white");
        CheckOutDateLabel.setAttribute("value", "Checkout Date");
        CheckOutDateLabel.setAttribute("position","6.5 1.5 -3.227");

        var CheckinDay=document.createElement("input-text");
        CheckinDay.className="pickdate";
        CheckinDay.id="checkinday";
        CheckinDay.setAttribute("gkeyboardtarget","qi");
        CheckinDay.setAttribute("textfieldcolor","blue");
        CheckinDay.setAttribute("bordercolor","red");
        CheckinDay.setAttribute("rotation","0 180 0");
        CheckinDay.setAttribute("borderscale","0.02 0.02 0.02");
        CheckinDay.setAttribute("borderwidth","2");
        CheckinDay.setAttribute("textcontent","15");
        CheckinDay.setAttribute("position","6.15 1.7 -3.227");

        var CheckinMonth=document.createElement("input-text");
        CheckinMonth.className="pickdate";
        CheckinMonth.id="checkinmonth";
        CheckinMonth.setAttribute("gkeyboardtarget","qi");
        CheckinMonth.setAttribute("textfieldcolor","blue");
        CheckinMonth.setAttribute("bordercolor","red");
        CheckinMonth.setAttribute("rotation","0 180 0");
        CheckinMonth.setAttribute("borderscale","0.02 0.02 0.02");
        CheckinMonth.setAttribute("borderwidth","2");
        CheckinMonth.setAttribute("textcontent","1");
        CheckinMonth.setAttribute("position","6.10 1.7 -3.227");

        var CheckinYear=document.createElement("input-text");
        CheckinYear.className="pickdate";
        CheckinYear.id="checkinyear";
        CheckinYear.setAttribute("gkeyboardtarget","qi");
        CheckinYear.setAttribute("textfieldcolor","blue");
        CheckinYear.setAttribute("bordercolor","red");
        CheckinYear.setAttribute("rotation","0 180 0");
        CheckinYear.setAttribute("borderscale","0.02 0.02 0.02");
        CheckinYear.setAttribute("borderwidth","4");
        CheckinYear.setAttribute("textcontent","2018");
        CheckinYear.setAttribute("position","6.02 1.7 -3.227");

        var CheckOutDay=document.createElement("input-text");
        CheckOutDay.className="pickdate";
        CheckOutDay.id="checkoutday";
        CheckOutDay.setAttribute("gkeyboardtarget","qi");
        CheckOutDay.setAttribute("textfieldcolor","blue");
        CheckOutDay.setAttribute("bordercolor","red");
        CheckOutDay.setAttribute("rotation","0 180 0");
        CheckOutDay.setAttribute("borderscale","0.02 0.02 0.02");
        CheckOutDay.setAttribute("borderwidth","2");
        CheckOutDay.setAttribute("textcontent","14");
        CheckOutDay.setAttribute("position","6.15 1.5 -3.227");

        var CheckOutMonth=document.createElement("input-text");
        CheckOutMonth.className="pickdate";
        CheckOutMonth.id="checkoutmonth";
        CheckOutMonth.setAttribute("gkeyboardtarget","qi");
        CheckOutMonth.setAttribute("textfieldcolor","blue");
        CheckOutMonth.setAttribute("bordercolor","red");
        CheckOutMonth.setAttribute("rotation","0 180 0");
        CheckOutMonth.setAttribute("borderscale","0.02 0.02 0.02");
        CheckOutMonth.setAttribute("borderwidth","2");
        CheckOutMonth.setAttribute("textcontent","2");
        CheckOutMonth.setAttribute("position","6.10 1.5 -3.227");

        var CheckOutYear=document.createElement("input-text");
        CheckOutYear.className="pickdate";
        CheckOutYear.id="checkoutyear";
        CheckOutYear.setAttribute("gkeyboardtarget","qi");
        CheckOutYear.setAttribute("textfieldcolor","blue");
        CheckOutYear.setAttribute("bordercolor","red");
        CheckOutYear.setAttribute("rotation","0 180 0");
        CheckOutYear.setAttribute("borderscale","0.02 0.02 0.02");
        CheckOutYear.setAttribute("borderwidth","4");
        CheckOutYear.setAttribute("textcontent","2018");
        CheckOutYear.setAttribute("position","6.02 1.5 -3.227");

        

        var CheckLabel=document.createElement("a-text");
        CheckLabel.setAttribute("scale", "0.2 0.2 0.2");
        CheckLabel.className="pickdate";
        CheckLabel.setAttribute("rotation","0 180 0");
        CheckLabel.setAttribute("color", "white");
        CheckLabel.setAttribute("value", "Check Available");
        CheckLabel.setAttribute("position","6.27 1.3 -3.227");

        var AvailableButton =document.createElement("a-plane");
        AvailableButton.className="pickdate";
        AvailableButton.setAttribute("width","14");
        AvailableButton.setAttribute("height","5");
        AvailableButton.setAttribute("scale","0.03 0.03 0.03");
        AvailableButton.setAttribute("rotation","0 180 0");
   
        AvailableButton.setAttribute("color","darkgreen");
        AvailableButton.setAttribute("position",{x:6.12 , y:1.3 , z:-3.227});
        AvailableButton.addEventListener("click",function(e){
        
            var classname=""
            var nextview="PickDate"
            temp.getdates();
        });
        var HomeLabel=document.createElement("a-text");
        HomeLabel.className="pickdate";
        HomeLabel.setAttribute("scale", "0.2 0.2 0.2");
        HomeLabel.setAttribute("rotation","0 180 0");
        HomeLabel.setAttribute("color", "white");
        HomeLabel.setAttribute("value", "Home");
        HomeLabel.setAttribute("position","5.4 2.1 -3.227");
           
       
        var LogoutLabel=document.createElement("a-text");
        LogoutLabel.className="pickdate";
        LogoutLabel.setAttribute("scale", "0.2 0.2 0.2");
        LogoutLabel.setAttribute("rotation","0 180 0");
        LogoutLabel.setAttribute("color", "white");
        LogoutLabel.setAttribute("value", "Log Out");
        LogoutLabel.setAttribute("position","5.12 2.1 -3.227");
     
        var HomeButton =document.createElement("a-plane");
        HomeButton.className="pickdate";
        HomeButton.setAttribute("width","3");
        HomeButton.setAttribute("height","2");
        HomeButton.setAttribute("scale","0.05 0.05 0.05");
        HomeButton.setAttribute("rotation","0 180 0");
        HomeButton.setAttribute("color","lightblue");
        HomeButton.setAttribute("position","5.33 2.1 -3.227");
        HomeButton.addEventListener("click",function(){
             var classname="pickdate";
             var nextview="Home"
            temp.ClearView(classname,nextview);
        });
     
        var logoutButton =document.createElement("a-plane");
        logoutButton.className="pickdate";
        logoutButton.setAttribute("width","3");
        logoutButton.setAttribute("height","2");
        logoutButton.setAttribute("scale","0.05 0.05 0.05");
        logoutButton.setAttribute("rotation","0 180 0");
        logoutButton.setAttribute("color","lightblue");
        logoutButton.setAttribute("position","5.040 2.1 -3.227");
        logoutButton.addEventListener("click",function(){
             var classname="pickdate";
             var nextview="login"
            temp.ClearData(classname,nextview);
        });


        document.getElementById("ascene").appendChild(CheckinDateLabel);
        document.getElementById("ascene").appendChild(CheckinDay);
        document.getElementById("ascene").appendChild(CheckinMonth);
        document.getElementById("ascene").appendChild(CheckinYear);

        document.getElementById("ascene").appendChild(CheckOutDateLabel);
        document.getElementById("ascene").appendChild(CheckOutDay);
        document.getElementById("ascene").appendChild(CheckOutMonth);
        document.getElementById("ascene").appendChild(CheckOutYear);
        document.getElementById("ascene").appendChild(CheckLabel);
        document.getElementById("ascene").appendChild(AvailableButton);
        document.getElementById("ascene").appendChild(HomeLabel);
        document.getElementById("ascene").appendChild(LogoutLabel);
        document.getElementById("ascene").appendChild(HomeButton);
        document.getElementById("ascene").appendChild(logoutButton);
        


    };
    temp.getdates=function(){
        var checkinday= document.getElementById("checkinday").textvalue;
        var checkinmonth= document.getElementById("checkinmonth").textvalue
        var checkinyear= document.getElementById("checkinyear").textvalue
        var CheckinDate= checkinday+"/"+checkinmonth+"/"+checkinyear;
        var makeCheckinTime=temp.MakeTimeDates(CheckinDate);
        temp.BookingTimeDates.CheckinTimeDate=makeCheckinTime,
        console.log("bookinginINtitmedate " + temp.BookingTimeDates.CheckinTimeDate);
       

        var checkoutday= document.getElementById("checkoutday").textvalue;
        var checkoutmonth= document.getElementById("checkoutmonth").textvalue
        var checkoutyear= document.getElementById("checkoutyear").textvalue
        var CheckoutDate= checkoutday+"/"+checkoutmonth+"/"+checkoutyear;

        console.log("datout **" + CheckoutDate);
        var makeCheckoutTime=temp.MakeTimeDates(CheckoutDate);
        temp.BookingTimeDates.CheckoutTimeDate=makeCheckoutTime;
        console.log("booikingouitmedate " +temp.BookingTimeDates.CheckoutTimeDate);
    


        http("http://localhost:59446/api/APIBookBed/"+temp.bookingdata.BedId).get().then(function(result){

            var data=JSON.parse(result);
            console.log("check result; " +result);
    if(result==2)   //when there ar no bookingdates
    {  
  
        
        var classname="pickdate";
        var nextview="priceandbooking";
        console.log(" this room is freee!!!! ++");

        temp.booking.checkindate=CheckinDate;
        temp.booking.checkoutDate=CheckoutDate;
        temp.bookingdata.CheckinDate=CheckinDate;
        temp.bookingdata.CheckoutDate=CheckoutDate;
        var t=JSON.stringify(temp.bookingdata);
      
        temp.ClearView(classname,nextview)
    }
    else{
    var isbedFree     
     var i;
     for ( i=0 ;i < data.checkinDates.length; i++)
     {
        var newTimDate=temp.MakeTimeDates(data.checkinDates[i]);
        temp.CheckTimeDates.CheckinTimeDates.push(newTimDate);
         console.log(" Checkintimedates **** " + temp.CheckTimeDates.CheckinTimeDates );
     }

      for ( i=0 ;i < data.checkinDates.length; i++)
     {
        var newTimDate=temp.MakeTimeDates(data.checkOutDates[i]);
        temp.CheckTimeDates.CheckoutTimeDates.push(newTimDate);
         console.log(" Checkkkkkk **** " + temp.CheckTimeDates.CheckoutTimeDates[3] );
     }
     for ( i=0 ;i < data.checkinDates.length; i++) 
     {
     console.log(" compare*** ++" + temp.BookingTimeDates.CheckinTimeDate +" "+ temp.CheckTimeDates.CheckoutTimeDates[i]+" " + temp.BookingTimeDates.CheckoutTimeDate +"  "+ temp.CheckTimeDates.CheckoutTimeDates[i]);

     if(     temp.BookingTimeDates.CheckinTimeDate > temp.CheckTimeDates.CheckoutTimeDates[i] && temp.BookingTimeDates.CheckoutTimeDate > temp.CheckTimeDates.CheckoutTimeDates[i]  )
         {
             
            var isbedFree="free";
            console.log(" isbedfree *** 1"+ isbedFree );
            
         }

            

    

    else if(temp.BookingTimeDates.CheckinTimeDate < temp.CheckTimeDates.CheckinTimeDates[i] && temp.BookingTimeDates.CheckoutTimeDate <temp.CheckTimeDates.CheckinTimeDates[i] )
     {
              
              var isbedFree="free"; 
              console.log(" isbedfree *** 1"+ isbedFree );
     }

     else{

        console.log(" this room is booked*** ++");
        var isbedFree="booked";
     }
    }

    console.log(" isbedfree ***"+ isbedFree );
    if(isbedFree=="free")
    {
        var classname="pickdate";
        var nextview="priceandbooking";
      
        temp.booking.checkindate=CheckinDate;
        temp.booking.checkoutDate=CheckoutDate;
        temp.bookingdata.CheckinDate=CheckinDate;
        temp.bookingdata.CheckoutDate=CheckoutDate;
        temp.ClearView(classname,nextview)
    }
    if(isbedFree=="booked")
    {
        console.log(" this room is booked!!!! ++");
    }
    }
    });
 
      
    };
    temp.CalculateDaysBetweenDates=function(firstdatetime,seconddatetime){

     var oneDay =1000*60*60*24
      var difference= Math.abs(firstdatetime-seconddatetime)

      return Math.round(difference /oneDay);

    }


    
    
  // *****LOGIN VIEW : to log into Account or creat an account  
    temp.LoginView=function()
       
        
{
       

        var TitleLabel=document.createElement("a-text");
        TitleLabel.setAttribute("scale", "0.3 0.3 0.3");
        TitleLabel.className="login";
        TitleLabel.setAttribute("rotation","0 180 0");
        TitleLabel.setAttribute("color", "white");
        TitleLabel.setAttribute("value", "Login to Account");
        TitleLabel.setAttribute("position","6.4 1.7 -3.227");

        var UserNameLabel=document.createElement("a-text");
        UserNameLabel.setAttribute("scale", "0.2 0.2 0.2");
        UserNameLabel.className="login";
        UserNameLabel.setAttribute("rotation","0 180 0");
        UserNameLabel.setAttribute("color", "white");
        UserNameLabel.setAttribute("value", "Username");
        UserNameLabel.setAttribute("position","6.5 1.51 -3.227");
    
        var PasswordLabel=document.createElement("a-text");
        PasswordLabel.className="login";
        PasswordLabel.setAttribute("scale", "0.2 0.2 0.2");
        PasswordLabel.setAttribute("rotation","0 180 0");
        PasswordLabel.setAttribute("color", "white");
        PasswordLabel.setAttribute("value", "Password");
        PasswordLabel.setAttribute("position","6.5 1.41 -3.227");

        var LoginLabel=document.createElement("a-text");
        LoginLabel.className="login";
        LoginLabel.setAttribute("scale", "0.2 0.2 0.2");
        LoginLabel.setAttribute("rotation","0 180 0");
        LoginLabel.setAttribute("color", "white");
        LoginLabel.setAttribute("value", "Login");
        LoginLabel.setAttribute("position","6.12 1.2 -3.227");

        var CreateAccountLabel=document.createElement("a-text");
        CreateAccountLabel.className="login";
        CreateAccountLabel.setAttribute("scale", "0.2 0.2 0.2");
        CreateAccountLabel.setAttribute("rotation","0 180 0");
        CreateAccountLabel.setAttribute("color", "white");
        CreateAccountLabel.setAttribute("value", "Create Account");
        CreateAccountLabel.setAttribute("position","6.20 1. -3.227");
       
        var UserName =document.createElement("input-text");
        UserName.className="login";
        UserName.id="username";
        UserName.setAttribute("textfieldcolor","blue");
        UserName.setAttribute("gkeyboardtarget","qi");
        UserName.setAttribute("bordercolor","red");
        UserName.setAttribute("borderscale","0.02 0.02 0.02");
        UserName.setAttribute("rotation","0 180 0");
        UserName.setAttribute("borderwidth","20");  
        UserName.setAttribute("position","6.05 1.5 -3.227");
        UserName.setAttribute("textcontent","wacht");
 
        var Password =document.createElement("input-text");
        Password.className="login";
        Password.id="password";
        Password.setAttribute("gkeyboardtarget","qi");
        Password.setAttribute("textfieldcolor","blue");
        Password.setAttribute("bordercolor","red");
        Password.setAttribute("borderscale","0.02 0.02 0.02");
        Password.setAttribute("rotation","0 180 0");
        Password.setAttribute("borderwidth","20");  
        Password.setAttribute("position","6.05 1.4 -3.227");
        Password.setAttribute("textcontent","gebru");

        var loginbutton =document.createElement("a-plane");
        loginbutton.className="login";
        loginbutton.setAttribute("width","4");
        loginbutton.setAttribute("height","2");
        loginbutton.setAttribute("scale","0.05 0.05 0.05");
        loginbutton.setAttribute("rotation","0 180 0");
        loginbutton.setAttribute("color","darkgreen");
        loginbutton.setAttribute("position","6.05 1.2 -3.227");
        loginbutton.addEventListener("click",function(){
         
        

            temp.login.Username= document.getElementById("username").textvalue;
            temp.login.Password=document.getElementById("password").textvalue;
            var data =JSON.stringify(temp.login);
          
            http("http://localhost:59446/api/APILogin").post(data).then(function (result){

         
              
           
                if(result=="0")
                {      
                  
                    var ErrorLabel=document.createElement("a-text");

                    ErrorLabel.className="login";
                    ErrorLabel.setAttribute("scale", "0.2 0.2 0.2");
                    ErrorLabel.setAttribute("rotation","0 180 0");
                    ErrorLabel.setAttribute("color", "red");
                    ErrorLabel.setAttribute("value", "Username or Password is not correct");
                    ErrorLabel.setAttribute("position","6.4 0.9 -3.227");
                    document.getElementById("ascene").appendChild(ErrorLabel);
                }
               
                else{
                    
                    var d=JSON.parse(result);
                    temp.customerId.custId=d[0].customerId;
                    temp.customerId.accId=d[0].accountId;
                 
                    temp.bookingdata.AccountId= temp.customerId.accId;
                    temp.bookingdata.CustomerId=temp.customerId.custId;
                    var nextview="Home";
                    var classname="login";
                 
                    temp.ClearView(classname,nextview);
                }
            });
      
        
        });

        var Accountbutton =document.createElement("a-plane");
        Accountbutton.className="login";
        Accountbutton.setAttribute("width","8");
        Accountbutton.setAttribute("height","2");
        Accountbutton.setAttribute("scale","0.05 0.05 0.05");
        Accountbutton.setAttribute("rotation","0 180 0");
        Accountbutton.setAttribute("color","darkgreen");
        Accountbutton.setAttribute("position","6.04 1 -3.227");
        Accountbutton.addEventListener("click",function(){
         
            var classname="login"
            var nextview="createaccount"
          temp.ClearView(classname,nextview);
           
      
           
        });


        document.getElementById("ascene").appendChild(UserNameLabel);
        document.getElementById("ascene").appendChild(PasswordLabel);
        document.getElementById("ascene").appendChild(UserName);
        document.getElementById("ascene").appendChild(Password);
        document.getElementById("ascene").appendChild(TitleLabel);
        document.getElementById("ascene").appendChild(LoginLabel);
        document.getElementById("ascene").appendChild(loginbutton);
        document.getElementById("ascene").appendChild(CreateAccountLabel);
        document.getElementById("ascene").appendChild(Accountbutton);
       
    };


   /// view to create a New Account *******
    temp.CreateAccount=function(){


        var FirstNameText=document.createElement("a-text");
        FirstNameText.className="account";
        FirstNameText.setAttribute("scale", "0.2 0.2 0.2");
        FirstNameText.setAttribute("rotation","0 180 0");
        FirstNameText.setAttribute("color", "white");
        FirstNameText.setAttribute("value", "First name");
        FirstNameText.setAttribute("position","7 1.9 -3.227");
    
        var LastNameText=document.createElement("a-text");
        LastNameText.className="account";
        LastNameText.setAttribute("scale", "0.2 0.2 0.2");
        LastNameText.setAttribute("rotation","0 180 0");
        LastNameText.setAttribute("color", "white");
        LastNameText.setAttribute("value", "LastName");
        LastNameText.setAttribute("position","7 1.8 -3.227");
    
   
        
        var GenderText=document.createElement("a-text");
        GenderText.className="account";
        GenderText.setAttribute("scale", "0.2 0.2 0.2");
        GenderText.setAttribute("rotation","0 180 0");
        GenderText .setAttribute("color", "white");
        GenderText .setAttribute("value", "Gender");
        GenderText.setAttribute("position","7 1.6 -3.227");
    
        var EmailText=document.createElement("a-text");
        EmailText.className="account";
        EmailText.setAttribute("scale", "0.2 0.2 0.2");
        EmailText.setAttribute("rotation","0 180 0");
        EmailText .setAttribute("color", "white");
        EmailText .setAttribute("value", "Email");
        EmailText.setAttribute("position","7 1.5 -3.227");
    
        var CellPhoneText=document.createElement("a-text");
        CellPhoneText.className="account";
        CellPhoneText.setAttribute("scale", "0.2 0.2 0.2");
        CellPhoneText.setAttribute("rotation","0 180 0");
        CellPhoneText .setAttribute("color", "white");
        CellPhoneText .setAttribute("value", "Phone");
        CellPhoneText.setAttribute("position","7 1.4 -3.227");
    
        var PassportNumberText=document.createElement("a-text");
        PassportNumberText.className="account";
        PassportNumberText.setAttribute("scale", "0.2 0.2 0.2");
        PassportNumberText.setAttribute("rotation","0 180 0");
        PassportNumberText .setAttribute("color", "white");
        PassportNumberText  .setAttribute("value", "Passport Number");
        PassportNumberText .setAttribute("position","7 1.3 -3.227");
    
        var CountryText=document.createElement("a-text");
        CountryText.className="account";
        CountryText.setAttribute("scale", "0.2 0.2 0.2");
        CountryText.setAttribute("rotation","0 180 0");
        CountryText.setAttribute("color", "white");
        CountryText.setAttribute("value", "Country");
        CountryText.setAttribute("position","7 1.2 -3.227");
    
        var StateText=document.createElement("a-text");
        StateText.className="account";
        StateText.setAttribute("scale", "0.2 0.2 0.2");
        StateText.setAttribute("rotation","0 180 0");
        StateText.setAttribute("color", "white");
        StateText.setAttribute("value", "State");
        StateText.setAttribute("position","6 1.9 -3.227");
    
        
        var CityText=document.createElement("a-text");
        CityText.className="account";
        CityText.setAttribute("scale", "0.2 0.2 0.2");
        CityText.setAttribute("rotation","0 180 0");
        CityText.setAttribute("color", "white");
        CityText.setAttribute("value", "City");
        CityText.setAttribute("position","6 1.8 -3.227");
    
          
        var StreetText=document.createElement("a-text");
        StreetText.className="account";
        StreetText.setAttribute("scale", "0.2 0.2 0.2");
        StreetText.setAttribute("rotation","0 180 0");
        StreetText.setAttribute("color", "white");
        StreetText.setAttribute("value", "Street");
        StreetText.setAttribute("position","6 1.7 -3.227");
    
            
        var HouseNumberText=document.createElement("a-text");
        HouseNumberText.className="account";
        HouseNumberText.setAttribute("scale", "0.2 0.2 0.2");
        HouseNumberText.setAttribute("rotation","0 180 0");
        HouseNumberText.setAttribute("color", "white");
        HouseNumberText.setAttribute("value", "House Number");
        HouseNumberText.setAttribute("position","6 1.6 -3.227");
    
        var BussNumberText=document.createElement("a-text");
        BussNumberText.className="account";
        BussNumberText.setAttribute("scale", "0.2 0.2 0.2");
        BussNumberText.setAttribute("rotation","0 180 0");
        BussNumberText.setAttribute("color", "white");
        BussNumberText.setAttribute("value", "Buss Nr.");
        BussNumberText.setAttribute("position","6 1.5 -3.227");
    
        var PostCodeText=document.createElement("a-text");
        PostCodeText.className="account";
        PostCodeText.setAttribute("scale", "0.2 0.2 0.2");
        PostCodeText.setAttribute("rotation","0 180 0");
        PostCodeText.setAttribute("color", "white");
        PostCodeText.setAttribute("value", "Postcode");
        PostCodeText.setAttribute("position","6 1.4 -3.227");
    
    
        var FirstName =document.createElement("input-text");
        FirstName.className="account";
        FirstName.id="firstname";
        FirstName.setAttribute("gkeyboardtarget","qi");
        FirstName.setAttribute("textfieldcolor","blue");
        FirstName.setAttribute("bordercolor","red");
        FirstName.setAttribute("rotation","0 180 0");
        FirstName.setAttribute("borderscale","0.02 0.02 0.02");
        FirstName.setAttribute("borderwidth","20");
        FirstName.setAttribute("textcontent","Tom");
        FirstName.setAttribute("position","6.5 1.9 -3.227");
        
        var LastName =document.createElement("input-text");
        LastName.id="lastname";
        LastName.className="account";
        LastName.setAttribute("gkeyboardtarget","qi");
        LastName.setAttribute("textfieldcolor","blue");
        LastName.setAttribute("bordercolor","red");
        LastName.setAttribute("borderscale","0.02 0.02 0.02");
        LastName.setAttribute("rotation","0 180 0");
        LastName.setAttribute("borderwidth","20");
        LastName.setAttribute("textcontent","Schelde");
        LastName.setAttribute("position","6.5 1.8 -3.227");
       
 
       
        var Gender=document.createElement("input-text");
        Gender.setAttribute("gkeyboardtarget","qi");
        Gender.id="gender";
        Gender.className="account";
        Gender.setAttribute("textfieldcolor","blue");
        Gender.setAttribute("bordercolor","red");
        Gender.setAttribute("rotation","0 180 0");
        Gender.setAttribute("borderscale","0.02 0.02 0.02");
        Gender.setAttribute("borderwidth","20");
        Gender.setAttribute("textcontent","M");
        Gender.setAttribute("position","6.5 1.6 -3.227");
       
        var Email=document.createElement("input-text");
        Email.className="account";
        Email.id="email";  
        Email.setAttribute("textfieldcolor","blue");
        Email.setAttribute("bordercolor","red");
        Email.setAttribute("rotation","0 180 0");
        Email.setAttribute("borderscale","0.02 0.02 0.02");
        Email.setAttribute("borderwidth","20");
        Email.setAttribute("textcontent","Tom@scheld@telenent.be ");
        Email.setAttribute("position","6.5 1.5 -3.227");
        Email.setAttribute("gkeyboardtarget","qi");
    
        var CellPhone=document.createElement("input-text");
        CellPhone.className="account";
        CellPhone.id="cellphone";
        CellPhone.setAttribute("gkeyboardtarget","qi");
        CellPhone.setAttribute("textfieldcolor","blue");
        CellPhone.setAttribute("bordercolor","red");
        CellPhone.setAttribute("rotation","0 180 0");
        CellPhone.setAttribute("borderscale","0.02 0.02 0.02");
        CellPhone.setAttribute("borderwidth","20");
        CellPhone.setAttribute("textcontent","047102");
        CellPhone.setAttribute("position","6.5 1.4 -3.227");
    
        var PassPortNumber=document.createElement("input-text");
        PassPortNumber.setAttribute("gkeyboardtarget","qi");
        PassPortNumber.id="passportnumber";
        PassPortNumber.className="account";
        PassPortNumber.setAttribute("textfieldcolor","blue");
        PassPortNumber.setAttribute("bordercolor","red");
        PassPortNumber.setAttribute("rotation","0 180 0");
        PassPortNumber.setAttribute("borderscale","0.02 0.02 0.02");
        PassPortNumber.setAttribute("borderwidth","20");
        PassPortNumber.setAttribute("textcontent","Nj662");
        PassPortNumber.setAttribute("position","6.4 1.3 -3.227");
    
        var Country=document.createElement("input-text");
        Country.id="country";
        Country.setAttribute("gkeyboardtarget","qi");
        Country.className="account";
        Country.setAttribute("textfieldcolor","blue");
        Country.setAttribute("bordercolor","red");
        Country.setAttribute("borderscale","0.02 0.02 0.02");
        Country.setAttribute("rotation","0 180 0");
        Country.setAttribute("borderwidth","20");
        Country.setAttribute("textcontent","Belgie");
        Country.setAttribute("position","6.4 1.2 -3.227");
       
        var State=document.createElement("input-text");
        State.id="state";
        State.setAttribute("gkeyboardtarget","qi");
        State.className="account";
        State.setAttribute("textfieldcolor","blue");
        State.setAttribute("bordercolor","red");
        State.setAttribute("rotation","0 180 0");
        State.setAttribute("borderscale","0.02 0.02 0.02");
        State.setAttribute("borderwidth","20");
        State.setAttribute("textcontent","OostVlaandern");
        State.setAttribute("position","5.4 1.9 -3.227");
    
        var City=document.createElement("input-text");
        City.id="city";
        City.setAttribute("gkeyboardtarget","qi");
        City.className="account";
        City.setAttribute("textfieldcolor","blue");
        City.setAttribute("bordercolor","red");
        City.setAttribute("rotation","0 180 0");
        City.setAttribute("borderscale","0.02 0.02 0.02");
        City.setAttribute("borderwidth","20");
        City.setAttribute("textcontent","Oostende");
        City.setAttribute("position","5.4 1.8 -3.227");
    
        var Street=document.createElement("input-text");
        Street.setAttribute("gkeyboardtarget","qi");
        Street.id="street";
        Street.className="account";
        Street.setAttribute("textfieldcolor","blue");
        Street.setAttribute("bordercolor","red");
        Street.setAttribute("borderscale","0.02 0.02 0.02");
        Street.setAttribute("rotation","0 180 0");
        Street.setAttribute("borderwidth","20");
        Street.setAttribute("textcontent","Broekstraat");
        Street.setAttribute("position","5.4 1.7 -3.227");
    
        var HouseNumber=document.createElement("input-text");
        HouseNumber.id="number";
        HouseNumber.className="account";
        HouseNumber.setAttribute("textfieldcolor","blue");
        HouseNumber.setAttribute("bordercolor","red");
        HouseNumber.setAttribute("rotation","0 180 0");
        HouseNumber.setAttribute("borderscale","0.02 0.02 0.02");
        HouseNumber.setAttribute("borderwidth","20");
        HouseNumber.setAttribute("textcontent","158");
        HouseNumber.setAttribute("position","5.4 1.6 -3.227");
    
        var Buss=document.createElement("input-text");
        Buss.className="account";
        Buss.id="buss";
        Buss.setAttribute("gkeyboardtarget","qi");
        Buss.setAttribute("textfieldcolor","blue");
        Buss.setAttribute("bordercolor","red");
        Buss.setAttribute("rotation","0 180 0");
        Buss.setAttribute("borderscale","0.02 0.02 0.02");
        Buss.setAttribute("borderwidth","20");
        Buss.setAttribute("textcontent","Non");
        Buss.setAttribute("position","5.4 1.5 -3.227");

        var PostCode=document.createElement("input-text");
        PostCode.className="account";
        PostCode.id="postcode";
        PostCode.setAttribute("gkeyboardtarget","qi");
        PostCode.setAttribute("textfieldcolor","blue");
        PostCode.setAttribute("bordercolor","red");
        PostCode.setAttribute("rotation","0 180 0");
        PostCode.setAttribute("borderscale","0.02 0.02 0.02");
        PostCode.setAttribute("borderwidth","20");
        PostCode.setAttribute("textcontent","1800");
        PostCode.setAttribute("position","5.4 1.4 -3.227");

        
        var DatOfBirthText=document.createElement("a-text");
        DatOfBirthText.className="account";
        DatOfBirthText.setAttribute("scale", "0.2 0.2 0.2");
        DatOfBirthText.setAttribute("rotation","0 180 0");
        DatOfBirthText .setAttribute("color", "white");
        DatOfBirthText .setAttribute("value", "Birthday");
        DatOfBirthText.setAttribute("position","6 1.3 -3.227");

       


        var Day=document.createElement("input-text");
        Day.className="account";
        Day.id="day";
        Day.setAttribute("gkeyboardtarget","qi");
        Day.setAttribute("textfieldcolor","blue");
        Day.setAttribute("bordercolor","red");
        Day.setAttribute("rotation","0 180 0");
        Day.setAttribute("borderscale","0.02 0.02 0.02");
        Day.setAttribute("borderwidth","2");
        Day.setAttribute("textcontent","2");
        Day.setAttribute("position","5.7 1.3 -3.227");

        var Month=document.createElement("input-text");
        Month.className="account";
        Month.id="month";
        Month.setAttribute("gkeyboardtarget","qi");
        Month.setAttribute("textfieldcolor","blue");
        Month.setAttribute("bordercolor","red");
        Month.setAttribute("rotation","0 180 0");
        Month.setAttribute("borderscale","0.02 0.02 0.02");
        Month.setAttribute("borderwidth","2");
        Month.setAttribute("textcontent","5");
        Month.setAttribute("position","5.65 1.3 -3.227");

        var Year=document.createElement("input-text");
        Year.className="account";
        Year.id="year";
        Year.setAttribute("gkeyboardtarget","qi");
        Year.setAttribute("textfieldcolor","green");
        Year.setAttribute("bordercolor","red");
        Year.setAttribute("rotation","0 180 0");
        Year.setAttribute("borderscale","0.02 0.02 0.02");
        Year.setAttribute("borderwidth","4");
        Year.setAttribute("textcontent","1970");
        Year.setAttribute("position","5.55 1.3 -3.227");

        var DateInfoLabel=document.createElement("a-text");
        DateInfoLabel.className="account";
        DateInfoLabel.setAttribute("scale", "0.2 0.2 0.2");
        DateInfoLabel.setAttribute("rotation","0 180 0");
        DateInfoLabel .setAttribute("color", "white");
        DateInfoLabel .setAttribute("value", "(Day/Month/Year)");
        DateInfoLabel.setAttribute("position","5.5 1.3 -3.227");
       
        var usernameLabel=document.createElement("a-text");
        usernameLabel.className="account";
        usernameLabel.setAttribute("scale", "0.2 0.2 0.2");
        usernameLabel.setAttribute("rotation","0 180 0");
        usernameLabel .setAttribute("color", "white");
        usernameLabel .setAttribute("value", "Username");
        usernameLabel.setAttribute("position","6 1.2 -3.227");

        var pasLabel=document.createElement("a-text");
        pasLabel.className="account";
        pasLabel.setAttribute("scale", "0.2 0.2 0.2");
        pasLabel.setAttribute("rotation","0 180 0");
        pasLabel .setAttribute("color", "white");
        pasLabel .setAttribute("value", "Password");
        pasLabel.setAttribute("position","6 1.1 -3.227");


        var User=document.createElement("input-text");
        User.className="account";
        User.id="username";
        User.setAttribute("gkeyboardtarget","qi");
        User.setAttribute("textfieldcolor","blue");
        User.setAttribute("bordercolor","red");
        User.setAttribute("rotation","0 180 0");
        User.setAttribute("borderscale","0.02 0.02 0.02");
        User.setAttribute("borderwidth","20");
        User.setAttribute("textcontent","gebru");
        User.setAttribute("position","5.4 1.2 -3.227");


        var Password=document.createElement("input-text");
        Password.className="account";
        Password.id="password";
        Password.setAttribute("gkeyboardtarget","qi");
        Password.setAttribute("textfieldcolor","blue");
        Password.setAttribute("bordercolor","red");
        Password.setAttribute("rotation","0 180 0");
        Password.setAttribute("borderscale","0.02 0.02 0.02");
        Password.setAttribute("borderwidth","20");
        Password.setAttribute("textcontent","wacht");
        Password.setAttribute("position","5.4 1.1 -3.227");


        var UpdateButton =document.createElement("a-plane");
        UpdateButton.className="account";
        UpdateButton.setAttribute("width","11");
        UpdateButton.setAttribute("height","2");
        UpdateButton.setAttribute("scale","0.05 0.05 0.05");
        UpdateButton.setAttribute("rotation","0 180 0");
        UpdateButton.setAttribute("color","darkgreen");
        UpdateButton.setAttribute("position","5.92 1 -3.227");
        UpdateButton.addEventListener("click",function(){
             var classname="account";
             var nextview="update";
             var arg="createaccount";
            temp.UpdateAccInformation(arg);
        });

        var UpdateLabel=document.createElement("a-text");
        UpdateLabel.className="account";
        UpdateLabel.setAttribute("scale", "0.2 0.2 0.2");
        UpdateLabel.setAttribute("rotation","0 180 0");
        UpdateLabel.setAttribute("color", "white");
        UpdateLabel.setAttribute("value", "Create Account");
        UpdateLabel.setAttribute("position","6.12 1 -3.227");
           
   
           
       
        var LogoutLabel=document.createElement("a-text");
        LogoutLabel.className="updateaccount";
        LogoutLabel.setAttribute("scale", "0.2 0.2 0.2");
        LogoutLabel.setAttribute("rotation","0 180 0");
        LogoutLabel.setAttribute("color", "white");
        LogoutLabel.setAttribute("value", "Log Out");
        LogoutLabel.setAttribute("position","5.12 2.1 -3.227");
     

     
        var logoutButton =document.createElement("a-plane");
        logoutButton.className="account";
        logoutButton.setAttribute("width","3");
        logoutButton.setAttribute("height","2");
        logoutButton.setAttribute("scale","0.05 0.05 0.05");
        logoutButton.setAttribute("rotation","0 180 0");
        logoutButton.setAttribute("color","lightblue");
        logoutButton.setAttribute("position","5.040 2.1 -3.227");
        logoutButton.addEventListener("click",function(){
             var classname="account";
             var nextview="login"
            temp.ClearData(classname,nextview);
        });
      

    
    
        document.getElementById("ascene").appendChild(FirstName);
        document.getElementById("ascene").appendChild(LastName);
        document.getElementById("ascene").appendChild(Gender);
        document.getElementById("ascene").appendChild(Email);
        document.getElementById("ascene").appendChild(CellPhone);
        document.getElementById("ascene").appendChild(PassPortNumber);
        document.getElementById("ascene").appendChild(Country);
        document.getElementById("ascene").appendChild(State);
        document.getElementById("ascene").appendChild(City);
        document.getElementById("ascene").appendChild(HouseNumber);
        document.getElementById("ascene").appendChild(Buss);
        document.getElementById("ascene").appendChild(PostCode);
        document.getElementById("ascene").appendChild(FirstNameText);
        document.getElementById("ascene").appendChild(LastNameText);
        document.getElementById("ascene").appendChild(DatOfBirthText);
        document.getElementById("ascene").appendChild(GenderText);
        document.getElementById("ascene").appendChild(EmailText);
        document.getElementById("ascene").appendChild(CellPhoneText);
        document.getElementById("ascene").appendChild(PassportNumberText);
        document.getElementById("ascene").appendChild(CountryText);
        document.getElementById("ascene").appendChild(StateText);
        document.getElementById("ascene").appendChild(CityText);
        document.getElementById("ascene").appendChild(StreetText);
        document.getElementById("ascene").appendChild(Street);
        document.getElementById("ascene").appendChild(HouseNumberText);
        document.getElementById("ascene").appendChild(BussNumberText);
        document.getElementById("ascene").appendChild(PostCodeText);
        document.getElementById("ascene").appendChild(UpdateButton);
        document.getElementById("ascene").appendChild(DateInfoLabel);
        document.getElementById("ascene").appendChild(UpdateLabel);
        document.getElementById("ascene").appendChild(Day);
        document.getElementById("ascene").appendChild(Month);
        document.getElementById("ascene").appendChild(Year);
        document.getElementById("ascene").appendChild(logoutButton);
        document.getElementById("ascene").appendChild(LogoutLabel);
        document.getElementById("ascene").appendChild(usernameLabel);
        document.getElementById("ascene").appendChild(pasLabel);
        document.getElementById("ascene").appendChild(User);
        document.getElementById("ascene").appendChild(Password);

    };


    // view to show information of the made booking and to finally palce the booking **
temp.PriceAndPlaceBooking=function(){

    var TitleTextLabel=document.createElement("a-text");
    TitleTextLabel.setAttribute("scale", "0.3 0.3 0.3");
    TitleTextLabel.className="comfirm";
    TitleTextLabel.setAttribute("rotation","0 180 0");
    TitleTextLabel.setAttribute("color", "white");
    TitleTextLabel.setAttribute("value", "Booking Info And Place Booking");
    TitleTextLabel.setAttribute("position","6.5 2 -3.227");
    console.log(" price and place booking" + JSON.stringify(temp.booking.roomPrice))
 
    //calculate the total days between checkin date and checkout date
    var totaldays=temp.CalculateDaysBetweenDates(temp.BookingTimeDates.CheckinTimeDate ,temp.BookingTimeDates.CheckoutTimeDate)
    
    t=JSON.stringify(temp.bookingdata);

    //calculate the total price of the booking period 
   var totalprice= temp.CalculateTotalPrice(totaldays,temp.booking.roomPrice);


   var RoomnameTextLabel=document.createElement("a-text");
   RoomnameTextLabel.setAttribute("scale", "0.2 0.2 0.2");
   RoomnameTextLabel.className="comfirm";
   RoomnameTextLabel.setAttribute("rotation","0 180 0");
   RoomnameTextLabel.setAttribute("color", "white");
   RoomnameTextLabel.setAttribute("value", "Room name :");
   RoomnameTextLabel.setAttribute("position","6.8 1.8 -3.227");

   var RoomnameLabel=document.createElement("a-text");
   RoomnameLabel.setAttribute("scale", "0.2 0.2 0.2");
   RoomnameLabel.className="comfirm";
   RoomnameLabel.setAttribute("rotation","0 180 0");
   RoomnameLabel.setAttribute("color", "white");
   RoomnameLabel.setAttribute("value", temp.booking.roomName);
   RoomnameLabel.setAttribute("position","6.5 1.8 -3.227");

   var RoomNumberTextLabel=document.createElement("a-text");
   RoomNumberTextLabel.setAttribute("scale", "0.2 0.2 0.2");
   RoomNumberTextLabel.className="comfirm";
   RoomNumberTextLabel.setAttribute("rotation","0 180 0");
   RoomNumberTextLabel.setAttribute("color", "white");
   RoomNumberTextLabel.setAttribute("value", "Room Number :");
   RoomNumberTextLabel.setAttribute("position","6.8 1.75 -3.227");

   var RoomNumberLabel=document.createElement("a-text");
   RoomNumberLabel.setAttribute("scale", "0.2 0.2 0.2");
   RoomNumberLabel.className="comfirm";
   RoomNumberLabel.setAttribute("rotation","0 180 0");
   RoomNumberLabel.setAttribute("color", "white");
   RoomNumberLabel.setAttribute("value", temp.booking.roomNumber);
   RoomNumberLabel.setAttribute("position","6.5 1.75 -3.227");

   var RoomTypeTextLabel=document.createElement("a-text");
   RoomTypeTextLabel.setAttribute("scale", "0.2 0.2 0.2");
   RoomTypeTextLabel.className="comfirm";
   RoomTypeTextLabel.setAttribute("rotation","0 180 0");
   RoomTypeTextLabel.setAttribute("color", "white");
   RoomTypeTextLabel.setAttribute("value", "Room Type :");
   RoomTypeTextLabel.setAttribute("position","6.8 1.70 -3.227");

   var RoomTypeLabel=document.createElement("a-text");
   RoomTypeLabel.setAttribute("scale", "0.2 0.2 0.2");
   RoomTypeLabel.className="comfirm";
   RoomTypeLabel.setAttribute("rotation","0 180 0");
   RoomTypeLabel.setAttribute("color", "white");
   RoomTypeLabel.setAttribute("value", temp.booking.roomType);
   RoomTypeLabel.setAttribute("position","6.5 1.70 -3.227");

   var BedNumberTextLabel=document.createElement("a-text");
   BedNumberTextLabel.setAttribute("scale", "0.2 0.2 0.2");
   BedNumberTextLabel.className="comfirm";
   BedNumberTextLabel.setAttribute("rotation","0 180 0");
   BedNumberTextLabel.setAttribute("color", "white");
   BedNumberTextLabel.setAttribute("value", "Bed Number :");
   BedNumberTextLabel.setAttribute("position","6.8 1.65 -3.227");

   var BedNumberLabel=document.createElement("a-text");
   BedNumberLabel.setAttribute("scale", "0.2 0.2 0.2");
   BedNumberLabel.className="comfirm";
   BedNumberLabel.setAttribute("rotation","0 180 0");
   BedNumberLabel.setAttribute("color", "white");
   BedNumberLabel.setAttribute("value", temp.booking.bedNumber);
   BedNumberLabel.setAttribute("position","6.5 1.65 -3.227");

   var BedTypeTextLabel=document.createElement("a-text");
   BedTypeTextLabel.setAttribute("scale", "0.2 0.2 0.2");
   BedTypeTextLabel.className="comfirm";
   BedTypeTextLabel.setAttribute("rotation","0 180 0");
   BedTypeTextLabel.setAttribute("color", "white");
   BedTypeTextLabel.setAttribute("value", "Bed Type :");
   BedTypeTextLabel.setAttribute("position","6.8 1.60 -3.227");

   var BedTypeLabel=document.createElement("a-text");
   BedTypeLabel.setAttribute("scale", "0.2 0.2 0.2");
   BedTypeLabel.className="comfirm";
   BedTypeLabel.setAttribute("rotation","0 180 0");
   BedTypeLabel.setAttribute("color", "white");
   BedTypeLabel.setAttribute("value", temp.booking.bedType);
   BedTypeLabel.setAttribute("position","6.5 1.60 -3.227");

   var BedBotTopTextLabel=document.createElement("a-text");
   BedBotTopTextLabel.setAttribute("scale", "0.2 0.2 0.2");
   BedBotTopTextLabel.className="comfirm";
   BedBotTopTextLabel.setAttribute("rotation","0 180 0");
   BedBotTopTextLabel.setAttribute("color", "white");
   BedBotTopTextLabel.setAttribute("value", "Bottom Or Top:");
   BedBotTopTextLabel.setAttribute("position","6.8 1.55 -3.227");

   var BedBotTopLabel=document.createElement("a-text");
   BedBotTopLabel.setAttribute("scale", "0.2 0.2 0.2");
   BedBotTopLabel.className="comfirm";
   BedBotTopLabel.setAttribute("rotation","0 180 0");
   BedBotTopLabel.setAttribute("color", "white");
   BedBotTopLabel.setAttribute("value", temp.booking.bottem_top);
   BedBotTopLabel.setAttribute("position","6.5 1.55 -3.227");

   var BookedDaysTextLabel=document.createElement("a-text");
   BookedDaysTextLabel.setAttribute("scale", "0.2 0.2 0.2");
   BookedDaysTextLabel.className="comfirm";
   BookedDaysTextLabel.setAttribute("rotation","0 180 0");
   BookedDaysTextLabel.setAttribute("color", "white");
   BookedDaysTextLabel.setAttribute("value", "Total Booked Days:");
   BookedDaysTextLabel.setAttribute("position","6.8 1.50 -3.227");

   var BookedDaysLabel=document.createElement("a-text");
   BookedDaysLabel.setAttribute("scale", "0.2 0.2 0.2");
   BookedDaysLabel.className="comfirm";
   BookedDaysLabel.setAttribute("rotation","0 180 0");
   BookedDaysLabel.setAttribute("color", "white");
   BookedDaysLabel.setAttribute("value", totaldays);
   BookedDaysLabel.setAttribute("position","6.4 1.50 -3.227");

   
   var TotalPriceTextLabel=document.createElement("a-text");
   TotalPriceTextLabel.setAttribute("scale", "0.2 0.2 0.2");
   TotalPriceTextLabel.className="comfirm";
   TotalPriceTextLabel.setAttribute("rotation","0 180 0");
   TotalPriceTextLabel.setAttribute("color", "white");
   TotalPriceTextLabel.setAttribute("value", "Total Price:");
   TotalPriceTextLabel.setAttribute("position","6.8 1.45 -3.227");

   var TotalPriceLabel=document.createElement("a-text");
   TotalPriceLabel.setAttribute("scale", "0.2 0.2 0.2");
   TotalPriceLabel.className="comfirm";
   TotalPriceLabel.setAttribute("rotation","0 180 0");
   TotalPriceLabel.setAttribute("color", "white");
   TotalPriceLabel.setAttribute("value", totalprice +" Euro");
   TotalPriceLabel.setAttribute("position","6.5 1.45 -3.227");

   var PlaceBookingTextLabel=document.createElement("a-text");
   PlaceBookingTextLabel.setAttribute("scale", "0.2 0.2 0.2");
   PlaceBookingTextLabel.className="comfirm";
   PlaceBookingTextLabel.setAttribute("rotation","0 180 0");
   PlaceBookingTextLabel.setAttribute("color", "white");
   PlaceBookingTextLabel.setAttribute("value", "Place Booking");
   PlaceBookingTextLabel.setAttribute("position","6.5 1.30 -3.227");

   var CancelTextLabel=document.createElement("a-text");
   CancelTextLabel.setAttribute("scale", "0.2 0.2 0.2");
   CancelTextLabel.className="comfirm";
   CancelTextLabel.setAttribute("rotation","0 180 0");
   CancelTextLabel.setAttribute("color", "white");
   CancelTextLabel.setAttribute("value", "Cancel Booking");
   CancelTextLabel.setAttribute("position","6.5 1.15 -3.227");

   var BookingButton =document.createElement("a-plane");
   BookingButton.className="comfirm";
   BookingButton.setAttribute("width","8");
   BookingButton.setAttribute("height","2");
   BookingButton.setAttribute("scale","0.05 0.05 0.05");
   BookingButton.setAttribute("rotation","0 180 0");
   BookingButton.setAttribute("color","darkgreen");
   BookingButton.setAttribute("position","6.35 1.30 -3.227");
   BookingButton.addEventListener("click",function(){

    temp.bookingdata.totalPrice=totalprice;
    data=JSON.stringify(temp.bookingdata);
    var classname="comfirm";
    var nextview="custommerbookings";

   temp.ClearView(this.className,nextview);
   });

   var HomeLabel=document.createElement("a-text");
   HomeLabel.className="updateaccount";
   HomeLabel.setAttribute("scale", "0.2 0.2 0.2");
   HomeLabel.setAttribute("rotation","0 180 0");
   HomeLabel.setAttribute("color", "white");
   HomeLabel.setAttribute("value", "Home");
   HomeLabel.setAttribute("position","5.4 2.1 -3.227");
      
  
   var LogoutLabel=document.createElement("a-text");
   LogoutLabel.className="updateaccount";
   LogoutLabel.setAttribute("scale", "0.2 0.2 0.2");
   LogoutLabel.setAttribute("rotation","0 180 0");
   LogoutLabel.setAttribute("color", "white");
   LogoutLabel.setAttribute("value", "Log Out");
   LogoutLabel.setAttribute("position","5.12 2.1 -3.227");

   var HomeButton =document.createElement("a-plane");
   HomeButton.className="comfirm";
   HomeButton.setAttribute("width","3");
   HomeButton.setAttribute("height","2");
   HomeButton.setAttribute("scale","0.05 0.05 0.05");
   HomeButton.setAttribute("rotation","0 180 0");
   HomeButton.setAttribute("color","lightblue");
   HomeButton.setAttribute("position","5.33 2.1 -3.227");
   HomeButton.addEventListener("click",function(){
        var classname="comfirm";
        var nextview="Home"
       temp.ClearView(classname,nextview);
   });

   var logoutButton =document.createElement("a-plane");
   logoutButton.className="comfirm";
   logoutButton.setAttribute("width","3");
   logoutButton.setAttribute("height","2");
   logoutButton.setAttribute("scale","0.05 0.05 0.05");
   logoutButton.setAttribute("rotation","0 180 0");
   logoutButton.setAttribute("color","lightblue");
   logoutButton.setAttribute("position","5.040 2.1 -3.227");
   logoutButton.addEventListener("click",function(){
        var classname="comfirm";
        var nextview="login"
       temp.ClearData(classname,nextview);
   });


   var CancelButton =document.createElement("a-plane");
   CancelButton.className="comfirm";
   CancelButton.setAttribute("width","8");
   CancelButton.setAttribute("height","2");
   CancelButton.setAttribute("scale","0.05 0.05 0.05");
   CancelButton.setAttribute("rotation","0 180 0");
   CancelButton.setAttribute("color","darkgreen");
   CancelButton.setAttribute("position","6.35 1.15 -3.227")
   CancelButton.addEventListener("click",function(){
    var classname="comfirm";
    var nextview="Home";

   temp.ClearView(this.className,nextview);
     });


   document.getElementById("ascene").appendChild(RoomnameLabel);
   document.getElementById("ascene").appendChild(RoomnameTextLabel);
   document.getElementById("ascene").appendChild(RoomNumberLabel);
   document.getElementById("ascene").appendChild(RoomNumberTextLabel);
   document.getElementById("ascene").appendChild(RoomNumberLabel);
   document.getElementById("ascene").appendChild(RoomNumberTextLabel);
   document.getElementById("ascene").appendChild(RoomTypeLabel);
   document.getElementById("ascene").appendChild(RoomTypeTextLabel);
   document.getElementById("ascene").appendChild(BedNumberLabel);
   document.getElementById("ascene").appendChild(BedNumberTextLabel);
   document.getElementById("ascene").appendChild(BedTypeLabel);
   document.getElementById("ascene").appendChild(BedTypeTextLabel);
   document.getElementById("ascene").appendChild(BedBotTopLabel);
   document.getElementById("ascene").appendChild(BedBotTopTextLabel);
   document.getElementById("ascene").appendChild(BookedDaysLabel);
   document.getElementById("ascene").appendChild(BookedDaysTextLabel);
   document.getElementById("ascene").appendChild(TotalPriceLabel);
   document.getElementById("ascene").appendChild(TotalPriceTextLabel);
   document.getElementById("ascene").appendChild(PlaceBookingTextLabel);
   document.getElementById("ascene").appendChild(CancelTextLabel);
   document.getElementById("ascene").appendChild(BookingButton);
   document.getElementById("ascene").appendChild(CancelButton);
   document.getElementById("ascene").appendChild(TitleTextLabel);
   document.getElementById("ascene").appendChild(HomeLabel);
   document.getElementById("ascene").appendChild(LogoutLabel);
   document.getElementById("ascene").appendChild(HomeButton);
   document.getElementById("ascene").appendChild(logoutButton);
   
};
temp.CustommerBookings=function(){

    http("http://localhost:59446/api/APIBooking/"+ temp.customerId.custId).get().then(function(result){

    });

   };
    return temp;
};

var customer={};
window.addEventListener("load",function(){

var renderview =RenderViews(); 
  
 renderview.LoginView();

    

});