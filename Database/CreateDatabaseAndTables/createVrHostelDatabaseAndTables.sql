drop database if exists vrhosteldb;
create database vrhosteldb;

use vrhosteldb;

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
 `username`nvarchar(20) not null unique,
 `password`nvarchar(20) not null unique,
 

 constraint primary key(`EmployeeID`), 
 constraint fk_EmployeeHostelID foreign key (`HostelID`) references `Hostel`(`HostelID`)); 
 
 set FOREIGN_KEY_CHECKS = 1;
 
 set FOREIGN_KEY_CHECKS = 0;

drop table if exists `opening hours`;
create table `opening hours`(
`Weekday` varchar(20) unique not null,
`HostelID` int not null,
`Mornig`time not null,
`Evening`time not null,

constraint primary key(`Weekday`),
constraint fk_openinghoursHostelID foreign key(`HostelID`) references hostel(`HostelID`));


set FOREIGN_KEY_CHECKS = 1;

set FOREIGN_KEY_CHECKS = 0;
drop table if exists `opening period`;
create table `opening period`(
`Month` int not null unique, 
`HostelID`int not null,
`Date` date not null,
`Open/Closed` nvarchar(10) not null , 



 constraint primary key(`Month`), 
 constraint fk_OpeningHostelID foreign key (`HostelID`) references `hostel`(`HostelID`));
 
set FOREIGN_KEY_CHECKS = 1;

set FOREIGN_KEY_CHECKS = 0;
drop table if exists `customer`;
create table customer(
 `CustomerID` int not null auto_increment unique , 
 `HostelID` int not null, 
`Email` nvarchar(30) not null,
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
 

 constraint primary key(`CustomerID`), 
 constraint fk_CustomerHostelID foreign key (`HostelID`) references `Hostel`(`HostelID`));
 
 
set FOREIGN_KEY_CHECKS = 1;

set FOREIGN_KEY_CHECKS = 0;
drop table if exists `customeraccount`;
create table `customeraccount`(
`AccountID` int not null unique auto_increment, 
 `CustomerID` int not null unique,
 `Paswoord` nvarchar(20) not null unique , 
 `Username` nvarchar (20)not null unique, 
 `IsActive` varchar (5) not null, 

 constraint primary key(`AccountID`),
 constraint fk_CustomerCustomerID foreign key (`CustomerID`) references `customer`(`CustomerID`));


set FOREIGN_KEY_CHECKS = 1;

set FOREIGN_KEY_CHECKS = 0;
drop table if exists `usedpassword`;
create table `used password`(
`UsedPasswordID` int not null unique auto_increment, 
`AccountID` int not null , 
`Password`nvarchar(30) not null,

 constraint primary key(`UsedPasswordID`),
 constraint fk_UsedPasswordAcountID foreign key (`AccountID`) references `customeraccount`(`AccountID`));

set FOREIGN_KEY_CHECKS = 1;

set FOREIGN_KEY_CHECKS = 0;
drop table if exists `Used User Name`;
create table `Used User Name`(
`UsedUserNameID` int not null unique auto_increment, 
`AccountID`int not null,
`UserNameID` int not null,
`Status User Name` nvarchar(10) not null,

 constraint primary key(`UsedUserNameID`), 
 constraint fk_UsedUserNameAccountID foreign key (`AccountID`) references `customeraccount`(`AccountID`),
 constraint fk_UsedUserNameUserNameID foreign key (`UserNameID`) references `username`(`UserNameID`));
 
set FOREIGN_KEY_CHECKS = 1;

set FOREIGN_KEY_CHECKS = 0;
drop table if exists `username`;
create table `username`(
`UserNameID` int not null unique auto_increment, 
`User Name`nvarchar(30) not null,
`Email` nvarchar(30)  not null,

 constraint primary key(`UserNameID`)); 

set FOREIGN_KEY_CHECKS = 1;

set FOREIGN_KEY_CHECKS = 0;
drop table if exists `booking`;
create table booking(
`BookingID` int not null unique auto_increment, 
 `AccountID` int not null,
 `CustomerID` int not null , 
 `RoomID` int (10)not null, 
 `BedID` int (10) not null, 
 `Checkin Date` date not null, 
 `CheckOut Date` date not null,
 `Totalprice`int not null,


 constraint primary key(`BookingID`), 
 constraint fk_BookingAcountID foreign key (`AccountID`) references `customeraccount`(`AccountID`));
 

 
set FOREIGN_KEY_CHECKS = 1;


set FOREIGN_KEY_CHECKS = 0;
drop table if exists `bed`;
create table bed(
`BedID` int not null unique auto_increment, 
 `RoomID` int not null, 
 `bed type` nvarchar(20) not null, 
 `Bed Number` int(4) not null ,
 `Bottem_top`nvarchar(10),

 constraint primary key(`BedID`), 
 constraint fk_BedRoomID foreign key (`RoomID`) references `Room`(`RoomID`));

set FOREIGN_KEY_CHECKS = 1;

set FOREIGN_KEY_CHECKS = 0;
drop table if exists `Room`;
create table room(
`RoomID` int not null unique auto_increment, 
 `RoomType` nvarchar(20) not null,
 `RoomName` nvarchar(20) not null , 
 `RoomNumber` int (10)not null, 
 `RoomPrice` int (3)not null, 
 `TotalsleepPlaces` int (10)not null, 
 
 

 constraint primary key(`RoomID`));

set FOREIGN_KEY_CHECKS = 1;

set FOREIGN_KEY_CHECKS = 0;
drop table if exists `activity`;
create table `activity`(
`ActivityID` int not null unique auto_increment, 
`HostelID` int not null,
`Name`nvarchar(30) not null,
`Description` nvarchar(500) not null,
`Date of Activity` date not null , 
`Time of Activity` time not null,
`Price` int(10) not null,
 
 constraint primary key(`ActivityID`), 
 constraint fk_ActivityHostelID foreign key (`HostelID`) references `hostel`(`HostelID`));
 
set FOREIGN_KEY_CHECKS = 1;

set FOREIGN_KEY_CHECKS = 0;
drop table if exists `activity review message`;
create table `activity review message`(
`ReviewMessageID` int not null unique auto_increment, 
`ActivityID` int not null,
`AccountID`int not null,
`Message Code` nvarchar(10) not null,
`Message`nvarchar(500)not null,
`Posted Date` date not null , 
`Posted Time` time not null,
`Activity Score` int(10) not null,

constraint primary key(`ReviewMessageID`), 
constraint fk_ActivityReviewActivityID foreign key (`ActivityID`) references `activity`(`ActivityID`),
constraint fk_ActivityReviewAccountID foreign key (`AccountID`) references `customeraccount`(`AccountID`));

set FOREIGN_KEY_CHECKS = 1;


set FOREIGN_KEY_CHECKS = 0;
drop table if exists `hostel review message`;
create table `hostel review message`(
`HostelReviewID` int not null unique auto_increment, 
`HostelID` int not null,
`AccountID`int not null,
`Message Code` nvarchar(10) not null,
`Message`nvarchar(500) not null,
`Posted Date` date not null , 
`Posted Time` time not null,
`Hostel Score` int(10) not null,
 
 constraint primary key(`HostelReviewID`), 
 constraint fk_HostelReviewHostelID foreign key (`HostelID`) references `hostel`(`HostelID`),
 constraint fk_HostelReviewAccountID foreign key (`AccountID`) references `customeraccount`(`AccountID`));

set FOREIGN_KEY_CHECKS = 1;

set FOREIGN_KEY_CHECKS = 0;
drop table if exists `customer message`;
create table `customer message`(
`CstMessageID` int not null unique auto_increment, 
`HostelID` int not null,
`AccountID`int not null,
`Message Code` nvarchar(10) not null,
`Message`nvarchar(500) not null,
`Posted Date` date not null , 
`Posted Time` time not null,
`Hostel Score` int(10) not null,

 constraint primary key(`CstMessageID`), 
 constraint fk_CustomerMessageHostelID foreign key (`HostelID`) references `hostel`(`HostelID`),
 constraint fk_CustomerMessageAccountID foreign key (`AccountID`) references `customeraccount`(`AccountID`));

set FOREIGN_KEY_CHECKS = 1;
set FOREIGN_KEY_CHECKS = 0;
drop table if exists `BookedBeds`;
create table`BookedBeds`(

`bookedBedsID` int not null unique auto_increment,
`bookingID`int not null,
`bedID`int not null,
`check_In`date not null,
`Check_Out` date not null,


 constraint primary key(`bookedBedsID`),
 constraint fk_BookedBedsBookingID foreign key(`bookingID`) references `booking`(`BookingID`),
 constraint fk_BookedBedsBedID foreign key(`bedID`) references `bed`(`BedId`))