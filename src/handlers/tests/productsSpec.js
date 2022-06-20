"use strict";
//this file tests the /users endpoints of the server
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("../../server"));
const supertest_1 = __importDefault(require("supertest"));
const request = (0, supertest_1.default)(server_1.default);
describe('testing all server endpoints', () => {
    it('products endpoint shoudl work', async () => {
        const response = await request.get('/products');
        expect(response.status).toBe(200);
    });
    it('products endpoint with id parameter should work', async () => {
        const response = await request.get('/products/1');
        expect(response.status).toBe(200);
    });
    it('products endpoint with negative id should not work', async () => {
        const response = await request.get('/products/-1');
        expect(response.status).toBe(200);
    });
    it('products endpoint with invalid id paramater should not work', async () => {
        const response = await request.get('/products/abc');
        expect(response.status).toBe(200);
    });
});
