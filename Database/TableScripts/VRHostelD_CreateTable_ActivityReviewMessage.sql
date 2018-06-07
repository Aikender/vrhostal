use vrhosteldb;

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