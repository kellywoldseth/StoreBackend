"use strict";
//this file tests the /orders endpoints of the server
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("../../server"));
const supertest_1 = __importDefault(require("supertest"));
const users_1 = require("../../models/users");
const products_1 = require("../../models/products");
const request = (0, supertest_1.default)(server_1.default);
const userInfo = new users_1.UserInfo();
const warehouse = new products_1.ProductInventory();
describe('testing ORDERS endpoints', () => {
    /*
      beforeAll(async() => {
        const userJoe = await request.post('/users').send({
          id: 1,
          firstname: 'joseph',
          lastname: 'fromm',
          password: 'testing'
      });
      const productApples = await request.post('/products').send({
        id: 1,
        name: 'apples',
        price: 1,
        category: 'produce',
        numorders: 3,
    });
    });
    
    
    
    
      it('orders POST request endpoint should work', async () => {
        console.log('works till here11111 ------------------');
    
        const response = await request.post('/orders').send(
          {
            id: 1,
            product_id: 1,
            quantity: 3,
            user_id: 1,
            order_status: 'active'
          }
        );
        const token = response.body.token;
        console.log('works till here ------------------');
        const response2 = await request.get('/orders')
        .set(
          'Authorization', `Bearer ${token}`
          );
        expect(response2.status).toBe(200);
      });
    */
    it('orders GET request to orders endpoint with id parameter should work', async () => {
        const response = await request.get('/orders/1');
        expect(response.status).toBe(200);
    });
});
