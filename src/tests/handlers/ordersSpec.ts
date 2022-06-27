//this file tests the /orders endpoints of the server

import app from '../../server';
import supertest from 'supertest';
import {User, UserInfo} from '../../models/users';
import {Product, ProductInventory} from '../../models/products';

const request = supertest(app);
const userInfo = new UserInfo()
const warehouse = new ProductInventory()

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
    const response = await request.get(
      '/orders/1'
    );
    expect(response.status).toBe(200);
  });

});