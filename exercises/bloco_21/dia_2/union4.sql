(SELECT first_name, last_name FROM sakila.customer)
UNION ALL
(SELECT first_name, last_name FROM sakila.actor)
ORDER BY first_name
LIMIT 15 OFFSET 45;
