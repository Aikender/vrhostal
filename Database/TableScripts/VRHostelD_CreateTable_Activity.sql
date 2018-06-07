use vrhosteldb;

set FOREIGN_KEY_CHECKS = 0;
drop table if exists `activity`;
create table `acitvity`(
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