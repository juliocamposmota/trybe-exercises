SELECT CURRENT_DATE();
SELECT NOW();

SELECT DATEDIFF('2020-01-31', '2020-01-01');
SELECT DATEDIFF('2020-01-01', '2020-01-31');

SELECT TIMEDIFF('08:30:10', '09:30:10');
SELECT TIMEDIFF('2021-08-11 08:30:10', '2021-08-01 09:30:10');

-- SELECT DATE(data_cadastro); -- YYYY-MM-DD
-- SELECT YEAR(data_cadastro); -- Ano
-- SELECT MONTH(data_cadastro); -- Mês
-- SELECT DAY(data_cadastro); -- Dia
-- SELECT HOUR(data_cadastro); -- Hora
-- SELECT MINUTE(data_cadastro); -- Minuto
-- SELECT SECOND(data_cadastro); -- Segundo

SELECT YEAR(CURRENT_DATE());
SELECT HOUR(NOW());
