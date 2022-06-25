//this file tests the /users endpoints of the server

import app from '../../server';
import supertest from 'supertest';

const request = supertest(app);
/*
describe('testing all server endpoints', () => {
  it('products endpoint shoudl work', async () => {
    const response = await request.get('/products');
    expect(response.status).toBe(200);
  });

  it('products endpoint with id parameter should work', async () => {
    const response = await request.get(
      '/products/1'
    );
    expect(response.status).toBe(200);
  });

  it('products endpoint with negative id should not work', async () => {
    const response = await request.get(
      '/products/-1'
    );
    expect(response.status).toBe(200);
  });

  it('products endpoint with invalid id paramater should not work', async () => {
    const response = await request.get(
      '/products/abc'
    );
    expect(response.status).toBe(200);
  });

});*/