/*users*/
INSERT INTO 
	users (id, name, email, password)
VALUES
	(1, 'user name', 'mail@mail.com', 'userPwd'),
	(2, 'name1', 'mail@test.com', 'pwdpwd'),
	(3, 'test user', 'test@mail.com', 'qwerty');

/*categories*/
INSERT INTO
	categories (id, name, parent_category_id)
VALUES
	(1, 'big', NULL),
		(3, 'For kitchen (big)', 1),
			(8, 'microwaves', 3),
			(9, 'fridges', 3),
		(4, 'For for house (big)', 1),
		(5, 'elctronics (big)', 1),
			(10, 'TV', 5),
			(11, 'sound', 5),
	(2, 'small', NULL),
		(6, 'For kitchen (small)', 2),
			(12, 'toasters', 6),
		(7, 'elctronics (small)', 2),
			(13, 'smartphones', 7),
			(14, 'watches', 7),
			(15, 'routers', 7);

/*products*/
INSERT INTO
	products (id, name, price, description, category_id)
VALUES
	(1, 'TV 42"', 10000, 'tv', 10),
	(2, 'TV 55"', 22000, 'big ass tv', 10),
	(3, 'TV 90"', 80000, 'bigger than my ego', 10),
	(4, 'apple watch', 5000, 'apple', 14),
	(5, 'nokia', 7000, 'old school', 13),
	(6, 'xiaomi', 5000, 'mi', 13),
	(7, 'samsung fridge', 15000, 'colder than your ex''s heart ', 9),
	(8, 'toaster 1', 1000, 'for breakfast', 12);

/*orders*/
INSERT INTO
	orders (id, date, total_price, status, user_id)
VALUES
	(1, '2020-02-25', 1000, 'NEW', 1),
	(2, '2020-04-19', 1234, 'NEW', 1),
	(3, '2020-11-16', 500, 'NEW', 2);

/*ordered_products*/
INSERT INTO
	ordered_products (product_id, order_id)
VALUES
	(1, 1),
	(5, 1),
	(7, 1),
	(3, 2),
	(5, 3),
	(4, 3);
	