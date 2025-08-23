DROP DATABASE IF EXISTS recreasport;
CREATE DATABASE recreasport;
USE recreasport;

-- catalog entities

-- TABLE #1 
-- related to table #8
CREATE TABLE Districts (
  id_disctrict INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  codename VARCHAR(45) NOT NULL,
  PRIMARY KEY (id_disctrict)
);

-- TABLE #2
-- related to table #12
CREATE TABLE Venues (
  id_venue INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  address VARCHAR(100) NOT NULL,
  capacity INT NOT NULL,
  PRIMARY KEY (id_venue)
);

-- TABLE #3 
-- related to table #12
CREATE TABLE Schedules (
  id_schedule INT NOT NULL AUTO_INCREMENT,
  start_date DATETIME NOT NULL,
  end_date DATETIME NOT NULL,
  PRIMARY KEY (id_schedule)
);

-- TABLE #4 
-- related to table #9
CREATE TABLE Demographics (
  id_demographic INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  codename VARCHAR(45) NOT NULL UNIQUE,
  PRIMARY KEY (id_demographic)
);

-- TABLE #5
-- related to table #9
CREATE TABLE Roles (
  id_rol INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  codename VARCHAR(45) NOT NULL UNIQUE,
  PRIMARY KEY (id_rol)
);

-- TABLE #6
-- related to table #9
CREATE TABLE Document_types (
  id_document_type INT AUTO_INCREMENT,
  name VARCHAR(50),
  codename VARCHAR(5) NOT NULL UNIQUE,
  PRIMARY KEY (id_document_type)
);

-- TABLE #7
-- related to table #9
CREATE TABLE Genders(
  id_gender INT AUTO_INCREMENT,
  name VARCHAR(50),
  codename VARCHAR(5) NOT NULL UNIQUE,
  PRIMARY KEY (id_gender)
);


-- strong entities

-- table #8
-- related to table #13
CREATE TABLE Neighborhoods (
  id_neighborhood INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  id_disctrict INT NOT NULL,
  PRIMARY KEY (id_neighborhood),
  FOREIGN KEY (id_disctrict) REFERENCES Districts(id_disctrict)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

-- table #9
-- related to table #10 and #11
CREATE TABLE Users(
  id_user INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  surname VARCHAR(100) NOT NULL,
  at_birthday DATE NOT NULL,
  phone VARCHAR(50) NOT NULL,
  id_document_type INT NOT NULL,
  number_id VARCHAR(50) NOT NULL,
  id_gender INT NOT NULL,
  id_demographic INT NOT NULL,
  id_rol INT NOT NULL,
  PRIMARY KEY (id_user),
  FOREIGN KEY (id_document_type) REFERENCES Document_types(id_document_type)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  FOREIGN KEY (id_gender) REFERENCES Genders(id_gender)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
   FOREIGN KEY (id_demographic) REFERENCES Demographics(id_demographic)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  FOREIGN KEY (id_rol) REFERENCES Roles(id_rol)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

-- table #10
-- related to table #12
CREATE TABLE Trainers(
  id_trainer INT NOT NULL AUTO_INCREMENT,
  id_user INT NOT NULL,
  PRIMARY KEY (id_trainer),
  FOREIGN KEY (id_user) REFERENCES Users(id_user)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

-- table #11
-- related to table #13
CREATE TABLE Contestants(
  id_contestants INT NOT NULL AUTO_INCREMENT,
  id_user INT NOT NULL,
  PRIMARY KEY (id_contestants),
  FOREIGN KEY (id_user) REFERENCES Users(id_user)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

-- table #12
-- related to table #13
CREATE TABLE Sports(
  id_sport INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  codename VARCHAR(45) NOT NULL,
  id_trainer INT NOT NULL,
  id_venue INT NOT NULL,
  id_schedule INT NOT NULL,
  PRIMARY KEY (id_sport),
  FOREIGN KEY (id_trainer) REFERENCES Trainers(id_trainer)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  FOREIGN KEY (id_venue) REFERENCES Venues(id_venue)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  FOREIGN KEY (id_schedule) REFERENCES Schedules(id_schedule)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

-- table #13
CREATE TABLE Inscriptions(
  id_inscription INT NOT NULL AUTO_INCREMENT,
  at_inscription DATETIME NOT NULL,
  id_neighborhood INT NOT NULL,
  id_contestants INT NOT NULL,
  id_sport INT NOT NULL,
  PRIMARY KEY (id_inscription),
  FOREIGN KEY (id_neighborhood) REFERENCES Neighborhoods(id_neighborhood)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  FOREIGN KEY (id_contestants) REFERENCES Contestants(id_contestants)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  FOREIGN KEY (id_sport) REFERENCES Sports(id_sport)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

