CREATE DATABASE burgers_db;

USE burgers_db;

# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
id INT(10) AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR(255) NOT NULL,
devoured boolean NOT NULL default 0
);