/*users*/
INSERT INTO 
	users (name, email, password)
VALUES
	('user name', 'mail@mail.com', 'userPwd'),
	('name1', 'mail@test.com', 'pwdpwd'),
	('test user', 'test@mail.com', 'qwerty');

/*orders*/
INSERT INTO
	orders (date, total_price, status, user_id)
VALUES
	('2020-02-25', 1000, 'NEW', 1),
	('2020-04-19', 1234, 'NEW', 2),
	('2020-11-16', 500, 'NEW', 3);