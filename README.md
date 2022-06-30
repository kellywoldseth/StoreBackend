# Storefront Backend Project
# Project 2 of Udacity's Full Stack Javascript Developer Course
# Author: Kelly Woldseth with starter code provided by Udacity
# Date: June 2022
## PSQL Set Up NOT DONE WITH THIS
psql -U postgres
CREATE test_user --- UPDATE THIS
CREATE dev db (postgres) and test db (postgres_test)

psql -U postgres
enter password
\l to see all dbs
\c postgres

## PACKAGE INSTALLATIONS
yarn add cors


## CREATE A .ENV FILE
Create a .env file with the following variables:

POSTGRES_USERNAME = test_user
POSTGRES_PASSWORD = pswd123
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
/orders to POST
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