import {User, UserInfo} from '../../models/users';
import bcrypt from 'bcrypt';

const pepper = process.env.BCRYPT_PASSWOORD || '';
const salt = process.env.SALT_ROUNDS || ''; 

const userInfo = new UserInfo()

describe("Testing Users Model", () => {

    //user1 (kelly woldseth) was created in orderSpec file

    //methods should exist
    it('should have an index method', () =>{
        expect(userInfo.index).toBeDefined();
    });

    it('should have a show method', () =>{
        expect(userInfo.show).toBeDefined();
    });

    it('should have a create method', () =>{
        expect(userInfo.create).toBeDefined();
    });

    //testing methods  
    it('create method should add a user', async () =>{
           const newUser = await userInfo.create({
            id: 2,
            firstname: 'lauren',
            lastname: 'fromm',
            password: 'testing'
        });
        expect(newUser.id).toEqual(2);
        expect(newUser.firstname).toEqual('lauren');
        expect(newUser.lastname).toEqual('fromm');
    });
    
    it('index method should return a list of users', async () =>{
        const result = await userInfo.index();
        expect(result[0].id).toEqual(1);
        expect(result[0].firstname).toEqual('kelly');
        expect(result[0].lastname).toEqual('woldseth');
        expect(result[1].id).toEqual(2);
        expect(result[1].firstname).toEqual('lauren');
        expect(result[1].lastname).toEqual('fromm');
    });

    it('show method should return one user', async () =>{
        const result = await userInfo.show(2);
        expect(result.id).toEqual(2);
        expect(result.firstname).toEqual('lauren');
        expect(result.lastname).toEqual('fromm');
    });



});