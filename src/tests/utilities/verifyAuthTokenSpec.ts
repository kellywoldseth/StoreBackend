import app from '../../server';
import supertest from 'supertest';
import jwt, { Secret } from 'jsonwebtoken';
import verifyAuthToken from '../../utilities/verifyAuthToken';

const request = supertest(app);
/*
describe('testing VERIFYAUTHTOKEN method', () => {
    
    
    it('verifyAuthToken should give 401 when not authenticated', async () => {

        const userTy = await request.post("/users").send({
            id: 1,
            firstname: "ty",
            lastname: "woldseth",
              password: "testabc",
    
        }).set("Accept", "application/json");
       
        const token = userTy.body;
        console.log(token);
        const response = await verifyAuthToken(token);
        expect(response.status).toBe(401);
      });

          
    it('verifyAuthToken should give 200 when authenticated', async () => {
        const response = await request.get('/products');
        expect(response.status).toBe(200);
      });

});*/
