use vrhosteldb;
Drop procedure if exists `insertHostel`;
delimiter //

create procedure `insertHostel`(
 
 in hostelName nvarchar(30),
 in country nvarchar(50),
 in city nvarchar(50),
 in street nvarchar(50),
 in number int(10),
 in postalCode int(10),
 in phoneNumber int (40),
 in email varchar (30),
 out hostelID int
 
 )
begin
insert into `hostel`
(
  `hostel`.`Hostel Name`,
  `hostel`.`Country`,
  `hostel`.`City`,
  `hostel`.`Street`,
  `hostel`.`Number`,
  `hostel`.`Postal Code`,
  `hostel`.`Phone Number`,
  `hostel`.`Email`
  
  
)
 values(
   hostelName,
   country,
   city,
   street,
   number,
   postalCode,
   phoneNumber,
   email
 );

end//

delimiter ;



