/*users*/
INSERT INTO 
	users (name, email, password)
VALUES
	('user name', 'mail@mail.com', 'userPwd'),
	('name1', 'mail@test.com', 'pwdpwd'),
	('test user', 'test@mail.com', 'qwerty');

/*categories*/
INSERT INTO
	categories (id, name, parent_category_id)
VALUES
	(1, 'big', NULL),
		(3, 'For kitchen (big)', 1),
			(8, 'owens', 3),
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
	products (name, price, description, category_id)
VALUES
	('TV 42"', 10000, 'tv', 10),
	('TV 55"', 22000, 'big ass tv', 10),
	('apple watch', 5000, 'apple', 14),
	('nokia', 7000, 'old school', 7);

/*orders*/
INSERT INTO
	orders (date, total_price, status, user_id)
VALUES
	('2020-02-25', 1000, 'NEW', 1),
	('2020-04-19', 1234, 'NEW', 1),
	('2020-11-16', 500, 'NEW', 2);