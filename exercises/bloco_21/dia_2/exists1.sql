-- SELECT * FROM hotel.Books;
-- SELECT * FROM hotel.Books_Lent;

SELECT `Id`, `Title` FROM hotel.Books AS books
WHERE NOT EXISTS (
	SELECT * FROM hotel.Books_Lent AS lent
    WHERE lent.book_id = books.Id
);
