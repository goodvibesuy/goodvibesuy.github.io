-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 05-03-2018 a las 21:22:12
-- Versión del servidor: 5.5.8
-- Versión de PHP: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `master`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `accounts`
--

CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `database_name` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `max_users` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Volcar la base de datos para la tabla `accounts`
--

INSERT INTO `accounts` (`id`, `database_name`, `name`, `max_users`) VALUES
(1, 'clim', 'motion', 1),
(2, 'good', 'good', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resources`
--

CREATE TABLE IF NOT EXISTS `resources` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Volcar la base de datos para la tabla `resources`
--

INSERT INTO `resources` (`id`, `name`) VALUES
(4, 'menu'),
(5, 'accounts'),
(6, 'userConfig'),
(7, 'usersRols'),
(8, 'userRol');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rols`
--

CREATE TABLE IF NOT EXISTS `rols` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcar la base de datos para la tabla `rols`
--

INSERT INTO `rols` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'registered');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rols_resources`
--

CREATE TABLE IF NOT EXISTS `rols_resources` (
  `rol_id` int(11) NOT NULL,
  `resource_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcar la base de datos para la tabla `rols_resources`
--

INSERT INTO `rols_resources` (`rol_id`, `resource_id`) VALUES
(1, 4),
(1, 5),
(1, 6),
(2, 4),
(2, 6),
(1, 7),
(1, 8),
(2, 7),
(2, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE IF NOT EXISTS `sessions` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(120) NOT NULL,
  `login_date` datetime NOT NULL,
  `account_id` int(11) NOT NULL,
  `token_id` varchar(300) NOT NULL,
  `database_name` varchar(50) NOT NULL,
  PRIMARY KEY (`user_name`,`login_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcar la base de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`user_id`, `user_name`, `login_date`, `account_id`, `token_id`, `database_name`) VALUES
(26, 'cosaboa', '2018-03-05 17:20:23', 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyNiwidXNlck5hbWUiOiJjb3NhYm9hIn0sImRhdGUiOiIyMDE4LTAzLTA1VDIwOjIwOjIzLjQ5OFoiLCJpYXQiOjE1MjAyODEyMjN9.WwlXD6vUnEI3BjClipWz6zJm4wIFUzeWUYc0wfhsp0w', 'good'),
(25, 'jperez', '2016-08-01 16:40:16', 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyNSwidXNlck5hbWUiOiJqcGVyZXoifSwiZGF0ZSI6IjIwMTYtMDgtMDFUMTk6NDA6MTYuOTUyWiIsImlhdCI6MTQ3MDA4MDQxNn0._CA0HdBUConXQ7mX8cCiBY4B3MaQfehjqzdDKRK_gK0', 'base'),
(1, 'prueba', '2018-01-11 11:22:35', 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VyTmFtZSI6InBydWViYSJ9LCJkYXRlIjoiMjAxOC0wMS0xMVQxNDoyMjozNS4wNDBaIiwiaWF0IjoxNTE1NjgwNTU1fQ.xTM41U2Ffd-BWxBbZIS81gkcL6Z5OQkwtUwM26e-CGU', 'clim');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `rol_id` tinyint(4) NOT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_name` varchar(120) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `user_name_UNIQUE` (`user_name`),
  UNIQUE KEY `user_name` (`user_name`),
  UNIQUE KEY `user_name_2` (`user_name`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=27 ;

--
-- Volcar la base de datos para la tabla `users`
--

INSERT INTO `users` (`rol_id`, `id`, `user_name`, `first_name`, `last_name`, `password`, `active`) VALUES
(1, 1, 'prueba', 'Pepe', 'Apellido', '7c4a8d09ca3762af61e59520943dc26494f8941b', 1),
(1, 13, 'nuevo2', 'Andres', 'Apellido', '8cb2237d0679ca88db6464eac60da96345513964', 0),
(1, 25, 'jperez', 'Juan', 'Perez', '8cb2237d0679ca88db6464eac60da96345513964', 1),
(1, 26, 'cosaboa', 'cosa', 'boa', '7c4a8d09ca3762af61e59520943dc26494f8941b', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_accounts`
--

CREATE TABLE IF NOT EXISTS `users_accounts` (
  `user_id` int(10) unsigned NOT NULL,
  `account_id` int(10) unsigned NOT NULL,
  `owner` tinyint(3) unsigned NOT NULL,
  PRIMARY KEY (`user_id`,`account_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcar la base de datos para la tabla `users_accounts`
--

INSERT INTO `users_accounts` (`user_id`, `account_id`, `owner`) VALUES
(1, 1, 1),
(13, 1, 0),
(25, 1, 0),
(26, 2, 1);
