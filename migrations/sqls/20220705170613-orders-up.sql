/*ORDERS-TABLE-UP*/
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id bigint REFERENCES users(id) NOT NULL,
    order_status VARCHAR(50) NOT NULL
);
