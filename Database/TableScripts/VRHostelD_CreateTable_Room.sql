use vrhosteldb;

set FOREIGN_KEY_CHECKS = 0;
drop table if exists `Room`;
create table room(
`RoomID` int not null unique auto_increment, 
 `RoomType` nvarchar(20) not null,
 `RoomName` nvarchar(20) not null , 
 `Total bed count` int (10)not null, 
 `Free Beds` int (10) not null, 
 `Reserved beds` int(10) not null,

 constraint primary key(`RoomID`));

set FOREIGN_KEY_CHECKS = 1;