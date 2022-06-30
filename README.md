# Storefront Backend Project
# Project 2 of Udacity's Full Stack Javascript Developer Course
# Author: Kelly Woldseth with starter code provided by Udacity
# Date: June 2022

## TODO
get route to end point with topFive working
get token authentication working for products create and orders create
check comments and formatting, run prettier
check rubric
update github name
test psql set up and update readme


## PSQL Set Up NOT DONE WITH THIS
psql -U postgres
CREATE test_user --- UPDATE THIS
CREATE dev db (postgres) and test db (postgres_test)

psql -U postgres
enter password
\l to see all dbs
\c postgres

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
/products/topFive to GET all topFive products

/users to POST
/users to GET
/users/:id to GET by id