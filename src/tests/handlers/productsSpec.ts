//this file tests the /products endpoints of the server

import app from '../../server';
import supertest from 'supertest';
import {ProductInventory} from '../../models/products';




const request = supertest(app);
const warehouse = new ProductInventory();

describe('testing PRODUCTS endpoints', () => {
  
  //This test passes but I am confused by it because there are still errors with the middleware with console.log
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

  
  let token : string;
  let userId: string;
  
  beforeAll(async () => {
    const userColin = await request.post("/users").send({
        id: 1,
        firstname: "colin",
        lastname: "fromm",
          password: "testabc",

    }).set("Accept", "application/json");
    token = userColin.body;
    console.log(token);

});


/* THESE TESTS PASS - COMMENTED OUT SO I CAN FOCUS ON THE OTHERS RIGHT NOW
  it('products GET request to products endpoint should work', async () => {
    const response = await request.get('/products');
    expect(response.status).toBe(200);
  });

  it('products GET request to endpoint with id parameter should work', async () => {
    const response = await request.get(
      '/products/1'
    );
    expect(response.status).toBe(200);
  });

 it('products GET request to endpoint with category parameter should work', async () => {
    const response = await request.get(
      '/products/category/produce'
    );
    expect(response.status).toBe(200);
  });
*/


//time out happening because the middleware is not recognizing the token
  it('products POST request to products endpoint should work', async () => {

    const response = await request.post('/products').send({
      id:1,
      name: 'potatoes',
      price: 3,
      category: 'produce',
      numorders: 4,
    }).set('Authorization', token);
   const response2 = await request.get('/products').set("Accept", "application/json").set("Authorization", `Bearer ${token}`);
    expect(response2.status).toBe(200);
  });





});