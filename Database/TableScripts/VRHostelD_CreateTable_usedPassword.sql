use vrhosteldb;

set FOREIGN_KEY_CHECKS = 0;
drop table if exists `used password`;
create table `used password`(
`UsedPasswordID` int not null unique auto_increment, 
`AccountID` int not null , 
`Password`nvarchar(30) not null,

 constraint primary key(`UsedPasswordID`),
 constraint fk_UsedPasswordAcountID foreign key (`AccountID`) references `customer account`(`AccountID`));

set FOREIGN_KEY_CHECKS = 1;