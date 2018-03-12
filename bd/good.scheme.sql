-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 06-03-2018 a las 19:03:53
-- Versión del servidor: 5.5.8
-- Versión de PHP: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `good`
--
CREATE DATABASE `good`;
USE `good`;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `supply`
--

CREATE TABLE IF NOT EXISTS `supply` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(56) NOT NULL,
  `unit` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_supply_unit1_idx` (`unit`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `supplyprice`
--

CREATE TABLE IF NOT EXISTS `supplyprice` (
  `date` datetime NOT NULL,
  `amount` int(11) DEFAULT NULL,
  `idSupply` int(11) DEFAULT NULL,
  KEY `idSupply_idx` (`idSupply`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pointofsale`
--

CREATE TABLE `pointofsale` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(56) NOT NULL,
  `address` varchar(256) NOT NULL,
  `tel` varchar(15) NOT NULL,
  `image` varchar(56) NOT NULL,
  `coord` point NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(56) NOT NULL,
  `path_image` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productprice`
--

CREATE TABLE IF NOT EXISTS `productprice` (
  `date` datetime NOT NULL,
  `amount` int(11) DEFAULT NULL,
  `idProduct` int(11) DEFAULT NULL,
  KEY `idProduct_idx` (`idProduct`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_supply`
--

CREATE TABLE IF NOT EXISTS `product_supply` (
  `idproduct` int(11) DEFAULT NULL,
  `idSupply` int(11) DEFAULT NULL,
  `quantity` double DEFAULT NULL,
  KEY `idProduct_idx` (`idproduct`),
  KEY `idSupply_idx` (`idSupply`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `route`
--

CREATE TABLE IF NOT EXISTS `route` (
  `idroute` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idroute`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `route_pointofsale`
--

CREATE TABLE IF NOT EXISTS `route_pointofsale` (
  `idroute` int(11) DEFAULT NULL,
  `idpointofsale` int(11) DEFAULT NULL,
  `position` int(11) NOT NULL,
  KEY `idTravel_idx` (`idroute`),
  KEY `idPointofsale_idx` (`idpointofsale`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `route_user`
--

CREATE TABLE IF NOT EXISTS `route_user` (
  `idroute` int(11) DEFAULT NULL,
  `iduser` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  KEY `iduser_idx` (`iduser`),
  KEY `idroute2` (`idroute`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `unit`
--

CREATE TABLE IF NOT EXISTS `unit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(56) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(256) NOT NULL,
  `firstname` varchar(256) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `password` varchar(30) NOT NULL,
  `rol_id` int(11) NOT NULL,
  `id_user_master` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `viewing`
--

CREATE TABLE IF NOT EXISTS `viewing` (
  `idviewing` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `idpointofsail` int(11) DEFAULT NULL,
  PRIMARY KEY (`idviewing`),
  KEY `idpointofsail_idx` (`idpointofsail`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `viewing_product`
--

CREATE TABLE IF NOT EXISTS `viewing_product` (
  `idviewing` int(11) NOT NULL,
  `idproduct` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `type` enum('delivery','return','empty') DEFAULT NULL,
  KEY `idviewing_idx` (`idviewing`),
  KEY `fk_viewing_product_product1_idx` (`idproduct`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Filtros para las tablas descargadas (dump)
--

--
-- Filtros para la tabla `supply`
--
ALTER TABLE `supply`
  ADD CONSTRAINT `fk_supply_unit1` FOREIGN KEY (`unit`) REFERENCES `unit` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `supplyprice`
--
ALTER TABLE `supplyprice`
  ADD CONSTRAINT `idSupply` FOREIGN KEY (`idSupply`) REFERENCES `supply` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `productprice`
--
ALTER TABLE `productprice`
  ADD CONSTRAINT `idProduct` FOREIGN KEY (`idProduct`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `product_supply`
--
ALTER TABLE `product_supply`
  ADD CONSTRAINT `idSupply2` FOREIGN KEY (`idSupply`) REFERENCES `supply` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `idProduct2` FOREIGN KEY (`idproduct`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `route_pointofsale`
--
ALTER TABLE `route_pointofsale`
  ADD CONSTRAINT `idPointofsale` FOREIGN KEY (`idpointofsale`) REFERENCES `pointofsale` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `idRoute` FOREIGN KEY (`idroute`) REFERENCES `route` (`idroute`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `route_user`
--
ALTER TABLE `route_user`
  ADD CONSTRAINT `idroute2` FOREIGN KEY (`idroute`) REFERENCES `route` (`idroute`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `iduser` FOREIGN KEY (`iduser`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `viewing`
--
ALTER TABLE `viewing`
  ADD CONSTRAINT `idpointofsail` FOREIGN KEY (`idpointofsail`) REFERENCES `pointofsale` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `viewing_product`
--
ALTER TABLE `viewing_product`
  ADD CONSTRAINT `fk_viewing_product_product1` FOREIGN KEY (`idproduct`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `idviewing` FOREIGN KEY (`idviewing`) REFERENCES `viewing` (`idviewing`) ON DELETE NO ACTION ON UPDATE NO ACTION;
