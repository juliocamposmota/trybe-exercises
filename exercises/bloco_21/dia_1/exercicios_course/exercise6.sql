SELECT job_id, COUNT(*) AS employees_by_job
FROM hr.employees
GROUP BY job_id
HAVING job_id like 'it_prog';
