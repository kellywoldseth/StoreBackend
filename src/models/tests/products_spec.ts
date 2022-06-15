import {Product, ProductInventory} from '../products';

const warehouse = new ProductInventory()

describe("Testing Products Model", () => {

    it('should have an index method', () =>{
        expect(warehouse.index).toBeDefined();
    });

    it('should have a show method', () =>{
        expect(warehouse.show).toBeDefined();
    });

    it('should have a create method', () =>{
        expect(warehouse.create).toBeDefined();
    });

    it('should have a topFive method', () =>{
        expect(warehouse.topFive).toBeDefined();
    });

    it('should have a productsByCategory method', () =>{
        expect(warehouse.productsByCategory).toBeDefined();
    });

/*TEST THAT ALL METHODS WORK*/

/*TO DO STILL!!!!!!!!!!!!!!*/

});