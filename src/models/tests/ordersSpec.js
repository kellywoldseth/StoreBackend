"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = require("../orders");
const cart = new orders_1.Cart();
describe("Testing Orders Model", () => {
    it('should have an currentOrder method', () => {
        expect(cart.currentOrder).toBeDefined();
    });
    it('should have an completedOrders method', () => {
        expect(cart.completedOrders).toBeDefined();
    });
    /*TEST THAT ALL METHODS WORK*/
    /*TO DO STILL!!!!!!!!!!!!!!*/
});
