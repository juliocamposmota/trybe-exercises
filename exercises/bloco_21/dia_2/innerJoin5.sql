SELECT 
    c.first_name, c.email, a.address_id, a.address, a.district
FROM
    sakila.customer c
        INNER JOIN
    sakila.address a ON c.address_id = a.address_id
WHERE
    c.first_name LIKE '%RENE%';
