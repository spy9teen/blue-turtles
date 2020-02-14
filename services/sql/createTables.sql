/*users*/
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR (100) NOT NULL,
    email VARCHAR (100) UNIQUE NOT NULL,
    password VARCHAR (100) NOT NULL,
    token VARCHAR (100)
);

/*categories*/
CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR (100) NOT NULL,
    parent_category_id BIGINT REFERENCES categories(id) ON DELETE CASCADE
);

/*products*/
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR (100) NOT NULL,
    price NUMERIC NOT NULL,
    description TEXT,
    category_id BIGINT NOT NULL REFERENCES categories(id) ON DELETE CASCADE
);

/*orders*/
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    total_price NUMERIC NOT NULL,
    status VARCHAR (30) NOT NULL,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE
);

/*ordered_products*/
CREATE TABLE IF NOT EXISTS ordered_products (
    id SERIAL PRIMARY KEY,
    product_id BIGINT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    order_id BIGINT NOT NULL REFERENCES orders(id) ON DELETE CASCADE
);
