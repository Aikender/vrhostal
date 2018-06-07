use  vrhosteldb;
set FOREIGN_KEY_CHECKS = 0;
drop table if exists `employee`;
create table employee(
 `EmployeeID` int not null auto_increment , 
 `HostelID` int not null, 
 `FirstName` nvarchar (50)not null, 
 `LastName` nvarchar (50) not null, 
 `DateOfBirth` date not null,
 `Gender` nvarchar(3) not null, 
 `Passport Number`nvarchar(20) not null,
 `Email` nvarchar(30) not null,
 `Cell Phone` int(40) null, 
 `Country` nvarchar(50) not  null, 
 `State`nvarchar(50) null, `City` nvarchar(50) not null, 
 `Street`nvarchar(50) not null, `Number`nvarchar(20) not null, 
 `Buss`  nvarchar(20) null, `Postalcode` int(20) not null,

 constraint primary key(`EmployeeID`), 
 constraint fk_EmployeeHostelID foreign key (`HostelID`) references `Hostel`(`HostelID`)); 
 
 
 set FOREIGN_KEY_CHECKS = 1;