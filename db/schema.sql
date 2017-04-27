CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
id INT(10) AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR(40),
devoured boolean NOT NULL default 0,
-- found online, says when something is changed in the row the timestamp will also change
date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
)