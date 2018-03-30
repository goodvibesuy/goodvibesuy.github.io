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
(4, 'menu'),
(5, 'accounts'),
(6, 'userConfig'),
(7, 'usersRols'),
(8, 'userRol'),
(9, 'routes'),
(10, 'pos'),
(11, 'products'),
(12, 'supplies'),
(13, 'users'),
(14, 'viewing');

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
(1, 4),
(1, 5),
(1, 6),
(2, 4),
(2, 6),
(1, 7),
(1, 8),
(2, 7),
(2, 8),
(1, 9),
(2, 9),
(1, 10),
(1, 11),
(1, 12),
(1, 13),
(1, 14);

-- --------------------------------------------------------

--
-- Volcar la base de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`user_id`, `user_name`, `login_date`, `account_id`, `token_id`, `database_name`) VALUES
(26, 'cosaboa', '2018-03-06 14:47:51', 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyNiwidXNlck5hbWUiOiJjb3NhYm9hIiwicm9sSWQiOjF9LCJkYXRlIjoiMjAxOC0wMy0wNlQxNzo0Nzo1MS45NjBaIiwiaWF0IjoxNTIwMzU4NDcxfQ.uRtcl3n-i96dIs8YLxPVZzhg98O2xj9rosNbYX9hjX4', 'good'),
(27, 'cosaruin', '2018-03-06 14:59:06', 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyNywidXNlck5hbWUiOiJjb3NhcnVpbiIsInJvbElkIjoyfSwiZGF0ZSI6IjIwMTgtMDMtMDZUMTc6NTk6MDYuMzg4WiIsImlhdCI6MTUyMDM1OTE0Nn0.S9fDQ03jKKf3UZLJ6SJ0W1huNDQIpN6sdCgq0DlW9aM', 'good'),
(25, 'jperez', '2016-08-01 16:40:16', 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyNSwidXNlck5hbWUiOiJqcGVyZXoifSwiZGF0ZSI6IjIwMTYtMDgtMDFUMTk6NDA6MTYuOTUyWiIsImlhdCI6MTQ3MDA4MDQxNn0._CA0HdBUConXQ7mX8cCiBY4B3MaQfehjqzdDKRK_gK0', 'base'),
(1, 'prueba', '2018-01-11 11:22:35', 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VyTmFtZSI6InBydWViYSJ9LCJkYXRlIjoiMjAxOC0wMS0xMVQxNDoyMjozNS4wNDBaIiwiaWF0IjoxNTE1NjgwNTU1fQ.xTM41U2Ffd-BWxBbZIS81gkcL6Z5OQkwtUwM26e-CGU', 'clim');

-- --------------------------------------------------------

--
-- Volcar la base de datos para la tabla `users`
--

INSERT INTO `users` (`rol_id`, `id`, `user_name`, `first_name`, `last_name`, `password`, `active`) VALUES
(1, 1, 'prueba', 'Pepe', 'Apellido', '7c4a8d09ca3762af61e59520943dc26494f8941b', 1),
(1, 13, 'nuevo2', 'Andres', 'Apellido', '8cb2237d0679ca88db6464eac60da96345513964', 0),
(1, 25, 'jperez', 'Juan', 'Perez', '8cb2237d0679ca88db6464eac60da96345513964', 1),
(1, 26, 'cosaboa', 'cosa', 'boa', '7c4a8d09ca3762af61e59520943dc26494f8941b', 1),
(2, 27, 'cosaruin', 'Cosa', 'Ruin', '7c4a8d09ca3762af61e59520943dc26494f8941b', 1);

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
