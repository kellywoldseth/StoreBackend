//this file tests the /users endpoints of the server

import app from '../../server';
import supertest from 'supertest';

const request = supertest(app);

describe('testing USERS endpoints', () => {
  it('users GET request to users endpoint should work', async () => {
    const response = await request.get('/users');
    expect(response.status).toBe(200);
  });

  it('users POST request to users endpoint should work', async () => {
    const response = await request.post('/users').send({
      id: 1,
      firstname: 'leif',
      lastname: 'woldseth',
      password: 'test123',
    });
    const token = response.body.token;
    const responseGetUsers = await request
      .get('/users')
      .set('Authorization', `Bearer ${token}`);
    expect(responseGetUsers.status).toBe(200);
  });

  it('users SHOW request to endpoint with id parameter should work', async () => {
    const response2 = await request.get('/users/1');
    expect(response2.status).toBe(200);
  });
});
