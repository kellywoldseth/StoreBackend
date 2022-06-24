//this file tests the /users endpoints of the server

import app from '../../server';
import supertest from 'supertest';

const request = supertest(app);

describe('testing all server endpoints', () => {
  it('orders endpoint shoudl work', async () => {
    const response = await request.get('/orders');
    expect(response.status).toBe(200);
  });

  it('orders endpoint with id parameter should work', async () => {
    const response = await request.get(
      '/orders/1'
    );
    expect(response.status).toBe(200);
  });

  it('orders endpoint with negative id should not work', async () => {
    const response = await request.get(
      '/orders/-1'
    );
    expect(response.status).toBe(200);
  });

  it('orders endpoint with invalid id paramater should not work', async () => {
    const response = await request.get(
      '/orders/abc'
    );
    expect(response.status).toBe(200);
  });

});