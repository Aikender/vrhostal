use vrhosteldb;

set FOREIGN_KEY_CHECKS = 0;
drop table if exists `customer`;
create table customer(
 `CustomerID` int not null auto_increment unique , 
 `HostelID` int not null, 
 `AccountID` int null unique,
 `FirstName` nvarchar (50)not null, 
 `LastName` nvarchar (50) not null, 
 `DateOfBirth` date not null,
 `Gender` nvarchar(3) not null, 
 `Cell Phone` int(40) null, 
 `Passport Number`nvarchar(20) not null,
 `Country` nvarchar(50) not  null, 
 `State`nvarchar(50) null, `City` nvarchar(50) not null, 
 `Street`nvarchar(50) not null, `Number`nvarchar(20) not null, 
 `Buss`  nvarchar(20) null, `Postalcode` int(20) not null,
 `Has an Account` nvarchar(10) not null, 

 constraint primary key(`CustomerID`), 
 constraint fk_CustomerHostelID foreign key (`HostelID`) references `Hostel`(`HostelID`), 
 constraint fk_CustomerAcountID foreign key (`AccountID`) references `CustomerAcount`(`AccountID`));
 
set FOREIGN_KEY_CHECKS = 1;
