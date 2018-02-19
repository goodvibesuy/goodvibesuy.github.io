CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_name` varchar(120) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `user_name_UNIQUE` (`user_name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `database_name` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `max_users` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

CREATE TABLE `users_accounts` (
  `user_id` int(10) unsigned NOT NULL,
  `account_id` int(10) unsigned NOT NULL,
  `owner` tinyint(3) unsigned NOT NULL,
  PRIMARY KEY (`user_id`,`account_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `sessions` (
  `user_name` varchar(120) NOT NULL,
  `login_date` datetime NOT NULL,
  `account_id` int(11) NOT NULL,
  `token_id` varchar(150) NOT NULL,
  `database_name` varchar(50) NOT NULL,
  PRIMARY KEY (`user_name`,`login_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

