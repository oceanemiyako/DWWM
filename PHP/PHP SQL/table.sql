CREATE DATABASE IF NOT EXISTS exercice02 CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

       USE exercice02;

CREATE TABLE client (
     id INT AUTO_INCREMENT PRIMARY KEY,
    last_name VARCHAR(50) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    adress VARCHAR(250) NOT NULL ,
    codePostal VARCHAR(250) NOT NULL,
    city VARCHAR(50) NOT NULL,
    numberPhone VARCHAR(25) NOT NULL
);

CREATE TABLE command (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT AUTO_INCREMENT NOT NULL,
    date DATETIME NOT NULL,
    total DECIMAL NOT NULL,
    FOREIGN KEY (`fk_Client ID`) REFERENCES Client(ID)
);

