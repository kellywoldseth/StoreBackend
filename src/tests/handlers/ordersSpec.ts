//this file tests the /orders endpoints of the server

import app from '../../server';
import supertest from 'supertest';
import { User, UserInfo } from '../../models/users';
import { Product, ProductInventory } from '../../models/products';

const request = supertest(app);
const userInfo = new UserInfo();
const warehouse = new ProductInventory();

describe('testing ORDERS endpoints', () => {
  let token: string;

  beforeAll(async () => {
    const userJoe = await request.post('/users').send({
      id: 1,
      firstname: 'joseph',
      lastname: 'fromm',
      password: 'testing',
    }).set('Accept', 'application/json');
    token = userJoe.body;;
    const productApples = await request.post('/products').send({
      id: 1,
      name: 'apples',
      price: 1,
      category: 'produce',
      numorders: 8,
    }).set('authorization', `Bearer ${token}`);
  });
  
  it('orders POST request should work', async () => {
    const response = await request.post('/orders').send({
      id: 1,
      product_id: '1',
      quantity: 3,
      user_id: '1',
      order_status: 'active',
    }).set('authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });

  it('orders GET request to currentOrders endpoint with id parameter should work', async () => {
    const response = await request.get('/orders/current/1');
    expect(response.status).toBe(200);
  });

  it('orders GET request to completedOrders endpoint with id parameter should work', async () => {
    const response = await request.get('/orders/completed/1');
    expect(response.status).toBe(200);
  });
});
