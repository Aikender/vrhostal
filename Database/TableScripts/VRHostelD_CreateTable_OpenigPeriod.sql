use vrhosteldb;

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