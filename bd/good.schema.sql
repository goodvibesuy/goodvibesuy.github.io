DROP DATABASE IF EXISTS `good`;
CREATE DATABASE `good`;
USE `good`;

-- users
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
 `id` INT(11) NOT NULL AUTO_INCREMENT,
 `user_name` VARCHAR(256) NOT NULL,
 `firstname` VARCHAR(256) NOT NULL,
 `lastname` VARCHAR(50) NOT NULL,
 `password` VARCHAR(30) NOT NULL,
 `rol_id` INT(11) NOT NULL,
 `id_user_master` INT(11) NOT NULL, PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- groupPointofsale
DROP TABLE IF EXISTS `groupPointofsale`;
CREATE TABLE `groupPointofsale` (
 `id` INT(11) NOT NULL AUTO_INCREMENT,
 `name` VARCHAR(56) NOT NULL, PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- pointofsale
DROP TABLE IF EXISTS `pointofsale`;
CREATE TABLE `pointofsale` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(56) NOT NULL,
    `businessName` VARCHAR(56) NOT NULL,
    `RUT` VARCHAR(56) NOT NULL,
    `contactName` VARCHAR(56) NOT NULL, 
    `address` VARCHAR(256) NOT NULL,
    `tel` VARCHAR(15) DEFAULT NULL,
    `image` VARCHAR(56) DEFAULT NULL,
    `coord` POINT DEFAULT NULL,
    `idGroup` INT(11) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (idGroup) REFERENCES groupPointofsale(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- product
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
 `id` INT(11) NOT NULL AUTO_INCREMENT,
 `name` VARCHAR(56) NOT NULL,
 `displayOrder` INT(11) NOT NULL AUTO_INCREMENT,
 `path_image` VARCHAR(128) NOT NULL, PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--ALTER TABLE `product` ADD `displayOrder` INT(5) NOT NULL AFTER `path_image`;

-- productprice
DROP TABLE IF EXISTS `productprice`;
CREATE TABLE `productprice` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `date` DATETIME NOT NULL,
    `amount` FLOAT(11) NOT NULL,
    `idProduct` INT(11) NOT NULL,
    `idGroupPointofsale` INT(11) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (idProduct) REFERENCES product(id),
    FOREIGN KEY (idGroupPointofsale) REFERENCES groupPointofsale(id),
    UNIQUE KEY `id_idProduct_idGroupPointofsale` (`id`, `idProduct`, `idGroupPointofsale`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*ALTER TABLE `productprice` CHANGE `amount` `amount` FLOAT(11) NOT NULL;*/

    `tel` VARCHAR(15) DEFAULT NOT NULL,
    `image` VARCHAR(56) DEFAULT NULL,
    `coord` POINT DEFAULT NULL,

-- unit
DROP TABLE IF EXISTS `unit`;
CREATE TABLE `unit` (
 `id` INT(11) NOT NULL AUTO_INCREMENT,
 `name` VARCHAR(56) NOT NULL, PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- provider
DROP TABLE IF EXISTS `provider`;
CREATE TABLE `provider` (
 `id` INT(11) NOT NULL AUTO_INCREMENT,
 `name` VARCHAR(256) NOT NULL, PRIMARY KEY (`id`)
);

-- supply
DROP TABLE IF EXISTS `supply`;
CREATE TABLE `supply` (
 `id` INT(11) NOT NULL AUTO_INCREMENT,
 `name` VARCHAR(56) NOT NULL,
 `unit` INT(11) NOT NULL,
 `path_image` VARCHAR(128) NULL,
 PRIMARY KEY (`id`),
 FOREIGN KEY (unit) REFERENCES unit(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- product_supply
DROP TABLE IF EXISTS `product_supply`;
CREATE TABLE `product_supply` (
 `idProduct` INT(11) DEFAULT NULL,
 `idSupply` INT(11) DEFAULT NULL,
 `quantity` DOUBLE DEFAULT NULL, FOREIGN KEY (idProduct) REFERENCES product(id), FOREIGN KEY (idSupply) REFERENCES supply(id) 
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- route
DROP TABLE IF EXISTS `route`;
CREATE TABLE `route` (
 `id` INT(11) NOT NULL AUTO_INCREMENT,
 `name` VARCHAR(45) DEFAULT NULL,
 `date` DATETIME NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- viewing
DROP TABLE IF EXISTS `viewing`;
CREATE TABLE `viewing` (
 `idUser` INT(11) DEFAULT NULL,
 `idviewing` INT(11) NOT NULL AUTO_INCREMENT,
 `date` DATETIME DEFAULT NULL,
 `idpointofsale` INT(11) DEFAULT NULL,
 `annotation` TEXT DEFAULT NULL, 
 PRIMARY KEY (`idviewing`),
 FOREIGN KEY (idUser) REFERENCES users(id),
 FOREIGN KEY (idpointofsale) REFERENCES pointofsale(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- viewing_product
DROP TABLE IF EXISTS `viewing_product`;
CREATE TABLE `viewing_product` (
 `idviewing` INT(11) NOT NULL,
 `idproduct` INT(11) NOT NULL,
 `quantity` INT(11) DEFAULT NULL,
 `type` ENUM('delivery','return','empty') DEFAULT NULL, KEY `idviewing_idx` (`idviewing`), KEY `fk_viewing_product_product1_idx` (`idproduct`), CONSTRAINT `fk_viewing_product_product1` FOREIGN KEY (`idproduct`) REFERENCES `product` (`id`) ON
DELETE NO ACTION ON
UPDATE NO ACTION,
CONSTRAINT `idviewing` FOREIGN KEY (`idviewing`) REFERENCES `viewing` (`idviewing`) ON
DELETE NO ACTION ON
UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- route_pointofsale
DROP TABLE IF EXISTS `route_pointofsale`;
CREATE TABLE `route_pointofsale` (
 `idRoute` INT(11) DEFAULT NULL,
 `idPointofsale` INT(11) DEFAULT NULL,
 `position` INT(11) NOT NULL, 
 `idViewing` int(11) DEFAULT NULL, 
 KEY `idTravel_idx` (`idroute`),
 KEY `idPointofsale_idx` (`idpointofsale`),
 FOREIGN KEY (idroute) REFERENCES route(id), 
 FOREIGN KEY (idPointofsale) REFERENCES pointofsale(id),
 FOREIGN KEY (idViewing) REFERENCES viewing(idviewing)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- route_user
DROP TABLE IF EXISTS `route_user`;
CREATE TABLE `route_user` (
    `idroute` INT(11) NOT NULL,
    `iduser` INT(11) NOT NULL,
    KEY `key_iduser` (`iduser`),
    KEY `key_idroute` (`idroute`), 
	FOREIGN KEY (`idroute`) REFERENCES `route` (`id`),
	FOREIGN KEY (`iduser`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- supplyPrice
DROP TABLE IF EXISTS `supplyPrice`;
CREATE TABLE `supplyPrice` (
 `price_date` DATETIME NOT NULL,
 `date` DATETIME NOT NULL,
 `amount` INT(11) DEFAULT NULL,
 `idSupply` INT(11) DEFAULT NULL,
 `idProvider` INT(11) NOT NULL,
 KEY `idSupply_idx` (`idSupply`),
 FOREIGN KEY (idProvider) REFERENCES `provider` (id),
 CONSTRAINT `idSupply` FOREIGN KEY (`idSupply`) REFERENCES `supply` (`id`) ON
DELETE NO ACTION ON
UPDATE NO ACTION
);

-- templateRoute
DROP TABLE IF EXISTS `templateRoute`;
CREATE TABLE `templateRoute` (
 `id` INT(11) NOT NULL AUTO_INCREMENT,
 `name` VARCHAR(45) DEFAULT NULL, PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- templateRoute_pointofsale
DROP TABLE IF EXISTS `templateRoute_pointofsale`;
CREATE TABLE `templateRoute_pointofsale` (
 `idTemplateRoute` INT(11) DEFAULT NULL,
 `idpointofsale` INT(11) DEFAULT NULL,
 `position` INT(11) NOT NULL, FOREIGN KEY (idTemplateRoute) REFERENCES templateRoute(id),
 FOREIGN KEY (idpointofsale) REFERENCES pointofsale(id) 
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `route_stock`;
CREATE TABLE `route_stock` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `idRoute` int(11) DEFAULT NULL,
  `idProduct` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`idRoute`) REFERENCES `route` (`id`),
  FOREIGN KEY (idProduct) REFERENCES product(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;