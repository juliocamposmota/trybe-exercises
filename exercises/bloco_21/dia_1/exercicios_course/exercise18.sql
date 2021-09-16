SELECT 
    first_name,
    last_name,
    DATEDIFF(NOW(), hire_date) AS days_hired
FROM
    hr.employees;
