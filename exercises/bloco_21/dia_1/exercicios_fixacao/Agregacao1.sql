SELECT
	AVG(length) AS 'Média de Duracao',
    MIN(length) AS 'Duracao Mínima',
    MAX(length) AS 'Duracao Maxima',
    SUM(length) As 'Tempo de Exibicao Total',
    COUNT(length) AS 'Filmes Registrados'
FROM sakila.film;
