USE `good`;

-- Delete all data
DELETE FROM `viewing_product`;
DELETE FROM `viewing` ;
DELETE FROM `product_supply`;
DELETE FROM `supplyPrice`;
DELETE FROM `provider`;
DELETE FROM `supply`;
DELETE FROM `route_user`;
DELETE FROM  `route_pointofsale`;
DELETE FROM `route`;
DELETE FROM `unit`;
DELETE FROM `product`;
DELETE FROM `users`;
DELETE FROM `pointofsale`;
DELETE FROM `groupPointofsale`;

INSERT INTO `groupPointofsale` VALUES
(1, 'Punta del Este'),
(2, 'Montevideo Mayoristas'),
(3, 'Montevideo Minoristas'),
(4, 'Promocion');

INSERT INTO `pointofsale` (`id`, `contactName`,`name`, `businessName`, `RUT`, `address`, `tel`, `image`, `coord`, `idGroup`) VALUES
(1,	'Jose Perez', 'Porto Vanilla - Punta Carretas',	'Porto Vanilla - Punta Carretas', 'RUT 123',	'Dr Hector Miranda 2361',	'11111',	'1_portovanila.png',	ST_GeomFromText('POINT(-34.9223327 -56.16135700000001)'),1),
(3,	'Jose Perez', 'Porto Vanila - Punta Gorda',	'Porto Vanila - Punta Gorda', 'RUT 123',	'Bolivia esq. San Nicolas, montevideo',	'11111',	'3_portovanila.png',	ST_GeomFromText('POINT(-34.89317589999084 -56.066079480391295)'),1),
(2,	'Jose Perez', 'Beauty Planet','Beauty Planet', 'RUT 123',	'Blanca del tabare 2990   ',	'2710 9790 ',	'5_logo_beauty.png',	ST_GeomFromText('POINT(-34.9215449 -56.1561317)'),1),
(6,	'Jose Perez', 'La dulceria','La dulceria',	 'RUT 123','Jaime zudanes 2855',	'2710 8010',	'6_29087105_338211440018579_8146224836364992512_n.jpg',	ST_GeomFromText('POINT(-34.9166612 -56.1509906)'),1),
(7,	'Jose Perez', 'Shisha',	'Shisha',	 'RUT 123','marco bruto y placido ellauri',	'',	'27AAB6C8-EC7D-43CD-8F21-21791A11FA80.jpeg',	ST_GeomFromText('POINT(-34.9039956 -56.13906069999996)'),1),
(8,'Jose Perez', 	'GOOD VIBES',	'GOOD VIBES', 'RUT 123',	'FRANCISCO BAUZA 3351',	'26243338',	'8_good-vibes-logo.jpg',	ST_GeomFromText('POINT(-34.9005512 -56.14265399999999)'),1),
(9,	'Jose Perez', 'ikki',		'ikki', 'RUT 123',	'rio branco y mercedes',	'',	'',	ST_GeomFromText('POINT(-34.9044369 -56.19617340000002)'),1),
(10,'Jose Perez', 	'alfajores del uruguay',	'alfajores del uruguay',	 'RUT 123','perez castellano 1600',	'',	'',	ST_GeomFromText('POINT(-34.9052211 -56.21146199999998)'),1),
(11,'Jose Perez', 	'bendito cafe','bendito cafe', 'RUT 123',	'25 de mayo 475, montevideo',	'',	'',	ST_GeomFromText('POINT(-34.90594980000001 -56.20620150000002)'),1),
(12,'Jose Perez', 	'boris','boris', 'RUT 123',	'iruzaingo 1333, montevideo',	'',	'',	ST_GeomFromText('POINT(-34.9075911 -56.20374170000002)'),1),
(13,'Jose Perez', 	'pita y oliva ciudad vieja','pita y oliva ciudad vieja',	 'RUT 123','ituzaingo 1335',	'',	'',	ST_GeomFromText('POINT(-34.9075911 -56.20374170000002)'),1),
(14,'Jose Perez', 	'guisolfo','guisolfo',	 'RUT 123','zabala 1343',	'',	'',	ST_GeomFromText('POINT(-34.908258 -56.20682599999998)'),1),
(15,	'Jose Perez', 'las misiones','las misiones',	 'RUT 123','25 de mayo0449, montevideo',	'',	'',	ST_GeomFromText('POINT(-34.9062394 -56.20673529999999)'),1),
(16,'Jose Perez', 	'punto sano',	'punto sano',	 'RUT 123','treinta y tres 1380, montevideo',	'',	'',	ST_GeomFromText('POINT(-34.9067515 -56.205131300000005)'),1),
(17,'Jose Perez', 	's sushi','s sushi',	 'RUT 123','ituzaingo 1342, montevideo',	'',	'',	ST_GeomFromText('POINT(-34.9067515 -56.205131300000005)'),1),
(18,'Jose Perez', 	'sin pretenciones','sin pretenciones',	 'RUT 123','sarandi 366, montevideo',	'',	'',	ST_GeomFromText('POINT(-34.908436 -56.20752599999997)'),1),
(19,'Jose Perez', 	'snack bar','snack bar',	 'RUT 123','juntcal 1391, montevideo',	'',	'',	ST_GeomFromText('POINT(-34.9057223 -56.2013144)'),1),
(20,'Jose Perez', 	'natural food & market','natural food & market', 'RUT 123',	'bacacay 1339, montevideo',	'',	'',	ST_GeomFromText('POINT(-34.906984963278695 -56.20149361279334)'),1),
(21,'Jose Perez', 	'salon matriz',	'salon matriz', 'RUT 123',	'rincon 602',	'',	'',	ST_GeomFromText('POINT(-34.9060733 -56.20298349999996)'),1),
(22,'Jose Perez', 	'aero kiosko','aero kiosko',	 'RUT 123','andes 1363, montevideo',	'',	'',	ST_GeomFromText('POINT(-34.9062498 -56.198276899999996)'),1),
(23,	'Jose Perez', 'porto vanila misiones','porto vanila misiones', 'RUT 123',	'misiones 1351, montevideo',	'',	'',	ST_GeomFromText('POINT(-34.9077994 -56.206005800000014)'),1),
(24,	'Jose Perez', 'the lab ciudad vieja','the lab ciudad vieja',	 'RUT 123','sarandi 285, montevideo',	'',	'',	ST_GeomFromText('POINT(-34.908939 -56.20925850000003)'),1),
(25,	'Jose Perez', 'cotididana','cotididana', 'RUT 123',	'buenos aires 501, montevideo',	'',	'',	ST_GeomFromText('POINT(-34.9083064 -56.204472899999985)'),1),
(26,	'Jose Perez', 'el naranjo  ciudad vieja',	'el naranjo  ciudad vieja', 'RUT 123',	'buenos aires 552, montevideo',	'',	'',	ST_GeomFromText('POINT(-34.9080663 -56.203281300000015)'),1),
(27,	'Jose Perez', 'hotel alma historica',	'hotel alma historica', 'RUT 123',	'solis 1433, montvideo',	'',	'',	ST_GeomFromText('POINT(-34.9056349 -56.20916940000001)'),1),
(28,	'Jose Perez', 'mi suenio',	'mi suenio',	 'RUT 123','25 de mayo 456, montevideo',	'',	'',	ST_GeomFromText('POINT(-34.9061883 -56.20586679999997)'),1),
(29,	'Jose Perez', 'aromas y sabores','aromas y sabores',	 'RUT 123','casinoni 1469',	'',	'',	ST_GeomFromText('POINT(-34.9006041 -56.16583259999999)'),1),
(30,	'Jose Perez', 'boca fria cordon',	'boca fria cordon',	 'RUT 123','constituyente 1851 y yaro',	'',	'',	ST_GeomFromText('POINT(-34.9069115 -56.17623949999995)'),1),
(31,	'Jose Perez', 'confiteria de la rivera',	'confiteria de la rivera',	 'RUT 123','rivera y arenal grande',	'',	'',	ST_GeomFromText('POINT(-34.902334 -56.1727889)'),1),
(32,	'Jose Perez', 'potts sweets & coffee',	'potts sweets & coffee', 'RUT 123',	'eduardo acebedo 1047',	'',	'',	ST_GeomFromText('POINT(-34.91048809999999 -56.17412030000003)'),1),
(33,	'Jose Perez', 'the lab museo','the lab museo',	 'RUT 123','museo de artes visuales, montevideo',	'',	'',	ST_GeomFromText('POINT(-34.9138711 -56.164658799999984)'),1),
(34,	'Jose Perez', 'oso pardo salterain','oso pardo salterain',	 'RUT 123','salterain 1316',	'',	'',	ST_GeomFromText('POINT(-34.904793 -56.169812699999966)'),1),
(35,	'Jose Perez', 'naranjo 18 de julio','naranjo 18 de julio', 'RUT 123',	'18 de julio 2164',	'',	'',	ST_GeomFromText('POINT(-34.8990524 -56.16832339999996)'),1),
(36,	'Jose Perez', 'frog 6',	'frog 6',	 'RUT 123','calle perez castellano 1478, montevideo',	'',	'',	ST_GeomFromText('POINT(-34.90714259730878 -56.210767120901494)'),1),
(37,	'Jose Perez', 'pastus & co','pastus & co', 'RUT 123',	'coronel alegre y gestido',	'',	'',	ST_GeomFromText('POINT(-34.9062819 -56.1558273)'),1),
(38,'Jose Perez', 	'auto service ghandi','auto service ghandi', 'RUT 123',	'jose maria montero 3094',	'',	'',	ST_GeomFromText('POINT(-34.92332984767402 -56.15368794173355)'),1),
(39,	'Jose Perez', 'Autoservice Marin','Autoservice Marin', 'RUT 123',	'solano antunia 2750',	'',	'',	ST_GeomFromText('POINT(-34.91839909999999 -56.15398870000001)'),1),
(40,	'Jose Perez', 'autoservice villabiarritz','autoservice villabiarritz', 'RUT 123',	'leyenda patria 3022',	'',	'',	ST_GeomFromText('POINT(-34.92222030000001 -56.15422899999999)'),1),
(41,	'Jose Perez', 'Conf pocitos','Conf pocitos',	 'RUT 123','roque graceras 795',	'',	'',	ST_GeomFromText('POINT(-34.916931575457355 -56.15127064907381)'),1),
(42,'Jose Perez', 	'gluteno','gluteno',	 'RUT 123','scoseria 2637',	'',	'',	ST_GeomFromText('POINT(-34.9150916 -56.15560770000002)'),1),
(43,	'Jose Perez', 'cafe mediterraneo','cafe mediterraneo',	 'RUT 123','Roque Graseras 829',	'',	'',	ST_GeomFromText('POINT(-34.9161076 -56.151185199999986)'),1),
(44,	'Jose Perez', 'LE CLUB',	'LE CLUB',	 'RUT 123','21 de setiembre 2780',	'',	'',	ST_GeomFromText('POINT(-34.9180678 -56.157075099999986)'),1),
(45,	'Jose Perez', 'MEDIALUNAS CALENTITAS','MEDIALUNAS CALENTITAS', 'RUT 123',	'21 de septiembre 2982',	'',	'',	ST_GeomFromText('POINT(-34.9197905 -56.15269869999997)'),1),
(46,	'Jose Perez', 'OLIVIA TE CUIDA','OLIVIA TE CUIDA', 'RUT 123',	'Luis de la torre 860',	'',	'',	ST_GeomFromText('POINT(-34.9149931 -56.15608629999997)'),1),
(47,	'Jose Perez', 'autoservice abril',	'autoservice abril', 'RUT 123',	'Avelino Miranda 2603',	'',	'',	ST_GeomFromText('POINT(-34.8935507 -56.16319899999996)'),1),
(48,	'Jose Perez', 'su market','su market', 'RUT 123',	'Luis ponce 1501, montevideo',	'',	'',	ST_GeomFromText('POINT(-34.9003632 -56.15955859999997)'),1),
(49,	'Jose Perez', 'carmesi','carmesi',	 'RUT 123','santiago vazques 1291, montevideo',	'',	'',	ST_GeomFromText('POINT(-34.9081732 -56.150364800000034)'),1),
(50,	'Jose Perez', 'frog 1 ','frog 1 ', 'RUT 123',	'av. Brazil 2968, montevideo',	'',	'',	ST_GeomFromText('POINT(-34.9117501 -56.151495299999965)'),1),
(51,	'Jose Perez', 'frog3',		'frog3',	 'RUT 123','av. Rivera 3090, montevideo',	'',	'',	ST_GeomFromText('POINT(-34.9030103 -56.14891869999997)'),1),
(52,	'Jose Perez', 'frog 4',		'frog 4',	 'RUT 123','gabriel pereira 3234, montevideo',	'',	'',	ST_GeomFromText('POINT(-34.910339 -56.146998499999995)'),1),
(53,	'Jose Perez', 'frog 5','frog 5',	 'RUT 123','ellauri 668, montevideo',	'',	'',	ST_GeomFromText('POINT(-34.9186621 -56.15571950000003)'),1),
(54,	'Jose Perez', 'frog 7','frog 7',	 'RUT 123','cavia 3058, montevideo',	'',	'',	ST_GeomFromText('POINT(-34.913515468915456 -56.15120058836061)'),1),
(55,	'Jose Perez', 'frog 11',	'frog 11',	 'RUT 123','gabriel pereira 2984',	'',	'',	ST_GeomFromText('POINT(-34.9055281 -56.15177790000001)'),1);


INSERT INTO `pointofsale` (`contactName`,`name`, `businessName`, `RUT`, `address`,`idGroup`) VALUES
("contacto", "conf. nuevo pocitos","nuevo pocitos s.a","210234400013","26 de marzo 3415",1),
("contacto","Corener shop","padestar sa","215146230015",	"Ramon massini 3348",1),
("contacto","deli shop",	"PIMENTON SRL",	"217162200010",	"benito blanco 908",1),
("contacto","el horno de juan",	"buena onda s.a",	"213593430012",	"Marti 3391 esq Chucarro",1),
("contacto","el ingrediente secreto",	"alejandra farias",	"217398610018",	"26 de marzo. 3285",1),
("contacto","Espacio Gourmet",	"Alejandra munhoz",	"217291490015",	"26 de marzo 1305",1),
("contacto","FONTANES",	"dranto sa",	"217603750017",	"rivera 3652",1),
("contacto","gracia",	"t3m srl",	"217924790013",	"26 de marzo esq guayaqui",1),
("contacto","la cosecha",	"c.rostani y g. astorga",	"218067170019",	"benito blanco esq buxareo",1),
("contacto","la nona",	"il forno srl",	"217313750014",	"benito blanco 1097 esq guayaqui",1),
("contacto","LA VACA AZUL",	"decaatro oval srl",	"218042200011",	"berro 1376/02",1),
("contacto","lutini",	"FIFEMPAO SRL",	"218126050010",	"CHANA 2112",1),
("contacto","MANOLA ROTICERIA",	"Claudia moreira",	"217895110013",	"Gabriel pereira 3212",1),
("contacto","Miguel Gentile exoticos",	"exoticos srl",	"216613660012",	"Av. Brasil 2598",1),
("contacto","OLIVA Y NUEZ",	"maRia m. vean dominguez",	"216613000012",	"g. pereira 2761",1),
("contacto","pastus & co",	"pastus & co srl",	"218076440015",	"coronel alegre y gestido",1),
("contacto","PITA Y OLIVA",	"rodrigo del campo terra",	"217717870011",	"Pablo galarza 3629",1),
("contacto","porto vanila (wtc)",	"deboril sa",	"214867730016",	"luis bonavita 1294 (wtc)",1),
("contacto","SHISHA",	"bali uruguayo srl",	"217574850012",	"marco bruto 1300",1),
("contacto","SUPER BERRO",	"ripab srl",	"216276100017",	"berro 1216",1),
("contacto","tandem",	"tandem uruguay srl",	"218081520013",	"constituyente 2039",1),
("contacto","TERRUnhO",	"mariana guerrero",	"217795050019",	"rivera 3432",1),
("contacto","the lab pocitos",	"trading investment group srl",	"217689270019",	"luis a. de herrera 1057",1),
("contacto","TONYS",	"maria barrios granat","111","Bartolito Mitre 2848",1);


INSERT INTO `pointofsale` (`contactName`,`name`, `businessName`, `RUT`, `address`,`idGroup`) VALUES
("contacto","ancap costanera (terminal)","ruta 10 srl",	"214952730017",	"rambla costanera (ciudad de la costa)",1),
("contacto","CARRASCO BEER house",	"RAFAEL RAMOS Y OTROS",	"217839340017",	"Carlos Federico Saez 6433 esq arocena",1),
("contacto","el gran pez",	"el gran pez srl",	"216845650016",	"san ramon, m. 220 solar 5",1),
("contacto","el naranjo MAM",	"nelson gabriel martinez",	"214634020015",	"jose l. terra 2220 loc 49/50 (mam)",1),
("contacto","ESSO rivera y propios",	"nyr ltda rut" ,	"211753840012",	"rivera y propios",1),
("contacto","frog 10",	"ussel s.a",	"214214350013",	"gabriela mistral 2201",1),
("contacto","frog 12",	"ussel s.a",	"214214350013",	"Blvd. Artigas 3750 esq. Ramon Marquez",1),
("contacto","frog 15",	"ussel s.a",	"214214350013",	"constituyente 1788",1),
("contacto","frog 16",	"ussel s.a",	"214214350013",	"8 de Octubre 3929 esq. Lindoro Forteza",1),
("contacto","frog 18",	"ussel s.a",	"214214350013",	"Salvador Ferrer Serra 2023 esq Defensa",1),
("contacto","frog 2",	"ussel s.a",	"214214350013",	"Libano 1428 y Ciudad de Paris",1),
("contacto","isla cafe",	"coralik s.a",	"215459960017",	"arocena 1551",1),
("contacto","jardin cervecero",	"del monte coppola",	"218070750012",	"rivera esq perez bultrer",1),
("contacto","lutini",	"FIFEMPAO SRL",	"218126050010",	"CHANA 2112",1),
("contacto","porto vanila (carrasco)",	"conamil s.a",	"214214670018",	"Av Alfredo Arocena",1),
("contacto","porto vanila general paz",	"conamil s.a",	"214214670018",	"general paz",1),
("contacto","poto vanila portones shop",	"conamil s.a",	"214214670018",	"Portones Shopping",1);



INSERT INTO `pointofsale` (`contactName`,`name`, `businessName`, `RUT`, `address`,`idGroup`) VALUES
("contacto", "AROMAS Y SABORES",	"claudia reino",	"214990180010",	"casinoni 1469" , 1),
("contacto", "BOCA FRIA CENTRO",	"silvia yanhez y norma rodriguez",	"217880660012",	"constituyente 1851 esq yaro" , 1),
("contacto",  "BOCADITOS SRL",	"bocaditos srl"	,"213375290014",	"angel salvo 149", 1),
("contacto",  "CONFITERIA MONTES",	"montalvar ltda",	"215905060017",	"SAN JOSE Y PARAGUAY", 1),
("contacto",  "de la rivera",	"lorena esquivel",	"217860100011",	"rivera y arenal grande", 1),
("contacto",  "EL POPULAR","...","...","br espanha frente al hombu", 1),
("contacto",  "FROG 15",	"ussel s.a",	"214214350013",	"constituyente 1788", 1),
("contacto",  "FROG 19",	"ussel s.a",	"214214350013",	"Ing. Luis Ponce 1486 esq. Pouey", 1),
("contacto",  "FROG 9",	"ussel s.a",	"214214350013",	"Gonzalo Ramirez 1345 y Ejido", 1),
("contacto",  "FROG 13",	"ussel s.a",	"214214350013",	"Carlos Quijano 1309 esq. San Jose", 1),
("contacto",  "LUTINI",	"FIFEMPAO SRL",	"218126050010",	"CHANA 2112", 1),
("contacto",  "OSO PARDO OBLIGADO",	"oso pardo srl",	"218032790010",	"obligado 1317", 1),
("contacto",  "OSO PARDO SALTERAIN",	"oso pardo srl",	"218032790010",	"salterain 1316", 1),
("contacto",  "SHELTER PATIO CERVECERO",	"prolupulo SRL",	"217780060013",	"Andresito Guacurari 1806", 1),
("contacto",  "su market",	"lyon ary berniger macknight",	"217782400016",	"Luis ponce 1501", 1),
("contacto",  "super avril",	"fabricio abbate",	"180160930019",	"Avelino Miranda 2603", 1),
("contacto", "WYE WORKS",	"wye works srl",	"216296470014",	"Bulevar General Artigas 252 (club golf)" , 1);







INSERT INTO `users` (`user_name`, `firstname`, `lastname`, `password`, `rol_id`, `id_user_master`) VALUES
(	'cabecacorada',	'Juan',	'Perez',	'123456',	1,	0),
(	'olho',	'Juan',	'Gonzales',	'123456',	1,	0),
(	'admin@goodvibes.uy',	'Admin',	'Admin',	'7c4a8d09ca3762af61e59520943dc2',	1,	26),
(	'repartidor@goodvibes.uy',	'Repartidor',	'Repartidor',	'7c4a8d09ca3762af61e59520943dc2',	2,	27);

INSERT INTO `product` (`id`, `name`, `path_image`) VALUES
(1,	'Paradise Dream',	'paradiseDream.png'),
(2,	'Citra Trip',	'citraTrip.png'),
(3,	'Sun Kiss',	'sunKiss.png'),
(4,	'Green Life',	'greenLife.png'),
(5,	'Yellow Rolling',	'yellow-rolling.png');

INSERT INTO `unit` (`id`, `name`) VALUES
(1,	'Kg'),
(2,	'L');


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


INSERT INTO `provider` (`name`) VALUES
('Guarino'),
('Don juan'),
('Don rufino'),
('CAPORALE'),
('Isabel Kurdzie');

INSERT INTO `supplyPrice` (`date`, `price_date`, `amount`, `idSupply`, `idProvider`) VALUES
('2018-02-10 21:00:43', '2018-02-10 21:00:43', 31, 1,1),
('2018-02-10 21:00:43','2018-02-10 21:02:24', 49, 2,2),
('2018-02-10 21:00:43','2018-02-10 21:22:57', 42, 3,3),
('2018-02-10 21:00:43','2018-02-11 08:48:50', 16, 4,4),
('2018-02-10 21:00:43','2018-02-11 08:51:05', 75, 5,1),
('2018-02-10 21:00:43','2018-02-11 08:51:46', 24, 6,2),
('2018-02-10 21:00:43','2018-02-11 08:52:30', 34, 7,3),
('2018-02-10 21:00:43','2018-02-11 08:54:04', 31, 8,4),
('2018-02-10 21:00:43','2018-02-11 08:54:37', 37, 9,1),
('2018-02-10 21:00:43','2018-02-11 08:55:25', 75, 10,2),
('2018-02-10 21:00:43','2018-02-11 08:56:30', 40, 11,3),
('2018-02-10 21:00:43','2018-02-11 08:56:30', 60, 12,4),
('2018-02-10 21:00:43','2018-02-11 08:56:30', 57, 13,1),
('2018-02-10 21:00:43','2018-02-11 08:56:30', 46, 14,2),
('2018-02-10 21:00:43','2018-02-11 08:56:30', 50, 15,3);


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