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
USE `good`;

-- --------------------------------------------------------

--
-- Volcar la base de datos para la tabla `unit`
--

INSERT INTO `unit` (`id`, `name`) VALUES
(1, 'Kg'),
(2, 'L');

-- --------------------------------------------------------

--
-- Volcar la base de datos para la tabla `supply`
--

INSERT INTO `supply` (`id`, `name`, `unit`, `path_image`) VALUES
(1, 'Apio', 1, 'apio.png'),
(2, 'Edulcorate', 2, 'edulcorante.png'),
(3, 'Espinaca', 1, 'espinaca.png'),
(4, 'Jengibre', 1, 'jengibre.png'),
(5, 'Kale', 1, 'kale.png'),
(6, 'Lima', 1, 'lima.png'),
(7, 'Limon', 1, 'limones.png'),
(8, 'Manzana Roja', 1, 'manzana-roja.png'),
(9, 'Manzana Verde', 1, 'manzana-verde.png'),
(10, 'Menta', 1, 'menta.png'),
(11, 'Naranja', 1, 'naranja.png'),
(12, 'Pepino', 1, 'pepino.png'),
(13, 'Pera', 1, 'pera.png'),
(14, 'Remolacha', 1, 'remolacha.png'),
(15, 'Zanahoria', 1, 'zanahoria.png');

-- --------------------------------------------------------

--
-- Volcar la base de datos para la tabla `supplyprice`
--

INSERT INTO `supplyPrice` (`date`, `amount`, `idSupply`) VALUES
('2018-02-10 21:00:43', 31, 1),
('2018-02-10 21:02:24', 49, 2),
('2018-02-10 21:22:57', 42, 3),
('2018-02-11 08:48:50', 16, 4),
('2018-02-11 08:51:05', 75, 5),
('2018-02-11 08:51:46', 24, 6),
('2018-02-11 08:52:30', 34, 7),
('2018-02-11 08:54:04', 31, 8),
('2018-02-11 08:54:37', 37, 9),
('2018-02-11 08:55:25', 75, 10),
('2018-02-11 08:56:30', 40, 11),
('2018-02-11 08:56:30', 60, 12),
('2018-02-11 08:56:30', 57, 13),
('2018-02-11 08:56:30', 46, 14),
('2018-02-11 08:56:30', 50, 15);

-- --------------------------------------------------------

--
-- Volcar la base de datos para la tabla `pointofsale`
--

INSERT INTO `pointofsale` (`id`, `name`, `address`, `tel`, `image`, `coord`) VALUES
(1, 'Porto Vanilla..', 'erwrwerew', '21312321', 'porto-vanilla.png', ST_GeomFromText('POINT(1 1)'),
(2, 'Las Gaviotas', 'erwrwerew66', '21312321', 'las-gaviotas.png', ST_GeomFromText('POINT(1 1)'),
(3, 'El Viejo y El Mar', 'asdasda', '1111', 'el-viejo-y-el-mar.jpg', ST_GeomFromText('POINT(1 1)');

-- --------------------------------------------------------

--
-- Volcar la base de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `name`, `path_image`) VALUES
(1, 'Paradise Dream', 'paradiseDream.png'),
(2, 'Citra Trip', 'citraTrip.png'),
(3, 'Sun Kiss', 'sunKiss.png'),
(4, 'Green Life', 'greenLife.png'),
(5, 'Yellow Rolling', 'yellowRolling.png');

-- --------------------------------------------------------

--
-- Volcar la base de datos para la tabla `product_supply`
--


INSERT INTO `product_supply` (`idproduct`, `idSupply`, `quantity`) VALUES
(1, 8, 1),
(1, 9, 1),
(2, 6, 2),
(2, 11, 1),
(3, 8, 1),
(3, 11, 1),
(3, 12, 1),
(3, 14, 1),
(3, 15, 1),
(4, 1, 1),
(4, 3, 1),
(4, 5, 1),
(4, 9, 1),
(4, 12, 1),
(4, 13, 1),
(5, 4, 1),
(5, 7, 1),
(5, 10, 1),
(5, 13, 1);

-- --------------------------------------------------------

--
-- Volcar la base de datos para la tabla `route`
--

INSERT INTO `route` (`idroute`, `name`) VALUES
(6, 'Punta Carretas'),
(8, 'Olho2'),
(9, 'Otro'),
(10, 'Otra ruta2');

-- --------------------------------------------------------

--
-- Volcar la base de datos para la tabla `route_pointofsale`
--

INSERT INTO `route_pointofsale` (`idroute`, `idpointofsale`, `position`) VALUES
(9, 3, 1),
(9, 2, 3),
(9, 1, 2),
(10, 1, 1);

-- --------------------------------------------------------

--
-- Volcar la base de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `user_name`, `firstname`, `lastname`, `password`, `rol_id`, `id_user_master`) VALUES
(2, 'cabecacorada', 'Cabeca', 'Corada', '123456', 1, 0),
(3, 'olho', 'olho', 'olho', '123456', 1, 0),
(4, 'cosaboa', 'cosa', 'boa', '123456', 1, 26),
(5, 'cosaruin', 'Cosa', 'Ruin', '7c4a8d09ca3762af61e59520943dc2', 2, 27);

-- --------------------------------------------------------

--
-- Volcar la base de datos para la tabla `route_user`
--

INSERT INTO `route_user` (`idroute`, `iduser`, `date`) VALUES
(9, 3, '2018-02-01'),
(9, 3, '2018-02-03'),
(10, 2, '2018-02-01'),
(10, 4, '2018-02-07');

-- --------------------------------------------------------

--
-- Volcar la base de datos para la tabla `viewing`
--

INSERT INTO `viewing` (`idviewing`, `date`, `idpointofsail`) VALUES
(9, '2018-02-10 13:36:39', 1),
(10, '2018-02-10 13:37:33', 1),
(11, '2018-02-10 18:10:18', 1),
(12, '2018-02-10 19:08:18', 1);

-- --------------------------------------------------------

--
-- Volcar la base de datos para la tabla `viewing_product`
--

INSERT INTO `viewing_product` (`idviewing`, `idproduct`, `quantity`, `type`) VALUES
(9, 1, 15, 'delivery'),
(9, 1, 0, 'return'),
(9, 1, 0, 'empty'),
(9, 2, 20, 'delivery'),
(9, 2, 0, 'return'),
(9, 2, 0, 'empty'),
(10, 1, 20, 'delivery'),
(10, 1, 2, 'return'),
(10, 1, 0, 'empty'),
(10, 2, 20, 'delivery'),
(10, 2, 3, 'return'),
(10, 2, 0, 'empty'),
(12, 1, 11, 'delivery'),
(12, 1, 3, 'return'),
(12, 1, 8, 'empty'),
(12, 2, 15, 'delivery'),
(12, 2, 3, 'return'),
(12, 2, 5, 'empty'),
(12, 3, 14, 'delivery'),
(12, 3, 4, 'return'),
(12, 3, 3, 'empty'),
(12, 4, 11, 'delivery'),
(12, 4, 4, 'return'),
(12, 4, 4, 'empty');
