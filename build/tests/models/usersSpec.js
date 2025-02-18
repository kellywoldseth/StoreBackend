"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../../models/users");
const pepper = process.env.BCRYPT_PASSWOORD || '';
const salt = process.env.SALT_ROUNDS || '';
const userInfo = new users_1.UserInfo();
describe('Testing USERS Model', () => {
    //user1 (joseph fromm) was created in tests/handlers/ordersSpec file
    //user2 (colin fromm) was created in tests/handlers/productsSpec file
    //user3 (erin craven) was created in tests/handlers/usersSpec file
    //user4 (leif woldseth) was created in tests/handlers/usersSpec file
    //user5 (kelly woldseth) was created in tests/models/ordersSpec file
    //applesProduct(id=1) was created in tests/handlers/ordersSpec file
    //cakeProduct(id=2) was created in tests/handlers/productsSpec file
    //eggsProduct(id=3) was created in tests/models/ordersSpec file
    //order1 was created in tests/handlers/orderSpec file
    //methods should exist
    it('should have an index method', () => {
        expect(userInfo.index).toBeDefined();
    });
    it('should have a show method', () => {
        expect(userInfo.show).toBeDefined();
    });
    it('should have a create method', () => {
        expect(userInfo.create).toBeDefined();
    });
    //testing methods
    it('create method should add a user', async () => {
        const newUser = await userInfo.create({
            id: 6,
            firstname: 'lauren',
            lastname: 'fromm',
            password: 'testing',
        });
        expect(newUser.id).toEqual(6);
        expect(newUser.firstname).toEqual('lauren');
        expect(newUser.lastname).toEqual('fromm');
    });
    it('index method should return a list of users', async () => {
        const result = await userInfo.index();
        expect(result[0].id).toEqual(1);
        expect(result[0].firstname).toEqual('joseph');
        expect(result[0].lastname).toEqual('fromm');
        expect(result[1].id).toEqual(2);
        expect(result[1].firstname).toEqual('colin');
        expect(result[1].lastname).toEqual('fromm');
    });
    it('show method should return one user', async () => {
        const result = await userInfo.show(2);
        expect(result.id).toEqual(2);
        expect(result.firstname).toEqual('colin');
        expect(result.lastname).toEqual('fromm');
    });
    it('authenticate method should return one user', async () => {
        const pass = await userInfo.authenticate('lauren', 'fromm', 'testing');
        expect(pass).not.toEqual(null);
    });
});
