use vrhosteldb;

drop procedure if exists `HostelDelete`
delimiter //
create procedure `HostelDelete`
(
   hostelID int
)
begin
 delete from `hostel`
 where `hostel`.`HostelID` =hostelID;
end//

delimiter ;