/*ORDERS-TABLE-UP*/
CREATE TABLE orders_products (
    id SERIAL PRIMARY KEY,
    quantity integer NOT NULL,
    product_id bigint REFERENCES products(id) NOT NULL,
    order_id bigint REFERENCES orders(id) NOT NULL
);


