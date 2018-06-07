use vrhosteldb;

set FOREIGN_KEY_CHECKS = 0;
drop table if exists `username`;
create table `username`(
`UserNameID` int not null unique auto_increment, 
`User Name`nvarchar(30) not null,
`Email` nvarchar(30)  not null,

 constraint primary key(`UserNameID`)); 

set FOREIGN_KEY_CHECKS = 1;