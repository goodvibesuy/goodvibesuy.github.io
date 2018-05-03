
-- 
-- Proposito: cambios de BD para integrar los pointofsale a los customers
--

-- Comienzo de Transaccion
START TRANSACTION;

-- 1. renombrado Pointofsale a Customer
    ALTER TABLE pointofsale RENAME TO customer;

-- 2. nueva tabla para los atributos extra de Pointofsale
    CREATE TABLE `pointofsale` (
        `idCustomer` INT(11) NOT NULL,
        `businessName` VARCHAR(56) NOT NULL,
        `RUT` VARCHAR(56) NOT NULL,
        PRIMARY KEY (`idCustomer`),
        FOREIGN KEY (idCustomer) REFERENCES customer(id)
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 3. insertar en la nueva tabla pointofsale los atributos extras
    INSERT INTO pointofsale (idCustomer, businessName, RUT)
    SELECT id, businessName, RUT
    FROM customer;

-- 4. eliminar las columnas extra de la tabla base
    ALTER TABLE customer DROP COLUMN businessName;
    ALTER TABLE customer DROP COLUMN RUT;

-- 5. Por consistencia, renombrado grouppointofsale a groupCustomer
    ALTER TABLE groupPointofsale RENAME TO groupCustomer;

-- 6. Por consistencia, renombrar columna idGroupPointofsale de productprice a idGroupCustomer
    ALTER TABLE productprice CHANGE `idGroupPointofsale` `idGroupCustomer` INT(11) NOT NULL;

-- 7. Por consistencia, renombrar columna idpointofsale de viewing a idCustomer
    ALTER TABLE viewing CHANGE `idpointofsale` `idCustomer` INT(11) DEFAULT NULL;

-- 8. Por consistencia, renombrado route_pointofsale a route_customer
    ALTER TABLE route_pointofsale RENAME TO route_customer;

-- 9. Por consistencia, renombrar columna idpointofsale de viewing a idCustomer
    ALTER TABLE route_customer CHANGE `idPointofsale` `idCustomer` INT(11) DEFAULT NULL;

-- 10. Por consistencia, renombrado templateroute_pointofsale a templateroute_customer
    ALTER TABLE templateRoute_pointofsale RENAME TO templateRoute_customer;

-- 11. Por consistencia, renombrar columna idpointofsale de viewing a idCustomer
    ALTER TABLE templateRoute_customer CHANGE `idpointofsale` `idCustomer` INT(11) DEFAULT NULL;

-- Commit de transaccion
COMMIT;