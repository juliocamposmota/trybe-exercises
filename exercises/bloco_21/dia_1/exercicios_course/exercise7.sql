SELECT
	job_id,
    SUM(salary) AS salario_total
FROM hr.employees
GROUP BY job_id
ORDER BY salario_total DESC;
