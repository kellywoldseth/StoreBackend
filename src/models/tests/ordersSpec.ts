import {Order, Cart} from '../orders';

const cart = new Cart()

describe("Testing Orders Model", () => {

    it('should have an currentOrder method', () =>{
        expect(cart.currentOrder).toBeDefined();
    });

    it('should have an completedOrders method', () =>{
        expect(cart.completedOrders).toBeDefined();
    });

    /*TEST THAT ALL METHODS WORK*/

/*TO DO STILL!!!!!!!!!!!!!!*/

});