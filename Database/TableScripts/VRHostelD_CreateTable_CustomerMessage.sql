use vrhosteldb;

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
 constraint fk_CustomerMessageAccountID foreign key (`AccountID`) references `customer account`(`AccountID`));

set FOREIGN_KEY_CHECKS = 1;