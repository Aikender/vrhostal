use  vrhosteldb;
set FOREIGN_KEY_CHECKS = 0;
drop table if exists `Hostel`;
create table Hostel(
 `HostelID` int not null auto_increment unique,
 `Hostel Name` nvarchar(30) not null,
 `Country` nvarchar(50) not null, 
 `City` nvarchar(50) not null,
 `Street` nvarchar (50)not null, 
 `Number` int(10) not null, 
 `Postal Code` int(10) not null,
 `Phone Number` int(40) not null, 
 `Email` varchar(30) not null, 
 

 constraint primary key(`HostelID`));
 
 
 
set FOREIGN_KEY_CHECKS = 1;