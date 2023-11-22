create database charity1;
use charity1;

CREATE TABLE donors (
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL PRIMARY KEY,
  cpassword VARCHAR(255) NOT NULL,
  confirmPassword VARCHAR(255) NOT NULL
);
select * from donors;

CREATE TABLE NGO (
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL PRIMARY KEY,
  cpassword VARCHAR(255) NOT NULL,
  confirmPassword VARCHAR(255) NOT NULL
);
select * from NGO;

CREATE TABLE ADMIN (
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL PRIMARY KEY,
  cpassword VARCHAR(255) NOT NULL,
  confirmPassword VARCHAR(255) NOT NULL
);
select * from ADMIN;

CREATE TABLE project (
  NGOEmail VARCHAR(255) NOT NULL,
  projectname VARCHAR(255) NOT NULL,
  filename VARCHAR(255) NOT NULL,
  pptData LONGBLOB NOT NULL,
  PRIMARY KEY (NGOEmail, projectname),
  FOREIGN KEY (NGOEmail) REFERENCES NGO(email)
);
select * from project;

CREATE TABLE donations (
  NGOEmail VARCHAR(255) NOT NULL,
  DONOREmail VARCHAR(255) NOT NULL,
  projectname VARCHAR(255) NOT NULL,
  Donation VARCHAR(255) NOT NULL,
  PRIMARY KEY (NGOEmail, DONOREmail, projectname),
  FOREIGN KEY (NGOEmail) REFERENCES NGO(email),
  FOREIGN KEY (DONOREmail) REFERENCES donors(email)
);
select * from donations;

CREATE TABLE review_results (
  NGOEmail VARCHAR(255) NOT NULL,
  projectname VARCHAR(255) NOT NULL,
  status VARCHAR(255) NOT NULL,
  PRIMARY KEY (NGOEmail, projectname),
  FOREIGN KEY (NGOEmail) REFERENCES NGO(email)
);
select * from review_results;

drop table project;
drop table review_results;
drop table donations;
drop table ADMIN;
drop table donors;
drop table NGO;

-- stored procedure
DELIMITER $$
--  A stored procedure that updates a student's email address
CREATE PROCEDURE update_donor_email(
  IN old_email VARCHAR(255),
  IN new_email VARCHAR(255)
)
BEGIN
  -- Update the email address for the specified student
  UPDATE donors SET email = new_email WHERE email = old_email;
END$$
DELIMITER ;
-- Call the stored procedure to update a student's email address
CALL update_donor_email('def@gmail.com', 'def123@gmail.com');

-- Trigger
DELIMITER $$
-- Define a trigger that checks if a student's email address is valid
CREATE TRIGGER validate_email
BEFORE INSERT ON donors
FOR EACH ROW
BEGIN
  -- Check if the email address is valid
  IF NOT REGEXP_LIKE(NEW.email, '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$') THEN
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Invalid email address';
  END IF;
END $$
DELIMITER ;
INSERT INTO donors (name, email, cpassword, confirmPassword, createdAt,updatedAt)
VALUES ('Ayan Bhaskar', 'ayangmail.com', 'password123', 'password123', NOW(),NOW());