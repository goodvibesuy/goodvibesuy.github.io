-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 07-02-2018 a las 22:55:32
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Volcar la base de datos para la tabla `pointofsale`
--

INSERT INTO `pointofsale` (`id`, `name`, `address`, `tel`, `image`) VALUES
(1, 'Porto Vanilla..', 'erwrwerew', '21312321', 'porto-vanilla.png'),
(2, 'Las Gaviotas', 'erwrwerew66', '21312321', 'las-gaviotas.png'),
(3, 'El Viejo y El Mar', 'asdasda', '1111', 'el-viejo-y-el-mar.jpg');

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
