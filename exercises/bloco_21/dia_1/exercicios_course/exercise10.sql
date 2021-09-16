SELECT 
    DEPARTMENT_ID,
    COUNT(*) AS qtd_funcs,
    ROUND(AVG(salary), 2) AS media_salarial
FROM
    hr.employees
GROUP BY DEPARTMENT_ID
HAVING qtd_funcs > 10
ORDER BY qtd_funcs DESC;
