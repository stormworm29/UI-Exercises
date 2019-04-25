use sirius_sales;
-- 1 -Write a query to display all the orders from the orders table issued by the salesman 'Paul Adam'.
SELECT * FROM orders 
WHERE salesman_id IN ( 
	SELECT salesman_id FROM salesman 
    WHERE name = "Paul Adam" 
    );
-- 2 -Write a query to display all the orders for the salesman who belongs to the city New York
SELECT * FROM orders 
WHERE salesman_id IN ( 
	SELECT salesman_id FROM salesman 
    WHERE city = "New York" 
    );
-- 3 -Write a query to find all the orders issued against the salesman who works for customer whose id is 3007
SELECT * FROM orders 
WHERE salesman_id IN ( 
	SELECT salesman_id FROM customer 
    WHERE customer_id = 3007 
    );
-- 4 -Write a query to display all the orders which values are greater than the average order value for 10th October 2012.
SELECT * FROM orders 
WHERE purch_amt > (
	SELECT AVG(purch_amt) FROM orders 
    WHERE ord_date = "2012-10-10"
    );
-- 5 -Write a query to find all orders attributed to salesman in New York.
SELECT * FROM orders 
WHERE salesman_id IN (
	SELECT salesman_id FROM salesman 
    WHERE city ='New York'
    );
-- 6 -Write a query to display the commission of all the salesmen servicing customers in Paris.
SELECT salesman_id, commission FROM salesman 
WHERE salesman_id IN (
	SELECT salesman_id FROM customer 
    WHERE city = 'Paris'
    );
-- 7 -Write a query to count the customers with grades above New York's average.
SELECT COUNT(DISTINCT customer_id), grade FROM customer 
GROUP BY grade HAVING grade > (
	SELECT AVG(grade) FROM customer 
    WHERE city = 'New York'
    );
-- 8 -Write a queries to find all orders with order amounts which is above-average amounts for their customers.
SELECT * FROM orders o1 
WHERE purch_amt > (
	SELECT AVG(purch_amt) FROM orders o2 
    WHERE o2.customer_id = o1.customer_id
    );
-- 9 -Write a query to find the sums of the amounts from the orders table, grouped by date, eliminating all those dates where the sum was not at least 1000.00 above the maximum amount.
SELECT ord_date, SUM(purch_amt) FROM orders table1 
GROUP BY ord_date 
HAVING SUM(purch_amt) > (
	SELECT (1000.00 + MAX(purch_amt)) FROM orders
    );

--  10 -Write a query to extract the data from the customer table if and only if one or more of the customers in the customer table are located in London.
SELECT customer_id,cust_name, city FROM customer 
WHERE EXISTS (
	SELECT * FROM customer 
	WHERE city='London'
    );
-- 11 -Write a query to find salesman with customers located in their cities.
SELECT s.name as Salesman_Name, c.cust_name FROM salesman s
JOIN customer c
ON s.city = c.city;
-- 12 -Write a query to display the customers who have a greater gradation than any customer who belongs to the alphabetically lower than the city New York.
SELECT * FROM customer 
WHERE grade > (
	SELECT MIN(grade) FROM customer 
    WHERE city < 'New York'
    );
--  13 -Write a query to display all the orders that had amounts that were greater than at least one of the orders from October 9th 2012.
SELECT * FROM orders 
WHERE purch_amt > (
	SELECT MIN(purch_amt) FROM orders 
    WHERE ord_date = '2012-09-10'
    );
-- 14 -Write a query to find all those customers who holds a different grade than any customer of the city Dallas.
SELECT * FROM customer 
WHERE grade NOT IN (
	SELECT grade FROM customer 
    WHERE city = 'Dallas'
    );
-- 15 -Write a query to display the salesmen which name are alphabetically lower than the name of their customers.
SELECT c.cust_name, s.name FROM salesman s
JOIN customer c
ON s.salesman_id = c.salesman_id
WHERE s.name > c.cust_name;
-- 1 -Write a SQL statement to prepare a list with salesman name, customer name and their cities for the salesmen and customer who belongs to same city.
SELECT stable.name AS Salesman, ctable.cust_name, ctable.city 
FROM salesman stable, customer ctable
WHERE stable.city = ctable.city;
-- 2 -Write a SQL statement to make a list with order no, purchase amount, customer name and their cities for those orders which order amount between 500 and 2000.
SELECT ord_no, purch_amt, cust_name ,city FROM orders 
INNER JOIN customer 
ON orders.customer_id = customer.customer_id  
WHERE purch_amt BETWEEN 500 AND 2000;
-- 3 -Write a SQL statement to know which salesman are working for which customer.
SELECT cust_name, name FROM customer ctable 
INNER JOIN salesman stable 
ON ctable.salesman_id = stable.salesman_id;
-- 4 -Write a SQL statement to find the list of customers who appointed a salesman for their jobs who gets a commission from the company is more than 12%
SELECT cust_name, commission FROM customer ctable 
INNER JOIN salesman stable 
ON ctable.SALESMAN_ID = stable.SALESMAN_ID 
WHERE stable.commission > 0.12;
-- 5 -Write a SQL statement to find the list of customers who appointed a salesman for their jobs who does not live in same city where there customer lives, and gets a commission is above 12%.
SELECT cust_name, commission ,ctable.city, stable.city FROM customer ctable 
INNER JOIN salesman stable 
ON ctable.salesman_id=stable.salesman_id 
WHERE stable.commission > 0.12 AND ctable.city <> stable.city;
-- 6 -Write a SQL statement to find the details of a order i.e. order number, order date, amount of order, which customer gives the order and which salesman works for that customer and how much commission he gets for an order.
SELECT ord_no, ord_date, purch_amt, cust_name, b.name AS salesman, commission FROM orders a 
LEFT JOIN salesman b ON a.salesman_id=b.salesman_id  
LEFT JOIN customer c ON  a.customer_id = c.customer_id;
-- 7 -Write a SQL statement to make a list in ascending order for the customer who works either through a salesman or by own.
SELECT cust_name, a.city ,grade ,name FROM customer a 
LEFT JOIN salesman b 
ON a.salesman_id = b.salesman_id 
ORDER BY a.customer_id;
-- 8 -Write a SQL statement to make a list in ascending order for the customer who holds a grade less than 300 and works either through a salesman or by own.
SELECT cust_name ,a.city, grade ,name as salesman FROM customer a 
LEFT JOIN salesman b ON a.salesman_id=b.salesman_id 
WHERE a.grade < 300 
ORDER BY a.customer_id;
-- 9 -Write a SQL statement to make a list for the salesmen who works either for one or more customer or not yet join under any of the customer who placed either one or more orders or no order to their supplier.
SELECT a.cust_name, a.city, a.grade, b.name, c.ord_no, c.ord_date, c.purch_amt FROM customer a 
RIGHT JOIN salesman b 
ON b.salesman_id=a.salesman_id 
RIGHT JOIN orders c 
ON c.customer_id=a.customer_id;
-- 10 -Write a SQL statement to make a list for the salesmen who either work for one or more customer or yet to join any of the customer. The customer, may have placed, either one or more orders on or above order amount 2000 and must have a grade, or he may not have placed any order to the associated supplier.
SELECT a.cust_name,a.city,a.grade, b.name AS Salesman, c.ord_no, c.ord_date, c.purch_amt FROM customer a 
RIGHT JOIN salesman b 
ON b.salesman_id = a.salesman_id 
LEFT JOIN orders c 
ON c.customer_id = a.customer_id 
WHERE c.purch_amt >= 2000 
AND a.grade IS NOT NULL;

