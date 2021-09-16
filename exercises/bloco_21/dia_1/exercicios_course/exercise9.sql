SELECT
	job_id,
    AVG(salary) AS media_salarial
FROM hr.employees
GROUP BY job_id
HAVING job_id != 'it_prog'
ORDER BY media_salarial DESC;
