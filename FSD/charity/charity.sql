create database charity2;
use charity2;

CREATE TABLE donors (
  email VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  cpassword VARCHAR(255) NOT NULL,
  confirmPassword VARCHAR(255) NOT NULL,
  UNIQUE KEY email_UNIQUE (email)
);
select * from donors;

CREATE TABLE NGO (
  email VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  cpassword VARCHAR(255) NOT NULL,
  confirmPassword VARCHAR(255) NOT NULL,
  UNIQUE KEY email_UNIQUE (email)
);
select * from NGO;

CREATE TABLE ADMIN (
  email VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  cpassword VARCHAR(255) NOT NULL,
  confirmPassword VARCHAR(255) NOT NULL,
  UNIQUE KEY email_UNIQUE (email)
);
select * from ADMIN;


CREATE TABLE donations (
  NGOEmail VARCHAR(255) NOT NULL,
  DONOREmail VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  gender VARCHAR(255) NOT NULL,
  Donation VARCHAR(255) NOT NULL,
  FOREIGN KEY (NGOEmail) REFERENCES NGO(email),
  FOREIGN KEY (DONOREmail) REFERENCES donors(email)
);
select * from donations;

CREATE TABLE review_results (
  NGOEmail VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  status VARCHAR(255) NOT NULL,
  age VARCHAR(255) NOT NULL,
  gender VARCHAR(255) NOT NULL,
  Availability VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  Medical_History VARCHAR(255) NOT NULL,
  Preferences VARCHAR(255) NOT NULL,
  FOREIGN KEY (NGOEmail) REFERENCES NGO(email)
);
select * from review_results;

CREATE TABLE childs (
  NGOEmail VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  gender VARCHAR(255) NOT NULL,
  age VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  Medical_History VARCHAR(255) NOT NULL,
  Availability VARCHAR(255) NOT NULL,
  Preferences VARCHAR(255) NOT NULL,
  FOREIGN KEY (NGOEmail) REFERENCES NGO(email)
);
select * from childs;

CREATE TABLE parents (
  email VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  cpassword VARCHAR(255) NOT NULL,
  confirmPassword VARCHAR(255) NOT NULL,
  UNIQUE KEY email_UNIQUE (email)
);
select * from parents;

CREATE TABLE adoptedChilds (
  parentEmail VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  gender VARCHAR(255) NOT NULL,
  age VARCHAR(255) NOT NULL,
  FOREIGN KEY (parentEmail) REFERENCES parents(email),
  FOREIGN KEY (NGOEmail) REFERENCES NGO(email)
);
select * from adoptedchilds;



drop table review_results;
drop table donations;
drop table ADMIN;
drop table donors;
drop table NGOs;
drop table parents;
drop table adoptedchilds;
drop table childs;

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
-- Call the stored procedure to update a donor's email address
CALL update_donor_email('def@gmail.com', 'def123@gmail.com');

-- Trigger
DELIMITER $$
-- Define a trigger that checks if a donor's email address is valid
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