USE DB_PERSONAL_FINANCES;

------- *** INSERTS *** -------

INSERT INTO categoria (Nombre) VALUES ('Otros')

SELECT * FROM CATEGORIA


DELIMITER //

CREATE PROCEDURE sp_getCategories()
BEGIN
    SELECT IdCategoria, Nombre
    FROM categoria;
END //

DELIMITER ;

CALL sp_getCategories() 


