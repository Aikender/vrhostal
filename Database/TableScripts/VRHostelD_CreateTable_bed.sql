use vrhosteldb;

set FOREIGN_KEY_CHECKS = 0;
drop table if exists `bed`;
create table bed(
`BedID` int not null unique auto_increment, 
 `RoomID` int not null,
 `bed price` int(10) not null , 
 `bed type` nvarchar(20) not null, 
 `Bed Status` nvarchar(20) not null,

 constraint primary key(`BedID`), 
 constraint fk_BedRoomID foreign key (`RoomID`) references `Room`(`RoomID`));

set FOREIGN_KEY_CHECKS = 1;