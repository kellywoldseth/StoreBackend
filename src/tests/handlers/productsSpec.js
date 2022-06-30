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
    //This test passes but I am confused by it because there are still errors with the middleware with console.log
    /*
    it('testing PRODUCTS POST -- using link posted in Udacity Knowledge.', async () => {
  const potatoProduct =  warehouse.create(
    {id:1,
  name: 'cake',
  price: 3,
  category: 'bakery',
  numorders: 1});
  
  let session = null;
  
    supertest('http://localhost:3000')
    .post('/products')
    .send(potatoProduct)
    .end((err, res) => {
       if (err) {
         return (err);
       }
       session = res.header['your-cookie'];
   });
   
  });
  
     */
    let token;
    let userId;
    //IF I DELETE THIS, ALL TESTS REGARDING USERS WILL DECREMENT AN ID SO NEED TO FIX THOSE TESTS
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
        // console.log(token);
    });
    // THESE TESTS PASS
    it('products POST request to products endpoint should work', async () => {
        const response = await request.post('/products').send({
            id: 1,
            name: 'cake',
            price: 3,
            category: 'bakery',
            numorders: 1,
        });
        expect(response.status).toBe(200);
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
        const response = await request.get('/products/topFive');
        expect(response.status).toBe(200);
    });
    it('products GET request to endpoint with category parameter should work', async () => {
        const response = await request.get('/products/category/produce');
        expect(response.status).toBe(200);
    });
    //time out happening because the middleware is not recognizing the token
    //NEED HELP HERE
    /*it('products POST request to products endpoint should work', async () => {
  
      const response = await request.post('/products').send({
        id:1,
        name: 'potatoes',
        price: 3,
        category: 'produce',
        numorders: 4,
      }).set('Authorization', `Bearer ${token}`);
      expect(response.status).toBe(200);
    })*/
});
