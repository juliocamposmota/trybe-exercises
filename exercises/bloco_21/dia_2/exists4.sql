SELECT * FROM hotel.Cars;
SELECT * FROM hotel.CarSales;
SELECT * FROM hotel.Customers;

SELECT 
    cars.Name, cust.Name
FROM
    hotel.Cars AS cars
        INNER JOIN
    hotel.Customers AS cust
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.CarSales AS sale
        WHERE
            sale.CustomerID = cust.CustomerId
                AND sale.CarID = cars.Id);
