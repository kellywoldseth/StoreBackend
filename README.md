# Storefront Backend Project
# Project 2 of Udacity's Full Stack Javascript Developer Course
# Author: Kelly Woldseth with starter code provided by Udacity
# Date: June 2022

## Note to reviewer
I asked for help on the topFive route unique URL but a mentor got back to me and that is now resolved.
## PSQL Set Up
psql -U postgres
CREATE USER test_user WITH PASSWORD '[you choose a password]';
CREATE DATABASE postgres;
CREATE DATABSE postgres_test;
\c postgres
GRANT ALL PRIVILEGES ON DATABASE postgres TO test_user;
\c postgres_test
GRANT ALL PRIVILEGES ON DATABASE postgres_test TO test_user;

## PACKAGE INSTALLATIONS
npm install

## CREATE A .ENV FILE
Create a .env file with the following variables:

POSTGRES_USERNAME = test_user
POSTGRES_PASSWORD = [whatever password you chose in psql set up]
POSTGRES_DB = postgres
POSTGRES_HOST = 127.0.0.1
TEST_POSTGRES_DB = postgres_test
ENV = dev

BCRYPT_PASSWORD = mrpotatoferriswheel
SALT_ROUNDS = 10
TOKEN_SECRET = vista--plenty

## RUNNING UNIT TESTS
Run "yarn test". 

If test needs to be run multiple times, first run "TRUNCATE TABLE products, orders, users RESTART IDENTITY;" in psql in \c postgres (dev db) in order to clear out the table. If you don't do this, the id (serial primary key) will continue to increment and tests will fail.

Note: I am developing on a mac and had to add the word "export" at the beginning of my test script in package.json. Windows users should delete that word or change it to set.
## STARTING SERVER
Run "yarn watch" and open localhost:3000.

## ENDPOINTS
/orders to POST new order
/orders/:id/products to POST (addProduct)
/orders/current/:user_id to GET currentOrders 
/orders/completed/:user_id to GET completedOrders

/products to POST
/products to GET
/products/:id to GET one item (show)
/products/category/:category to GET all by category
/products/topFive/dummy to GET all topFive products

/users to POST
/users to GET
/users/:id to GET by id

