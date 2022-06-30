//this file tests the /products endpoints of the server

import app from '../../server';
import supertest from 'supertest';
import { ProductInventory } from '../../models/products';

const request = supertest(app);
const warehouse = new ProductInventory();

describe('Testing PRODUCTS endpoints', () => {
  let token: string;

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
    const response = await request
      .post('/products')
      .send({
        id: 1,
        name: 'cake',
        price: 3,
        category: 'bakery',
        numorders: 1,
      })
      .set('authorization', `Bearer ${token}`);
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
