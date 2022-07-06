"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = require("../../models/orders");
const users_1 = require("../../models/users");
const products_1 = require("../../models/products");
const cart = new orders_1.Cart();
const userInfo = new users_1.UserInfo();
const warehouse = new products_1.ProductInventory();
describe('Testing ORDERS Model', () => {
    //methods should exist
    it('should have a create method', () => {
        expect(userInfo.create).toBeDefined();
    });
    it('should have an addProduct method', () => {
        expect(cart.addProduct).toBeDefined();
    });
    it('should have an currentOrder method', () => {
        expect(cart.currentOrder).toBeDefined();
    });
    it('should have an completedOrders method', () => {
        expect(cart.completedOrders).toBeDefined();
    });
    //testing all methods
    //user1 (joseph fromm) was created in tests/handlers/ordersSpec file
    //user2 (colin fromm) was created in tests/handlers/productsSpec file
    //user3 (erin craven) was created in tests/handlers/usersSpec file
    //user4 (leif woldseth) was created in tests/handlers/usersSpec file
    //user5 (kelly woldseth) was created in tests/models/ordersSpec file
    //applesProduct(id=1) was created in tests/handlers/ordersSpec file
    //cakeProduct(id=2) was created in tests/handlers/productsSpec file
    //eggsProduct(id=3) was created in tests/models/ordersSpec file
    //order1 was created in tests/handlers/orderSpec file
    //methods should work
    it('create method should return created order', async () => {
        const user1 = await userInfo.create({
            id: 1,
            firstname: 'kelly',
            lastname: 'woldseth',
            password: 'pswd',
        });
        const product1 = await warehouse.create({
            id: 3,
            name: 'eggs',
            price: 4,
            category: 'dairy',
            numorders: 5,
        });
        const order1 = await cart.create({
            id: 2,
            user_id: '1',
            order_status: 'active',
        });
        expect(order1).toEqual({
            id: 2,
            user_id: '1',
            order_status: 'active',
        });
    });
    //addProduct called once already in tests/handlers/orderSpec
    it('addProduct method should add row to orders_products table', async () => {
        const result = await cart.addProduct(4, '1', '1');
        expect(result).toEqual({
            id: 2,
            quantity: 4,
            order_id: '1',
            product_id: '1',
        });
    });
    it('currentOrder method should return list of current orders', async () => {
        const result = await cart.currentOrder('1');
        expect(result).toEqual([
            {
                id: 1,
                user_id: '1',
                order_status: 'active',
            },
            {
                id: 2,
                user_id: '1',
                order_status: 'active',
            },
        ]);
    });
    it('completedOrders method should return list of current orders', async () => {
        const result = await cart.completedOrders('1');
        expect(result).toEqual([]);
    });
});
