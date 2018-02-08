-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 08-02-2018 a las 20:01:48
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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `input`
--

CREATE TABLE IF NOT EXISTS `input` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(56) NOT NULL,
  `unity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_input_unity1_idx` (`unity`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Volcar la base de datos para la tabla `input`
--

INSERT INTO `input` (`id`, `name`, `unity`) VALUES
(1, 'Naranja', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pointofsale`
--

CREATE TABLE IF NOT EXISTS `pointofsale` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(56) NOT NULL,
  `address` varchar(256) NOT NULL,
  `tel` varchar(15) NOT NULL,
  `image` varchar(56) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Volcar la base de datos para la tabla `pointofsale`
--

INSERT INTO `pointofsale` (`id`, `name`, `address`, `tel`, `image`) VALUES
(1, 'Porto Vanilla..', 'erwrwerew', '21312321', 'porto-vanilla.png'),
(2, 'Las Gaviotas', 'erwrwerew66', '21312321', 'las-gaviotas.png'),
(3, 'El Viejo y El Mar', 'asdasda', '1111', 'el-viejo-y-el-mar.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL,
  `name` varchar(56) NOT NULL,
  `path_image` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcar la base de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `name`, `path_image`) VALUES
(1, 'Paradise Dream', 'paradiseDream.png'),
(2, 'Citra Trip', 'citraTrip.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `unity`
--

CREATE TABLE IF NOT EXISTS `unity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(56) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcar la base de datos para la tabla `unity`
--

INSERT INTO `unity` (`id`, `name`) VALUES
(1, 'Kg'),
(2, 'L');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Volcar la base de datos para la tabla `viewing`
--


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
-- Volcar la base de datos para la tabla `viewing_product`
--


--
-- Filtros para las tablas descargadas (dump)
--

--
-- Filtros para la tabla `input`
--
ALTER TABLE `input`
  ADD CONSTRAINT `fk_input_unity1` FOREIGN KEY (`unity`) REFERENCES `unity` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

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
