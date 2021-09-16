SELECT 
    last_name,
    DATE(hire_date)
FROM
    hr.employees
WHERE
    DATE(hire_date) LIKE '1987-07%';
