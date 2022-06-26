"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = require("../../models/orders");
const users_1 = require("../../models/users");
const products_1 = require("../../models/products");
const cart = new orders_1.Cart();
const userInfo = new users_1.UserInfo();
const warehouse = new products_1.ProductInventory();
describe("Testing Orders Model", () => {
    //methods should exist
    it('should have a create method', () => {
        expect(userInfo.create).toBeDefined();
    });
    it('should have an currentOrder method', () => {
        expect(cart.currentOrder).toBeDefined();
    });
    it('should have an completedOrders method', () => {
        expect(cart.completedOrders).toBeDefined();
    });
    //methods should work
    it('create method should return created order', async () => {
        const user1 = await userInfo.create({
            id: 1,
            firstname: 'kelly',
            lastname: 'woldseth',
            password: 'pswd'
        });
        const product1 = await warehouse.create({
            id: 1,
            name: 'muffins',
            price: 4,
            category: 'bakery',
            numorders: 1,
        });
        const order1 = await cart.create({
            id: 1,
            product_id: '1',
            quantity: 5,
            user_id: '1',
            order_status: 'active',
        });
        expect(order1).toEqual({
            id: 1,
            product_id: '1',
            quantity: 5,
            user_id: '1',
            order_status: 'active',
        });
    });
    it('currentOrder method should return list of current orders', async () => {
        const result = await cart.currentOrder('1');
        expect(result).toEqual([
            {
                id: 1,
                product_id: '1',
                quantity: 5,
                user_id: '1',
                order_status: 'active',
            }
        ]);
    });
    it('completedOrders method should return list of current orders', async () => {
        const result = await cart.completedOrders('1');
        expect(result).toEqual([]);
    });
});
