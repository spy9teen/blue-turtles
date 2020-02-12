/*users*/
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR (100) NOT NULL,
    email VARCHAR (100) UNIQUE NOT NULL,
    password VARCHAR (100) NOT NULL,
    token VARCHAR (100)
);

/*orders*/
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    total_price NUMERIC NOT NULL,
    status VARCHAR (30) NOT NULL,
    user_id BIGINT NOT NULL REFERENCES users(id)
);