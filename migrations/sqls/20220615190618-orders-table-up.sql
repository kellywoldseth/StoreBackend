/*ORDERS-TABLE-UP*/
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    product-id REFERENCES products(id),
    quantity integer,
    user_id REFERENCES users(id),
    order_status VARCHAR(50)
);