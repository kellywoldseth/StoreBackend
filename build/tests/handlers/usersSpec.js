"use strict";
//this file tests the /users endpoints of the server
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("../../server"));
const supertest_1 = __importDefault(require("supertest"));
const request = (0, supertest_1.default)(server_1.default);
describe('Testing USERS endpoints', () => {
    let token;
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
