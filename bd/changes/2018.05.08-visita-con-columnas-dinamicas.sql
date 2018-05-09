
-- 
-- Proposito: integrar columnas dinámicas en la visita de puntos de venta
--

-- Comienzo de Transaccion
START TRANSACTION;

    -- 1. agregada tabla para mantener los tipos de columna en la visita
    CREATE TABLE `viewing_product_type` (
        `id` int(11) NOT NULL,
        `name` varchar(64) NOT NULL,
        `label` varchar(64) NOT NULL,
        `score` int(11) NOT NULL,    
        PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

    -- 2. Datos de la tabla `viewing_product_type`
    INSERT INTO `viewing_product_type` (`id`, `name`, `label`, `score`) VALUES
    (1, 'delivery', 'Entregados', 1),
    (2, 'return', 'Devolución vencidos', -1),
    (3, 'empty', 'Devolución vacíos', 0);

    -- 3. agregada columna en viewing_product para mantener la relacion con viewing_product_type
    --      se agrega "NULL DEFAULT 0" para que no rompa, al final del scripts se cambia el tipo a "NOT NULL"
    ALTER TABLE `viewing_product` ADD `idviewingProductType` INT(11) NULL DEFAULT 0;

    -- 4. actualizar columna idviewingProductType en la tabla viewing_product usando el valor de type
    UPDATE `viewing_product` SET `idviewingProductType` = 1 WHERE `type` = "delivery";
    UPDATE `viewing_product` SET `idviewingProductType` = 2 WHERE `type` = "return";
    UPDATE `viewing_product` SET `idviewingProductType` = 3 WHERE `type` = "empty";

    -- 5. cambiado el tipo de columna `idviewingProductType` para que no acepte null
    ALTER TABLE `viewing_product` MODIFY COLUMN `idviewingProductType` INT(11) NOT NULL;

    -- 6. agregado foreign key 
    ALTER TABLE  `viewing_product`
    ADD CONSTRAINT fk_viewing_product_idviewingProductType
    FOREIGN KEY (idviewingProductType)
    REFERENCES viewing_product_type(id);

-- Commit de transaccion
COMMIT;