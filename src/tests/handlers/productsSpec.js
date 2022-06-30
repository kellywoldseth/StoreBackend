"use strict";
//this file tests the /products endpoints of the server
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("../../server"));
const supertest_1 = __importDefault(require("supertest"));
const products_1 = require("../../models/products");
const request = (0, supertest_1.default)(server_1.default);
const warehouse = new products_1.ProductInventory();
describe('testing PRODUCTS endpoints', () => {
    let token;
    let userId;
    //create a user so that a product can be created with that user's token
    beforeAll(async () => {
        const userColin = await request
            .post('/users')
            .send({
            id: 1,
            firstname: 'colin',
            lastname: 'fromm',
            password: 'testabc',
        })
            .set('Accept', 'application/json');
        token = userColin.body;
    });
    it('products POST request to products endpoint should work', async () => {
        const response = await request.post('/products').send({
            id: 1,
            name: 'cake',
            price: 3,
            category: 'bakery',
            numorders: 1,
        }).set('authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    });
});
it('products GET request to products endpoint should work', async () => {
    const response = await request.get('/products');
    expect(response.status).toBe(200);
});
it('products GET request to endpoint with id parameter should work', async () => {
    const response = await request.get('/products/1');
    expect(response.status).toBe(200);
});
it('orders GET request to topFive products should work', async () => {
    const response = await request.get('/products/topFive/dummy');
    expect(response.status).toBe(200);
});
it('products GET request to endpoint with category parameter should work', async () => {
    const response = await request.get('/products/category/produce');
    expect(response.status).toBe(200);
});
