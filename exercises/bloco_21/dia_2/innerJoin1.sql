-- SELECT sakila.actor.first_name, sakila.actor.actor_id, sakila.film_actor.actor_id
-- FROM sakila.actor
-- INNER join sakila.film_actor
-- ON sakila.actor.actor_id = sakila.film_actor.actor_id;

SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor a
INNER JOIN sakila.film_actor f
ON a.actor_id = f.actor_id;
