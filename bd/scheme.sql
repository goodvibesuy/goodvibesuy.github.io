-- -------------------------------------------------------------
--
--  Proposito: genera la base de datos y tablas necesarias
--  Cambios:
--      04.03.2018: copiado de good.sql-- phpMyAdmin SQL Dump
--
-- -------------------------------------------------------------

-- Crea base de datos
CREATE DATABASE good;
USE good;

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Estructura de tabla para la tabla `input`
--
SELECT 'Estructura de tabla para la tabla <input>';

CREATE TABLE IF NOT EXISTS `input` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(56) NOT NULL,
    `unity` int(11) NOT NULL,
    PRIMARY KEY (`id`),
    KEY `fk_input_unity1_idx` (`unity`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Estructura de tabla para la tabla `inputprice`
--
SELECT 'Estructura de tabla para la tabla<inputprice>';

CREATE TABLE IF NOT EXISTS `inputprice` (
    `date` datetime NOT NULL,
    `amount` int(11) NOT NULL,
    `idInput` int(11) NOT NULL,
    KEY `idInput_idx` (`idInput`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Estructura de tabla para la tabla `pointofsale`
--
SELECT 'Estructura de tabla para la tabla `pointofsale`';

CREATE TABLE IF NOT EXISTS `pointofsale` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(56) NOT NULL,
    `address` varchar(256) NOT NULL,
    `tel` varchar(15) NOT NULL,
    `image` varchar(56) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Estructura de tabla para la tabla `product`
--
SELECT 'Estructura de tabla para la tabla `product`';

CREATE TABLE IF NOT EXISTS `product` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(56) NOT NULL,
    `path_image` varchar(128) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Estructura de tabla para la tabla `productprice`
--
SELECT 'Estructura de tabla para la tabla `productprice`';

CREATE TABLE IF NOT EXISTS `productprice` (
    `date` datetime NOT NULL,
    `amount` int(11) NOT NULL,
    `idProduct` int(11) NOT NULL,
    KEY `idProduct_idx` (`idProduct`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Estructura de tabla para la tabla `product_input`
--
SELECT 'Estructura de tabla para la tabla `product_input`';

CREATE TABLE IF NOT EXISTS `product_input` (
    `idproduct` int(11) NOT NULL AUTO_INCREMENT,
    `idInput` int(11) NOT NULL,
    `quantity` double NOT NULL,
    KEY `idProduct_idx` (`idproduct`),
    KEY `idInput_idx` (`idInput`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Estructura de tabla para la tabla `resources`
--
SELECT 'Estructura de tabla para la tabla `resources`';

CREATE TABLE IF NOT EXISTS `resources` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(20) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Estructura de tabla para la tabla `rols`
--
SELECT 'Estructura de tabla para la tabla `rols`';

CREATE TABLE IF NOT EXISTS `rols` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(100) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Estructura de tabla para la tabla `rols_resources`
--
SELECT 'Estructura de tabla para la tabla `rols_resources`';

CREATE TABLE IF NOT EXISTS `rols_resources` (
    `rol_id` int(11) NOT NULL,
    `resource_id` int(11) NOT NULL,
    KEY `rol_id` (`rol_id`),
    KEY `resource_id` (`resource_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Estructura de tabla para la tabla `route`
--
SELECT 'Estructura de tabla para la tabla `route`';

CREATE TABLE IF NOT EXISTS `route` (
    `idroute` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(45) DEFAULT NULL,
    PRIMARY KEY (`idroute`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Estructura de tabla para la tabla `route_pointofsale`
--
SELECT 'Estructura de tabla para la tabla `route_pointofsale`';

CREATE TABLE IF NOT EXISTS `route_pointofsale` (
    `idroute` int(11) NOT NULL,
    `idpointofsale` int(11)NOT NULL,
    `position` int(11) NOT NULL,
    KEY `idTravel_idx` (`idroute`),
    KEY `idPointofsale_idx` (`idpointofsale`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Estructura de tabla para la tabla `route_user`
--
SELECT 'Estructura de tabla para la tabla `route_user`';

CREATE TABLE IF NOT EXISTS `route_user` (
    `idroute` int(11) NOT NULL,
    `iduser` int(11) NOT NULL,
    `date` date NOT NULL,
    KEY `iduser_idx` (`iduser`),
    KEY `idroute2` (`idroute`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Estructura de tabla para la tabla `unity`
--
SELECT 'Estructura de tabla para la tabla `unity`';

CREATE TABLE IF NOT EXISTS `unity` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(56) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Estructura de tabla para la tabla `users`
--
SELECT 'Estructura de tabla para la tabla `users`';

CREATE TABLE IF NOT EXISTS `users` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `user_name` varchar(256) NOT NULL,
    `firstname` varchar(256) NOT NULL,
    `lastname` varchar(50) NOT NULL,
    `password` varchar(30) NOT NULL,
    `rol_id` int(11) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Estructura de tabla para la tabla `viewing`
--
SELECT 'Estructura de tabla para la tabla `viewing`';

CREATE TABLE IF NOT EXISTS `viewing` (
    `idviewing` int(11) NOT NULL AUTO_INCREMENT,
    `date` datetime NOT NULL,
    `idpointofsail` int(11) NOT NULL,
    PRIMARY KEY (`idviewing`),
    KEY `idpointofsail_idx` (`idpointofsail`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Estructura de tabla para la tabla `viewing_product`
--
SELECT 'Estructura de tabla para la tabla `viewing_product`';

CREATE TABLE IF NOT EXISTS `viewing_product` (
    `idviewing` int(11) NOT NULL,
    `idproduct` int(11) NOT NULL,
    `quantity` int(11) NOT NULL,
    `type` enum('delivery','return','empty') NOT NULL,
    KEY `idviewing_idx` (`idviewing`),
    KEY `fk_viewing_product_product1_idx` (`idproduct`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Filtros para las tablas descargadas (dump)
--
SELECT 'Filtros para las tablas descargadas (dump)';

--
-- Filtros para la tabla `input`
--
SELECT 'Filtros para la tabla `input`';
ALTER TABLE `input`
ADD CONSTRAINT `fk_input_unity1` FOREIGN KEY (`unity`) REFERENCES `unity` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `inputprice`
--
SELECT 'Filtros para la tabla `inputprice`';
ALTER TABLE `inputprice`
ADD CONSTRAINT `idInput` FOREIGN KEY (`idInput`) REFERENCES `input` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `productprice`
--
SELECT 'Filtros para la tabla `productprice`';
ALTER TABLE `productprice`
ADD CONSTRAINT `idProduct` FOREIGN KEY (`idProduct`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `product_input`
--
SELECT 'Filtros para la tabla `product_input`';
ALTER TABLE `product_input`
ADD CONSTRAINT `idInput2` FOREIGN KEY (`idInput`) REFERENCES `input` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
ADD CONSTRAINT `idProduct2` FOREIGN KEY (`idproduct`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `rols_resources`
--
SELECT 'Filtros para la tabla `rols_resources`';
ALTER TABLE `rols_resources`
ADD CONSTRAINT `rols_resources_ibfk_1` FOREIGN KEY (`rol_id`) REFERENCES `rols` (`id`),
ADD CONSTRAINT `rols_resources_ibfk_2` FOREIGN KEY (`resource_id`) REFERENCES `resources` (`id`);

--
-- Filtros para la tabla `route_pointofsale`
--
SELECT 'Filtros para la tabla `route_pointofsale`';
ALTER TABLE `route_pointofsale`
ADD CONSTRAINT `idPointofsale` FOREIGN KEY (`idpointofsale`) REFERENCES `pointofsale` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
ADD CONSTRAINT `idRoute` FOREIGN KEY (`idroute`) REFERENCES `route` (`idroute`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `route_user`
--
SELECT 'Filtros para la tabla `route_user`';
ALTER TABLE `route_user`
ADD CONSTRAINT `idroute2` FOREIGN KEY (`idroute`) REFERENCES `route` (`idroute`) ON DELETE NO ACTION ON UPDATE NO ACTION,
ADD CONSTRAINT `iduser` FOREIGN KEY (`iduser`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `viewing`
--
SELECT 'Filtros para la tabla `viewing`';
ALTER TABLE `viewing`
ADD CONSTRAINT `idpointofsail` FOREIGN KEY (`idpointofsail`) REFERENCES `pointofsale` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `viewing_product`
--
SELECT 'Filtros para la tabla `viewing_product`';
ALTER TABLE `viewing_product`
ADD CONSTRAINT `fk_viewing_product_product1` FOREIGN KEY (`idproduct`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
ADD CONSTRAINT `idviewing` FOREIGN KEY (`idviewing`) REFERENCES `viewing` (`idviewing`) ON DELETE NO ACTION ON UPDATE NO ACTION;
