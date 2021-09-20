-- SELECT * FROM hotel.Books;
-- SELECT * FROM hotel.Books_Lent;

SELECT `Id`, `Title` FROM hotel.Books AS books
WHERE EXISTS (
	SELECT * FROM hotel.Books_Lent AS lent
    WHERE lent.book_id = books.Id
    AND books.Title LIKE '%lost%'
);
