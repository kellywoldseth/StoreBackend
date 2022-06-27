"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("../../server"));
const supertest_1 = __importDefault(require("supertest"));
const request = (0, supertest_1.default)(server_1.default);
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
