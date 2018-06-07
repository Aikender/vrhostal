use vrhosteldb;
Drop procedure if exists `EmployeeInsert`;
delimiter //

create procedure `EmployeeInsert`(
 
 in hostelID int,
 in firstName nvarchar(50),
 in lastName nvarchar(50),
 in dateOfBirth date,
 in gender nvarchar(3),
 in passportNumber varchar(20),
 in email varchar (30),
 in cellPhone int(40),
 in country nvarchar(50),
 in state nvarchar(50),
 in city nvarchar(50),
in street nvarchar(50),
 in number int(10),
 in buss nvarchar(20),
 in postalCode int(20),
 in username nvarchar(20),
 in passwoord nvarchar(20),

 
 out employeeID int
 )
begin
insert into `employee`
(
  `employee`.`HostelID`,
  `employee`.`FirstName`,
  `employee`.`LastName`,
  `employee`.`DateOfBirth`,
  `employee`.`Gender`,
  `employee`.`Passport Number`,
  `employee`.`Email`,
  `employee`.`Cell Phone`,
  `employee`.`Country`,
  `employee`.`State`,
  `employee`.`City`,
  `employee`.`Street`,
  `employee`.`Number`,
  `employee`.`Buss`, 
  `employee`.`Postalcode`,
  `employee`.`username`,
  `employee`.`password`
  
)
 values(
  hostelID ,
  firstName,
  lastName ,
  dateOfBirth, 
  gender, 
  passportNumber, 
  email, 
  cellPhone,
  country, 
  state,
  city, 
  street, 
  number,
  buss,
  postalCode,
  username,
  passwoord
  
 );

end//

delimiter ;
