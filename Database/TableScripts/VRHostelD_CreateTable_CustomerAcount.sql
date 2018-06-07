use vrhosteldb;

set FOREIGN_KEY_CHECKS = 0;
drop table if exists `customer account`;
create table `customer account`(
`AccountID` int not null unique auto_increment, 
 `CustomerID` int not null,
 `Paswoord` nvarchar(20) not null , 
 `Username` nvarchar (20)not null, 
 `IsActive` varchar (5) not null, 
 


 constraint primary key(`AccountID`),
 constraint fk_CustomerCustomerID foreign key (`CustomerID`) references `customer`(`CustomerID`));

 

 
 
set FOREIGN_KEY_CHECKS = 1;