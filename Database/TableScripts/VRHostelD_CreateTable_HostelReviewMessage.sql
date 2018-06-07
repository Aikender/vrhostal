use vrhosteldb;

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
 constraint fk_HostelReviewAccountID foreign key (`AccountID`) references `customer account`(`AccountID`));

set FOREIGN_KEY_CHECKS = 1;