//this file tests the /users endpoints of the server

import app from '../../server';
import supertest from 'supertest';

const request = supertest(app);
/*
describe('testing all server endpoints', () => {
  it('users endpoint shoudl work', async () => {
    const response = await request.get('/users');
    expect(response.status).toBe(200);
  });

  it('users endpoint with id parameter should work', async () => {
    const response = await request.get(
      '/users/1'
    );
    expect(response.status).toBe(200);
  });

  it('users endpoint with negative id should not work', async () => {
    const response = await request.get(
      '/users/-1'
    );
    expect(response.status).toBe(200);
  });

  it('users endpoint with invalid id paramater should not work', async () => {
    const response = await request.get(
      '/users/abc'
    );
    expect(response.status).toBe(200);
  });

});*/