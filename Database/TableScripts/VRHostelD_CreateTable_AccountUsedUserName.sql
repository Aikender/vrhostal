use vrhosteldb;

set FOREIGN_KEY_CHECKS = 0;
drop table if exists `Used User Name`;
create table `Used User Name`(
`UsedUserNameID` int not null unique auto_increment, 
`AccountID`int not null,
`UserNameID` int not null,
`Status User Name` nvarchar(10) not null,

 constraint primary key(`UsedUserNameID`), 
 constraint fk_UsedUserNameAccountID foreign key (`AccountID`) references `customer account`(`AccountID`),
 constraint fk_UsedUserNameUserNameID foreign key (`UserNameID`) references `username`(`UserNameID`));
 
set FOREIGN_KEY_CHECKS = 1;