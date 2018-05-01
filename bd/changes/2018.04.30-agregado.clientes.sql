
-- 
-- Proposito: cambios de BD para agregar los clientes a los recorridos
--

-- Comienzo de Transaccion
START TRANSACTION;

-- 1. renombrado client a client_bak
    ALTER TABLE client RENAME TO client_bak;

-- 2. nueva tabla para los atributos extra de client
    CREATE TABLE `client` (
        `idCustomer` INT(11) NOT NULL,
        `lastName` VARCHAR(56) NOT NULL,
        
        PRIMARY KEY (`idCustomer`),
        FOREIGN KEY (idCustomer) REFERENCES customer(id)
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Commit de transaccion
COMMIT;