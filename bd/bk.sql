DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(256) NOT NULL,
  `firstname` varchar(256) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `password` varchar(30) NOT NULL,
  `rol_id` int(11) NOT NULL,
  `id_user_master` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `groupPointofsale`;
CREATE TABLE `groupPointofsale` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(56) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `pointofsale`;
CREATE TABLE `pointofsale` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(56) NOT NULL,
  `businessName` varchar(56) NOT NULL,
  `RUT` varchar(56) NOT NULL,
  `contactName` varchar(56) NOT NULL,  
  `address` varchar(256) NOT NULL,
  `tel` varchar(15) NOT NULL,
  `image` varchar(56) DEFAULT NULL,
  `coord` point NOT NULL,
  `idGroup` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (idGroup) REFERENCES groupPointofsale(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(56) NOT NULL,
  `path_image` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `productprice`;
CREATE TABLE `productprice` (
  `date` datetime NOT NULL,
  `amount` int(11) DEFAULT NULL,
  `idProduct` int(11) DEFAULT NULL,
  KEY `idProduct_idx` (`idProduct`),
  FOREIGN KEY (idProduct) REFERENCES product(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `unit`;
CREATE TABLE `unit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(56) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `supply`;
CREATE TABLE `supply` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(56) NOT NULL,
  `unit` int(11) NOT NULL,
  `path_image` varchar(128) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (unit) REFERENCES unit(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



DROP TABLE IF EXISTS `product_supply`;
CREATE TABLE `product_supply` (
  `idProduct` int(11) DEFAULT NULL,
  `idSupply` int(11) DEFAULT NULL,
  `quantity` double DEFAULT NULL,
  FOREIGN KEY (idProduct) REFERENCES product(id)  
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `route`;
CREATE TABLE `route` (
  `idroute` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idroute`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `route_pointofsale`;
CREATE TABLE `route_pointofsale` (
  `idRoute` int(11) DEFAULT NULL,
  `idPointofsale` int(11) DEFAULT NULL,
  `position` int(11) NOT NULL,
  KEY `idTravel_idx` (`idroute`),
  KEY `idPointofsale_idx` (`idpointofsale`),
  FOREIGN KEY (idroute) REFERENCES route(idroute),
  FOREIGN KEY (idPointofsale) REFERENCES pointofsale(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `route_user`;
CREATE TABLE `route_user` (
  `idroute` int(11) DEFAULT NULL,
  `iduser` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  KEY `iduser_idx` (`iduser`),
  KEY `idroute2` (`idroute`),
  CONSTRAINT `idroute2` FOREIGN KEY (`idroute`) REFERENCES `route` (`idroute`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `iduser` FOREIGN KEY (`iduser`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



DROP TABLE IF EXISTS `supplyPrice`;
CREATE TABLE `supplyPrice` (
  `date` datetime NOT NULL,
  `amount` int(11) DEFAULT NULL,
  `idSupply` int(11) DEFAULT NULL,
  KEY `idSupply_idx` (`idSupply`),
  CONSTRAINT `idSupply` FOREIGN KEY (`idSupply`) REFERENCES `supply` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;




DROP TABLE IF EXISTS `viewing`;
CREATE TABLE `viewing` (
  `idUser` int(11) DEFAULT NULL,
  `idviewing` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `idpointofsale` int(11) DEFAULT NULL,
  PRIMARY KEY (`idviewing`),
  FOREIGN KEY (idUser) REFERENCES users(id),
  FOREIGN KEY (idpointofsale) REFERENCES pointofsale(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `viewing_product`;
CREATE TABLE `viewing_product` (
  `idviewing` int(11) NOT NULL,
  `idproduct` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `type` enum('delivery','return','empty') DEFAULT NULL,
  KEY `idviewing_idx` (`idviewing`),
  KEY `fk_viewing_product_product1_idx` (`idproduct`),
  CONSTRAINT `fk_viewing_product_product1` FOREIGN KEY (`idproduct`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idviewing` FOREIGN KEY (`idviewing`) REFERENCES `viewing` (`idviewing`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE IF NOT EXISTS `templateRoute` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `templateRoute_pointofsale` (
  `idTemplateRoute` int(11) DEFAULT NULL,
  `idpointofsale` int(11) DEFAULT NULL,
  `position` int(11) NOT NULL,
  FOREIGN KEY (idTemplateRoute) REFERENCES templateRoute(id),
  FOREIGN KEY (idpointofsale) REFERENCES pointofsale(id) 
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


/*
INSERT INTO `pointofsale` (`id`, `name`, `address`, `tel`, `image`, `coord`) VALUES
(1,	'Porto Vanilla - Punta Carretas',	'Dr Héctor Miranda 2361',	'11111',	'1_portovanila.png',	POINT(-34.9223327 -56.16135700000001)),
(3,	'Porto Vanila - Punta Gorda',	'Bolivia esq. San Nicolas, montevideo',	'11111',	'3_portovanila.png',	POINT(-34.89317589999084 -56.066079480391295)),
(5,	'Beauty Planet',	'Blanca del tabare 2990   ',	'2710 9790 ',	'5_logo_beauty.png',	POINT(-34.9215449 -56.1561317)),
(6,	'La dulcería',	'Jaime zudañes 2855',	'2710 8010',	'6_29087105_338211440018579_8146224836364992512_n.jpg',	POINT(-34.9166612 -56.1509906)),
(7,	'Shisha',	'marco bruto y placido ellauri',	'',	'27AAB6C8-EC7D-43CD-8F21-21791A11FA80.jpeg',	POINT(-34.9039956 -56.13906069999996)),
(8,	'GOOD VIBES',	'FRANCISCO BAUZA 3351',	'26243338',	'8_good-vibes-logo.jpg',	POINT(-34.9005512 -56.14265399999999)),
(9,	'ikki',	'rio branco y mercedes',	'',	'',	POINT(-34.9044369 -56.19617340000002)),
(10,	'alfajores del uruguay',	'perez castellano 1600',	'',	'',	POINT(-34.9052211 -56.21146199999998)),
(11,	'bendito cafe',	'25 de mayo 475, montevideo',	'',	'',	POINT(-34.90594980000001 -56.20620150000002)),
(12,	'boris',	'iruzaingo 1333, montevideo',	'',	'',	POINT(-34.9075911 -56.20374170000002)),
(13,	'pita y oliva ciudad vieja',	'ituzaingo 1335',	'',	'',	POINT(-34.9075911 -56.20374170000002)),
(14,	'guisolfo',	'zabala 1343',	'',	'',	POINT(-34.908258 -56.20682599999998)),
(15,	'las misiones',	'25 de mayo0449, montevideo',	'',	'',	POINT(-34.9062394 -56.20673529999999)),
(16,	'punto sano',	'treinta y tres 1380, montevideo',	'',	'',	POINT(-34.9067515 -56.205131300000005)),
(17,	's sushi',	'ituzaingo 1342, montevideo',	'',	'',	POINT(-34.9067515 -56.205131300000005)),
(18,	'sin pretenciones',	'sarandi 366, montevideo',	'',	'',	POINT(-34.908436 -56.20752599999997)),
(19,	'snack bar',	'juntcal 1391, montevideo',	'',	'',	POINT(-34.9057223 -56.2013144)),
(20,	'natural food & market',	'bacacay 1339, montevideo',	'',	'',	POINT(-34.906984963278695 -56.20149361279334)),
(21,	'salon matriz',	'rincon 602',	'',	'',	POINT(-34.9060733 -56.20298349999996)),
(22,	'aero kiosko',	'andes 1363, montevideo',	'',	'',	POINT(-34.9062498 -56.198276899999996)),
(23,	'porto vanila misiones',	'misiones 1351, montevideo',	'',	'',	POINT(-34.9077994 -56.206005800000014)),
(24,	'the lab ciudad vieja',	'sarandi 285, montevideo',	'',	'',	POINT(-34.908939 -56.20925850000003)),
(25,	'cotididana',	'buenos aires 501, montevideo',	'',	'',	POINT(-34.9083064 -56.204472899999985)),
(26,	'el naranjo  ciudad vieja',	'buenos aires 552, montevideo',	'',	'',	POINT(-34.9080663 -56.203281300000015)),
(27,	'hotel alma historica',	'solis 1433, montvideo',	'',	'',	POINT(-34.9056349 -56.20916940000001)),
(28,	'mi sueño',	'25 de mayo 456, montevideo',	'',	'',	POINT(-34.9061883 -56.20586679999997)),
(29,	'aromas y sabores',	'casinoni 1469',	'',	'',	POINT(-34.9006041 -56.16583259999999)),
(30,	'boca fria cordon',	'constituyente 1851 y yaro',	'',	'',	POINT(-34.9069115 -56.17623949999995)),
(31,	'confiteria de la rivera',	'rivera y arenal grande',	'',	'',	POINT(-34.902334 -56.1727889)),
(32,	'potts sweets & coffee',	'eduardo acebedo 1047',	'',	'',	POINT(-34.91048809999999 -56.17412030000003)),
(33,	'the lab museo',	'museo de artes visuales, montevideo',	'',	'',	POINT(-34.9138711 -56.164658799999984)),
(34,	'oso pardo salterain',	'salterain 1316',	'',	'',	POINT(-34.904793 -56.169812699999966)),
(35,	'naranjo 18 de julio',	'18 de julio 2164',	'',	'',	POINT(-34.8990524 -56.16832339999996)),
(36,	'frog 6',	'calle perez castellano 1478, montevideo',	'',	'',	POINT(-34.90714259730878 -56.210767120901494)),
(37,	'pastus & co',	'coronel alegre y gestido',	'',	'',	POINT(-34.9062819 -56.1558273)),
(38,	'auto service ghandi',	'jose maria montero 3094',	'',	'',	POINT(-34.92332984767402 -56.15368794173355)),
(39,	'Autoservice Marin',	'solano antuña 2750',	'',	'',	POINT(-34.91839909999999 -56.15398870000001)),
(40,	'autoservice villabiarritz',	'leyenda patria 3022',	'',	'',	POINT(-34.92222030000001 -56.15422899999999)),
(41,	'Conf pocitos',	'roque graceras 795',	'',	'',	POINT(-34.916931575457355 -56.15127064907381)),
(42,	'gluteno',	'scoseria 2637',	'',	'',	POINT(-34.9150916 -56.15560770000002)),
(43,	'café mediterraneo',	'Roque Graseras 829',	'',	'',	POINT(-34.9161076 -56.151185199999986)),
(44,	'LE CLUB',	'21 de setiembre 2780',	'',	'',	POINT(-34.9180678 -56.157075099999986)),
(45,	'MEDIALUNAS CALENTITAS',	'21 de septiembre 2982',	'',	'',	POINT(-34.9197905 -56.15269869999997)),
(46,	'OLIVIA TE CUIDA',	'Luis de la torre 860',	'',	'',	POINT(-34.9149931 -56.15608629999997)),
(47,	'autoservice abril',	'Avelino Miranda 2603',	'',	'',	POINT(-34.8935507 -56.16319899999996)),
(48,	'su market',	'Luis ponce 1501, montevideo',	'',	'',	POINT(-34.9003632 -56.15955859999997)),
(49,	'carmesi',	'santiago vazques 1291, montevideo',	'',	'',	POINT(-34.9081732 -56.150364800000034)),
(50,	'frog 1 ',	'av. Brazil 2968, montevideo',	'',	'',	POINT(-34.9117501 -56.151495299999965)),
(51,	'frog3',	'av. Rivera 3090, montevideo',	'',	'',	POINT(-34.9030103 -56.14891869999997)),
(52,	'frog 4',	'gabriel pereira 3234, montevideo',	'',	'',	POINT(-34.910339 -56.146998499999995)),
(53,	'frog 5',	'ellauri 668, montevideo',	'',	'',	POINT(-34.9186621 -56.15571950000003)),
(54,	'frog 7',	'cavia 3058, montevideo',	'',	'',	POINT(-34.913515468915456 -56.15120058836061)),
(55,	'frog 11',	'gabriel pereira 2984',	'',	'',	POINT(-34.9055281 -56.15177790000001));
*/

INSERT INTO `users` (`id`, `user_name`, `firstname`, `lastname`, `password`, `rol_id`, `id_user_master`) VALUES
(2,	'cabecacorada',	'Juan',	'Perez',	'123456',	1,	0),
(3,	'olho',	'Juan',	'Gonzales',	'123456',	1,	0),
(4,	'admin@goodvibes.uy',	'Admin',	'Admin',	'7c4a8d09ca3762af61e59520943dc2',	1,	26),
(5,	'repartidor@goodvibes.uy',	'Repartidor',	'Repartidor',	'7c4a8d09ca3762af61e59520943dc2',	2,	27);

INSERT INTO `product` (`id`, `name`, `path_image`) VALUES
(1,	'Paradise Dream',	'paradiseDream.png'),
(2,	'Citra Trip',	'2_citraTrip.png'),
(3,	'Sun Kiss',	'sunKiss.png'),
(4,	'Green Life',	'greenLife.png'),
(5,	'Yellow Rolling',	'yellow-rolling.png');

INSERT INTO `unit` (`id`, `name`) VALUES
(1,	'Kg'),
(2,	'L');

INSERT INTO `route` (`idroute`, `name`) VALUES
(6,	'Punta Carretas'),
(8,	'Ruta de prueba '),
(9,	'Otro'),
(10,	'Otra ruta2');

/*
INSERT INTO `route_pointofsale` (`idroute`, `idpointofsale`, `position`) VALUES
(6,	1,	1),
(6,	7,	2);


INSERT INTO `route_user` (`idroute`, `iduser`, `date`) VALUES
(9,	3,	'2018-02-01'),
(9,	3,	'2018-02-03'),
(10,	2,	'2018-02-01'),
(10,	4,	'2018-02-07');
*/

INSERT INTO `supply` (`id`, `name`, `unit`, `path_image`) VALUES
(1,	'Edulcorate',	2,	'edulcorante.png'),
(2,	'Limones',	1,	'limones.png'),
(3,	'Naranja',	1,	'naranja.png'),
(4,	'Pepino',	1,	'pepino.png'),
(5,	'Manzana Roja',	1,	'manzana-roja.png'),
(6,	'Pera',	1,	'pera.png'),
(7,	'Espinaca',	1,	'espinaca.png'),
(8,	'Apio',	1,	'apio.png'),
(9,	'Kale',	1,	'kale.png'),
(10,	'Manzana verde',	1,	'manzana-verde.png');


INSERT INTO `supplyPrice` (`date`, `amount`, `idSupply`) VALUES
('2018-02-10 21:00:43',	100,	2),
('2018-02-10 21:02:24',	150,	3),
('2018-02-10 21:22:57',	170,	3),
('2018-02-11 08:48:50',	70,	4),
('2018-02-11 08:51:05',	75,	5),
('2018-02-11 08:51:46',	120,	6),
('2018-02-11 08:52:30',	150,	7),
('2018-02-11 08:54:04',	200,	8),
('2018-02-11 08:54:37',	120,	9),
('2018-02-11 08:55:25',	75,	5),
('2018-02-11 08:56:30',	100,	10),
('2018-03-19 17:12:45',	80,	5);


/*
INSERT INTO `viewing` (`idUser`, `idviewing`, `date`, `idpointofsail`) VALUES
(4,	29,	'2018-03-27 10:03:13',	22),
(4,	30,	'2018-03-28 09:13:51',	10),
(4,	31,	'2018-03-28 09:13:53',	10);


INSERT INTO `viewing_product` (`idviewing`, `idproduct`, `quantity`, `type`) VALUES
(29,	1,	3,	'delivery'),
(29,	1,	0,	'return'),
(29,	1,	0,	'empty'),
(29,	2,	3,	'delivery'),
(29,	2,	0,	'return'),
(29,	2,	0,	'empty'),
(29,	3,	0,	'delivery'),
(29,	3,	0,	'return'),
(29,	3,	0,	'empty'),
(29,	4,	0,	'delivery'),
(29,	4,	0,	'return'),
(29,	4,	0,	'empty'),
(29,	5,	0,	'delivery'),
(29,	5,	0,	'return'),
(29,	5,	0,	'empty'),
(30,	1,	5,	'delivery'),
(30,	1,	0,	'return'),
(30,	1,	5,	'empty'),
(30,	2,	0,	'delivery'),
(30,	2,	0,	'return'),
(30,	2,	4,	'empty'),
(30,	3,	0,	'delivery'),
(30,	3,	0,	'return'),
(30,	3,	0,	'empty'),
(30,	4,	0,	'delivery'),
(30,	4,	0,	'return'),
(30,	4,	0,	'empty'),
(30,	5,	0,	'delivery'),
(30,	5,	0,	'return'),
(30,	5,	0,	'empty'),
(31,	1,	5,	'delivery'),
(31,	1,	0,	'return'),
(31,	1,	5,	'empty'),
(31,	2,	0,	'delivery'),
(31,	2,	0,	'return'),
(31,	2,	4,	'empty'),
(31,	3,	0,	'delivery'),
(31,	3,	0,	'return'),
(31,	3,	0,	'empty'),
(31,	4,	0,	'delivery'),
(31,	4,	0,	'return'),
(31,	4,	0,	'empty'),
(31,	5,	0,	'delivery'),
(31,	5,	0,	'return'),
(31,	5,	0,	'empty');
*/

-- 2018-03-29 15:42:29