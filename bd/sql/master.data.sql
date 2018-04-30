-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 06-03-2018 a las 19:03:36
-- Versión del servidor: 5.5.8
-- Versión de PHP: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

USE `master`;

-- --------------------------------------------------------

--
-- Volcar la base de datos para la tabla `accounts`
--

INSERT INTO `accounts` (`id`, `database_name`, `name`, `max_users`) VALUES
(1, 'clim', 'motion', 1),
(2, 'good', 'good', 1);

-- --------------------------------------------------------

--
-- Volcar la base de datos para la tabla `resources`
--

INSERT INTO `resources` (`id`, `name`) VALUES
(1, 'menu'),
(2, 'accounts'),
(3, 'userConfig'),
(4, 'usersRols'),
(5, 'userRol'),
(6, 'routes'),
(7, 'pos'),
(8, 'products'),
(9, 'supplies'),
(10, 'users'),
(11, 'providers'),
(12, 'viewing'),
(13, 'kpi');

-- --------------------------------------------------------

--
-- Volcar la base de datos para la tabla `rols`
--

INSERT INTO `rols` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'registered');

-- --------------------------------------------------------

--
-- Volcar la base de datos para la tabla `rols_resources`
--

INSERT INTO `rols_resources` (`rol_id`, `resource_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(1, 12),
(1, 13),
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(2, 5),
(2, 6);

-- --------------------------------------------------------

--
-- Volcar la base de datos para la tabla `users`
--

INSERT INTO `users` (`rol_id`, `id`, `user_name`, `first_name`, `last_name`, `password`, `active`) VALUES
(1, 1, 'prueba', 'Pepe', 'Apellido', '7c4a8d09ca3762af61e59520943dc26494f8941b', 1),
(1, 13, 'nuevo2', 'Andres', 'Apellido', '8cb2237d0679ca88db6464eac60da96345513964', 0),
(1, 25, 'jperez', 'Juan', 'Perez', '8cb2237d0679ca88db6464eac60da96345513964', 1),
(1, 26, 'admin@goodvibes.uy', 'cosa', 'boa', '7c4a8d09ca3762af61e59520943dc26494f8941b', 1),
(2, 27, 'repartidor@goodvibes.uy', 'Cosa', 'Ruin', '7c4a8d09ca3762af61e59520943dc26494f8941b', 1);

-- --------------------------------------------------------

--
-- Volcar la base de datos para la tabla `users_accounts`
--

INSERT INTO `users_accounts` (`user_id`, `account_id`, `owner`) VALUES
(1, 1, 1),
(13, 1, 0),
(25, 1, 0),
(26, 2, 1),
(27, 2, 1);
