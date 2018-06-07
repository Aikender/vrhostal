use vrhosteldb;

set FOREIGN_KEY_CHECKS = 0;
drop table if exists `booking`;
create table booking(
`BookingID` int not null unique auto_increment, 
 `AccountID` int not null,
 `CustomerID` int not null , 
 `RoomID` int (10)not null, 
 `BedID` int (10) not null, 
 `Staying Nights` int(10) not null,
 `Checkin Date` date not null, 
 `CheckOut Date` date not null,
 `Estimated ArivalTime` time not null,

 constraint primary key(`BookingID`), 
 constraint fk_BookingAcountID foreign key (`AccountID`) references `customer account`(`AccountID`),
 constraint fk_BookingCustomerID foreign key (`CustomerID`) references `customer`(`CustomerID`),
 constraint fk_RoomID foreign key (`RoomID`) references `bed`(`RoomID`),
 constraint fk_BedID foreign key (`BedID`) references `bed`(`BedID`));
 
set FOREIGN_KEY_CHECKS = 1;