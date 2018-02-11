-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 11-02-2018 a las 01:24:12
-- Versión del servidor: 10.1.13-MariaDB
-- Versión de PHP: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `good`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `input`
--

CREATE TABLE `input` (
  `id` int(11) NOT NULL,
  `name` varchar(56) NOT NULL,
  `unity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `input`
--

INSERT INTO `input` (`id`, `name`, `unity`) VALUES
(2, 'Limones', 1),
(3, 'Naranja', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inputPrice`
--

CREATE TABLE `inputPrice` (
  `date` datetime NOT NULL,
  `amount` int(11) DEFAULT NULL,
  `idInput` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `inputPrice`
--

INSERT INTO `inputPrice` (`date`, `amount`, `idInput`) VALUES
('2018-02-10 21:00:43', 100, 2),
('2018-02-10 21:02:24', 150, 3),
('2018-02-10 21:22:57', 170, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pointofsale`
--

CREATE TABLE `pointofsale` (
  `id` int(11) NOT NULL,
  `name` varchar(56) NOT NULL,
  `address` varchar(256) NOT NULL,
  `tel` varchar(15) NOT NULL,
  `image` varchar(56) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pointofsale`
--

INSERT INTO `pointofsale` (`id`, `name`, `address`, `tel`, `image`) VALUES
(1, 'Porto Vanilla..', 'erwrwerew', '21312321', 'porto-vanilla.png'),
(2, 'Las Gaviotas', 'erwrwerew66', '21312321', 'las-gaviotas.png'),
(3, 'El Viejo y El Mar', 'asdasda', '1111', 'el-viejo-y-el-mar.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(56) NOT NULL,
  `path_image` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `name`, `path_image`) VALUES
(1, 'Paradise Dream', 'paradiseDream.png'),
(2, 'Citra Trip', 'citraTrip.png'),
(3, 'Sun Kiss', 'sunKiss.png'),
(4, 'Green Life', 'greenLife.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productPrice`
--

CREATE TABLE `productPrice` (
  `date` datetime NOT NULL,
  `amount` int(11) DEFAULT NULL,
  `idProduct` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `unity`
--

CREATE TABLE `unity` (
  `id` int(11) NOT NULL,
  `name` varchar(56) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `unity`
--

INSERT INTO `unity` (`id`, `name`) VALUES
(1, 'Kg'),
(2, 'L');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `viewing`
--

CREATE TABLE `viewing` (
  `idviewing` int(11) NOT NULL,
  `date` datetime DEFAULT NULL,
  `idpointofsail` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `viewing`
--

INSERT INTO `viewing` (`idviewing`, `date`, `idpointofsail`) VALUES
(9, '2018-02-10 13:36:39', 1),
(10, '2018-02-10 13:37:33', 1),
(11, '2018-02-10 18:10:18', 1),
(12, '2018-02-10 19:08:18', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `viewing_product`
--

CREATE TABLE `viewing_product` (
  `idviewing` int(11) NOT NULL,
  `idproduct` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `type` enum('delivery','return','empty') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `viewing_product`
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

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `input`
--
ALTER TABLE `input`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_input_unity1_idx` (`unity`);

--
-- Indices de la tabla `inputPrice`
--
ALTER TABLE `inputPrice`
  ADD KEY `idInput_idx` (`idInput`);

--
-- Indices de la tabla `pointofsale`
--
ALTER TABLE `pointofsale`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productPrice`
--
ALTER TABLE `productPrice`
  ADD KEY `idProduct_idx` (`idProduct`);

--
-- Indices de la tabla `unity`
--
ALTER TABLE `unity`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `viewing`
--
ALTER TABLE `viewing`
  ADD PRIMARY KEY (`idviewing`),
  ADD KEY `idpointofsail_idx` (`idpointofsail`);

--
-- Indices de la tabla `viewing_product`
--
ALTER TABLE `viewing_product`
  ADD KEY `idviewing_idx` (`idviewing`),
  ADD KEY `fk_viewing_product_product1_idx` (`idproduct`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `input`
--
ALTER TABLE `input`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `pointofsale`
--
ALTER TABLE `pointofsale`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `unity`
--
ALTER TABLE `unity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `viewing`
--
ALTER TABLE `viewing`
  MODIFY `idviewing` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `input`
--
ALTER TABLE `input`
  ADD CONSTRAINT `fk_input_unity1` FOREIGN KEY (`unity`) REFERENCES `unity` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `inputPrice`
--
ALTER TABLE `inputPrice`
  ADD CONSTRAINT `idInput` FOREIGN KEY (`idInput`) REFERENCES `input` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `productPrice`
--
ALTER TABLE `productPrice`
  ADD CONSTRAINT `idProduct` FOREIGN KEY (`idProduct`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

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

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
