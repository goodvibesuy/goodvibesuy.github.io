SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


--
-- Volcar la base de datos para la tabla `unity`
--
INSERT INTO `unity` (`id`, `name`) VALUES
(1, 'Kg'),
(2, 'L');

--
-- Volcar la base de datos para la tabla `input`
--
INSERT INTO `input` (`id`, `name`, `unity`) VALUES
(2, 'Limones', 1),
(3, 'Naranja', 1),
(4, 'Pepino', 1),
(5, 'Manzana Roja', 1),
(6, 'Pera', 1),
(7, 'Espinaca', 1),
(8, 'Apio', 1),
(9, 'Kale', 1),
(10, 'Manzana verde', 1);

--
-- Volcar la base de datos para la tabla `inputprice`
--
INSERT INTO `inputprice` (`date`, `amount`, `idInput`) VALUES
('2018-02-10 21:00:43', 100, 2),
('2018-02-10 21:02:24', 150, 3),
('2018-02-10 21:22:57', 170, 3),
('2018-02-11 08:48:50', 70, 4),
('2018-02-11 08:51:05', 75, 5),
('2018-02-11 08:51:46', 120, 6),
('2018-02-11 08:52:30', 150, 7),
('2018-02-11 08:54:04', 200, 8),
('2018-02-11 08:54:37', 120, 9),
('2018-02-11 08:55:25', 75, 5),
('2018-02-11 08:56:30', 100, 10);

--
-- Volcar la base de datos para la tabla `pointofsale`
--
INSERT INTO `pointofsale` (`id`, `name`, `address`, `tel`, `image`) VALUES
(1, 'Porto Vanilla..', 'erwrwerew', '21312321', 'porto-vanilla.png'),
(2, 'Las Gaviotas', 'erwrwerew66', '21312321', 'las-gaviotas.png'),
(3, 'El Viejo y El Mar', 'asdasda', '1111', 'el-viejo-y-el-mar.jpg');

--
-- Volcar la base de datos para la tabla `product`
--
INSERT INTO `product` (`id`, `name`, `path_image`) VALUES
(1, 'Paradise Dream', 'paradise-dream.png'),
(2, 'Citra Trip', 'citra-trip.png'),
(3, 'Sun Kiss', 'sun-kiss.png'),
(4, 'Green Life', 'green-life.png'),
(5, 'Yello Rolling', 'yellow-rolling.png');

--
-- Volcar la base de datos para la tabla `resources`
--
INSERT INTO `resources` (`id`, `name`) VALUES
(1, 'routes');

--
-- Volcar la base de datos para la tabla `rols`
--
INSERT INTO `rols` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'registred');

--
-- Volcar la base de datos para la tabla `rols_resources`
--
INSERT INTO `rols_resources` (`rol_id`, `resource_id`) VALUES
(1, 1);

--
-- Volcar la base de datos para la tabla `route`
--
INSERT INTO `route` (`idroute`, `name`) VALUES
(6, 'Punta Carretas'),
(8, 'Olho2'),
(9, 'Otro');

--
-- Volcar la base de datos para la tabla `route_pointofsale`
--
INSERT INTO `route_pointofsale` (`idroute`, `idpointofsale`, `position`) VALUES
(9, 3, 1),
(9, 2, 3),
(9, 1, 2);

--
-- Volcar la base de datos para la tabla `users`
--
INSERT INTO `users` (`id`, `user_name`, `firstname`, `lastname`, `password`, `rol_id`) VALUES
(2, 'cabecacorada', 'Cabeca', 'Corada', '123456', 1),
(3, 'olho', 'olho', 'olho', '123456', 1),
(4, 'cosaboa', 'cosa', 'boa', '123456', 1);

--
-- Volcar la base de datos para la tabla `route_user`
--
INSERT INTO `route_user` (`idroute`, `iduser`, `date`) VALUES
(9, 3, '2018-02-01'),
(9, 3, '2018-02-03');

--
-- Volcar la base de datos para la tabla `viewing`
--
INSERT INTO `viewing` (`idviewing`, `date`, `idpointofsail`) VALUES
(9, '2018-02-10 13:36:39', 1),
(10, '2018-02-10 13:37:33', 1),
(11, '2018-02-10 18:10:18', 1),
(12, '2018-02-10 19:08:18', 1);

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
