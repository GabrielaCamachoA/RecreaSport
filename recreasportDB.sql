DROP DATABASE IF EXISTS recreasport;
CREATE DATABASE recreasport;
USE recreasport;

CREATE TABLE recreasport.districts (
  id_disctrict INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  PRIMARY KEY (id_disctrict));

CREATE TABLE `recreasport`.`neighborhoods` (
  `id_neighborhood` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `id_district` INT NOT NULL,
  PRIMARY KEY (`id_neighborhood`),
  INDEX `id_district_idx` (`id_district` ASC) VISIBLE,
  CONSTRAINT `id_district`
    FOREIGN KEY (`id_district`)
    REFERENCES `recreasport`.`districts` (`id_disctrict`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE);
    
CREATE TABLE `recreasport`.`venues` (
  `id_venue` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `address` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_venue`));

CREATE TABLE `recreasport`.`schedules` (
  `id_schedule` INT NOT NULL AUTO_INCREMENT,
  `time` DATETIME NOT NULL,
  PRIMARY KEY (`id_schedule`));

CREATE TABLE `recreasport`.`characterizations` (
  `id_characterization` INT NOT NULL AUTO_INCREMENT,
  `type_name` VARCHAR(55) NOT NULL,
  PRIMARY KEY (`id_characterization`));
  
CREATE TABLE `recreasport`.`roles` (
  `id_rol` INT NOT NULL,
  `name` VARCHAR(100) NULL,
  PRIMARY KEY (`id_rol`));
  
CREATE TABLE `recreasport`.`sports` (
  `id_sport` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `id_venue` INT NOT NULL,
  `id_schedule` INT NOT NULL,
  PRIMARY KEY (`id_sport`),
  INDEX `id_venue_idx` (`id_venue` ASC) VISIBLE,
  INDEX `id_schedule_idx` (`id_schedule` ASC) VISIBLE,
  CONSTRAINT `id_venue`
    FOREIGN KEY (`id_venue`)
    REFERENCES `recreasport`.`venues` (`id_venue`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `id_schedule`
    FOREIGN KEY (`id_schedule`)
    REFERENCES `recreasport`.`schedules` (`id_schedule`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE);
    
CREATE TABLE `recreasport`.`users` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `surname` VARCHAR(100) NOT NULL,
  `at_birthday` DATETIME NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `id_document_type` ENUM("CC", "TI", "PT", "CE") NOT NULL,
  `number_id` INT NOT NULL,
  `gender` ENUM("F", "M") NOT NULL,
  `id_characterization` INT NOT NULL,
  `id_rol` INT NOT NULL,
  PRIMARY KEY (`id_user`),
  INDEX `id_characterization_idx` (`id_characterization` ASC) VISIBLE,
  INDEX `id_rol_idx` (`id_rol` ASC) VISIBLE,
  CONSTRAINT `id_characterization`
    FOREIGN KEY (`id_characterization`)
    REFERENCES `recreasport`.`characterizations` (`id_characterization`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `id_rol`
    FOREIGN KEY (`id_rol`)
    REFERENCES `recreasport`.`roles` (`id_rol`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE);
    
CREATE TABLE `recreasport`.`trainers_sports(view)` (
  `id_trainer_sport` INT NOT NULL AUTO_INCREMENT,
  `id_sport` INT NOT NULL,
  `id_user` INT NOT NULL,
  PRIMARY KEY (`id_trainer_sport`),
  INDEX `id_sport_idx` (`id_sport` ASC) VISIBLE,
  INDEX `id_user_idx` (`id_user` ASC) VISIBLE,
  CONSTRAINT `id_sport`
    FOREIGN KEY (`id_sport`)
    REFERENCES `recreasport`.`sports` (`id_sport`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `id_user`
    FOREIGN KEY (`id_user`)
    REFERENCES `recreasport`.`users` (`id_user`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE);

CREATE TABLE `recreasport`.`contestants(view)` (
  `id_contestant` INT NOT NULL AUTO_INCREMENT,
  `id_user_contestants` INT NOT NULL,
  PRIMARY KEY (`id_contestant`),
  INDEX `id_user_idx` (`id_user_contestants` ASC) VISIBLE,
  CONSTRAINT `id_user_contestants`
    FOREIGN KEY (`id_user_contestants`)
    REFERENCES `recreasport`.`users` (`id_user`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE);
    
CREATE TABLE `recreasport`.`inscriptions` (
  `id_inscription` INT NOT NULL AUTO_INCREMENT,
  `at_inscription` DATETIME NOT NULL,
  `id_neighborhood` INT NOT NULL,
  `id_contestant` INT NOT NULL,
  PRIMARY KEY (`id_inscription`),
  INDEX `id_neighborhood_idx` (`id_neighborhood` ASC) VISIBLE,
  INDEX `id_contestant_idx` (`id_contestant` ASC) VISIBLE,
  CONSTRAINT `id_neighborhood`
    FOREIGN KEY (`id_neighborhood`)
    REFERENCES `recreasport`.`neighborhoods` (`id_neighborhood`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `id_contestant`
    FOREIGN KEY (`id_contestant`)
    REFERENCES `recreasport`.`contestants(view)` (`id_contestant`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE);


    


    

  

    
    

