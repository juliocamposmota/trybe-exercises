SELECT job_id, AVG(salary) AS media_salarial
FROM hr.employees
GROUP BY job_id
ORDER BY media_salarial DESC;
