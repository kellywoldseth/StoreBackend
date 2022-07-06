//this file tests the /users endpoints of the server

import app from '../../server';
import supertest from 'supertest';

const request = supertest(app);

describe('Testing USERS endpoints', () => {
  let token: string;

  beforeAll(async () => {
    const userErin = await request
      .post('/users')
      .send({
        id: 1,
        firstname: 'erin',
        lastname: 'craven',
        password: 'testing',
      })
      .set('Accept', 'application/json');
    token = userErin.body;
  });

  it('users GET request to users endpoint should work', async () => {
    const response = await request.get('/users').set('authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });

  it('users POST request to users endpoint should work', async () => {
    const response = await request.post('/users').send({
      id: 1,
      firstname: 'leif',
      lastname: 'woldseth',
      password: 'test123',
    });
    expect(response.status).toBe(200);
  });

  it('users SHOW request to endpoint with id parameter should work', async () => {
    const response = await request.get('/users/1').set('authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
  });
});
