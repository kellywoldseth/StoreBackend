import {Product, ProductInventory} from '../../models/products';

const warehouse = new ProductInventory()

describe("Testing Products Model", () => {

    //methods should be defined
    it('should have an index method', () =>{
        expect(warehouse.index).toBeDefined();
    });

    it('should have a show method', () =>{
        expect(warehouse.show).toBeDefined();
    });

    it('should have a create method', () =>{
        expect(warehouse.create).toBeDefined();
    });

    /*it('should have a topFive method', () =>{
        expect(warehouse.topFive).toBeDefined();
    });*/

    it('should have a productsByCategory method', () =>{
        expect(warehouse.productsByCategory).toBeDefined();
    });

    //methods should work
it('create method should return created product', async () =>{
    const newProduct = await warehouse.create({
     id: 1,
     name: 'bananas',
     price: 1,
     category: 'produce',
     numorders: 3,
 });
 console.log(newProduct);
 expect(newProduct).toEqual({
    id: 34,
    name: 'bananas',
    price: 1,
    category: 'produce',
    numorders: 3
     });
     expect(newProduct.name).toEqual('bananas');
});

it('show method should return one product', async () =>{
    const result = await warehouse.show("25");
    expect(result).toEqual(
        {
            id: 25,
            name: 'bananas',
            price: 1,
            category: 'produce',
            numorders: 3

        }
    );
});

    /*
it('index method should return a list of products', async () =>{
    const result = await warehouse.index();
    expect(result).toEqual([
        {
            id: '1',
            name: 'bananas',
            price: 1,
            category: 'produce'            }
    ]);
});
*/
/*
it('topFive method should return a list of five products', async () =>{
    const result = await warehouse.topFive();
    expect(result).toEqual([
        {
            id: '1',
            name: 'bananas',
            price: 1,
            category: 'produce'            }
    ]);
});
*/

/*
it('productsByCategory method should return a list of products', async () =>{
    const result = await warehouse.productsByCategory('produce');
    expect(result).toEqual([
        {
            id: '1',
            name: 'bananas',
            price: 1,
            category: 'produce'            }
    ]);
});*/


});