/*PRODUCTS-TABLE-UP*/
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    price integer,
    category VARCHAR(255),
    numOrders integer
);