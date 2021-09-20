-- SELECT * FROM hotel.CarSales;
-- SELECT * FROM hotel.Customers;
 
SELECT `Name` FROM hotel.Customers AS c
WHERE NOT EXISTS (
	SELECT * FROM hotel.CarSales AS s
    WHERE c.CustomerId = s.CustomerID
);
