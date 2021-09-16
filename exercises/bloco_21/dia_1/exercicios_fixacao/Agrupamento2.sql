SELECT COUNT(customer_id), active
FROM sakila.customer
GROUP BY active;

SELECT COUNT(active), store_id
FROM sakila.customer
GROUP BY store_id;

SELECT rating, AVG(rental_duration) AS `Duracao media`
FROM sakila.film
GROUP BY rating
ORDER BY `Duracao media` DESC;

SELECT district, COUNT(address) AS `Cidades Cadastradas`
FROM sakila.address
GROUP BY district
ORDER BY `Cidades Cadastradas` DESC;
