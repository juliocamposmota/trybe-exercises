SELECT 
    c.first_name, COUNT(a.address) AS quantidade_enderecos
FROM
    sakila.customer c
        INNER JOIN
    sakila.address a ON c.address_id = a.address_id
WHERE
    c.active = 1
GROUP BY c.first_name
ORDER BY c.first_name;
