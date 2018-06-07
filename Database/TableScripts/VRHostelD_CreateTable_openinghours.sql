
use vrhosteldb;

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