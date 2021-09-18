SELECT 
    s.first_name, s.last_name, AVG(p.amount) AS media_valor
FROM
    sakila.staff s
        INNER JOIN
    sakila.payment p ON s.staff_id = p.staff_id
WHERE
    YEAR(p.payment_date) = 2006
GROUP BY s.first_name , s.last_name;
