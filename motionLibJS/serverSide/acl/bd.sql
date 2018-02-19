CREATE TABLE IF NOT EXISTS `resources` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `rols` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `rols_resources` (
  `rol_id` int(11) NOT NULL,
  `resource_id` int(11) NOT NULL,
  FOREIGN KEY (rol_id) REFERENCES rols(id),
  FOREIGN KEY (resource_id) REFERENCES resources(id)  
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
