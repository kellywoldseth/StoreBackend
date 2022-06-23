import {User, UserInfo} from '../models/users';

const userInfo = new UserInfo()

describe("Testing Users Model", () => {

    it('should have an index method', () =>{
        expect(userInfo.index).toBeDefined();
    });

    it('should have a show method', () =>{
        expect(userInfo.show).toBeDefined();
    });

    it('should have a create method', () =>{
        expect(userInfo.create).toBeDefined();
    });
  
    it('create method should add a user', async () =>{
           const newUser = await userInfo.create({
            id: '1',
            firstName: 'kelly',
            lastName: 'woldseth',
            password: 'testing'
        });
        expect(newUser).toEqual({
            id: '1',
            firstName: 'kelly',
            lastName: 'woldseth',
            password: 'testing'
        });
    });


    it('show method should return one user', async () =>{
        const result = await userInfo.show("1");
        expect(result).toEqual(
            {
            id: "1",
            firstName: "kelly",
            lastName: "woldseth",
            password: "testing"
            }
        );
    });

    
    it('index method should return a list of users', async () =>{
        const result = await userInfo.index();
        expect(result).toEqual([
            {
                id: "1",
                firstName: "kelly",
                lastName: "woldseth",
                password: "testing"
                }
        ]);
    });



});