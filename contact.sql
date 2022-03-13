
-- -----------------------------------------------------
-- Schema contact
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS contact DEFAULT CHARACTER SET utf8 ;
USE contact ;

-- -----------------------------------------------------
-- Table contact
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS contact (
  contact_id INT NOT NULL AUTO_INCREMENT,
  contact_name VARCHAR(45) NOT NULL,
  contact_email VARCHAR(45) NOT NULL,
  contact_tel INT NOT NULL,
  contact_date_birth DATETIME NOT NULL,
  PRIMARY KEY (`contact_id`)
) ENGINE = InnoDB;

INSERT INTO contact (contact_name, contact_email, contact_tel, contact_date_birth)
VALUES ('Maria', 'maria@hotmail.com',4555665,'1997-12-04')
