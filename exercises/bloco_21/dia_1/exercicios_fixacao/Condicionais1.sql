SELECT city, IF (country_id <= 60, 'lado a', 'lado b') AS lado
FROM sakila.city;

SELECT first_name, IF (active, 'ativo', 'inativo') AS status
FROM sakila.customer;

SELECT first_name, email,
	CASE
        WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
        WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
        WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
        ELSE 'não classificado'
	END AS valor
FROM sakila.customer;
