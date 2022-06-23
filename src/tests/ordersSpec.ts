import {Order, Cart} from '../models/orders';

const cart = new Cart()

describe("Testing Orders Model", () => {

    it('should have an currentOrder method', () =>{
        expect(cart.currentOrder).toBeDefined();
    });

    it('should have an completedOrders method', () =>{
        expect(cart.completedOrders).toBeDefined();
    });

    /*
    it('currentOrder method should return list of current orders', async () =>{
        //    const user1 = new User.... ???

        const result = await cart.currentOrder(user1);
        expect(result).toEqual(
            {
            id: "1",
            firstName: "kelly",
            lastName: "woldseth",
            password: "testing"
            }
        );
    });*/

        /*
    it('completedOrders method should return list of current orders', async () =>{
  //    const user1 = new User.... ???
        const result = await cart.completedOrders(user1);
        expect(result).toEqual(
            {
            id: "1",
            firstName: "kelly",
            lastName: "woldseth",
            password: "testing"
            }
        );
    });*/



});