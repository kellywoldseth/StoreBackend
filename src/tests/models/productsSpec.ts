import {Product, ProductInventory} from '../../models/products';

const warehouse = new ProductInventory()

describe("Testing PRODUCTS Model", () => {

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

    it('should have a topFive method', () =>{
        expect(warehouse.topFive).toBeDefined();
    });

    it('should have a productsByCategory method', () =>{
        expect(warehouse.productsByCategory).toBeDefined();
    });

    //testing all methods

    //user1 (kelly woldseth) and muffinProduct were created in tests/models/ordersSpec file
    //cakeProduct was created in tests/handlers/productsSpec file
it('index method should return a list of products', async () =>{
    const result = await warehouse.index();
    expect(result).toEqual([
        {
            id: 1,
            name: 'cake',
            price: 3,
            category: 'bakery',
            numorders: 1           },
            {
            id: 2,
            name: 'muffins',
            price: 4,
            category: 'bakery',
            numorders: 1           }
    ]);
});

it('create method should return created product', async () =>{
    const newProduct = await warehouse.create({
     id: 1,
     name: 'bananas',
     price: 1,
     category: 'produce',
     numorders: 3,
 });
 expect(newProduct).toEqual({
    id: 3,
    name: 'bananas',
    price: 1,
    category: 'produce',
    numorders: 3
     });
     expect(newProduct.name).toEqual('bananas');
});

it('show method should return one product', async () =>{
    const result = await warehouse.show("3");
    expect(result).toEqual(
        {
            id: 3,
            name: 'bananas',
            price: 1,
            category: 'produce',
            numorders: 3

        }
    );
});

it('show method should return undefined if product does not exist', async () =>{
    const result = await warehouse.show("16");
    expect(result).toBeUndefined();
});

it('topFive method should return a list of top five products ranked by numorders', async () =>{
    const prod1 = await warehouse.create({
        id: 4,
        name: 'bread',
        price: 3,
        category: 'bakery',
        numorders: 6,
    });

    const prod2 = await warehouse.create({
        id: 5,
        name: 'milk',
        price: 3,
        category: 'dary',
        numorders: 2,
    });


    const prod3 = await warehouse.create({
        id: 6,
        name: 'ice cream',
        price: 5,
        category: 'dairy',
        numorders: 4,
    });

    const prod4 = await warehouse.create({
        id: 7,
        name: 'broccoli',
        price: 4,
        category: 'produce',
        numorders: 5,
    });

    const result = await warehouse.topFive();
    expect(result).toEqual([
        {
            id: 4,
            name: 'bread',
            price: 3,
            category: 'bakery',
            numorders: 6,
        },
        {
            id: 7,
            name: 'broccoli',
            price: 4,
            category: 'produce',
            numorders: 5,
            
        },
        {
            id: 6,
            name: 'ice cream',
            price: 5,
            category: 'dairy',
            numorders: 4,
        },
        {
            id: 3,
            name: 'bananas',
            price: 1,
            category: 'produce',
            numorders: 3                },
            {
                id: 5,
                name: 'milk',
                price: 3,
                category: 'dary',
                numorders: 2,
            }
            


    ]);
});

it('productsByCategory method should return a list of produce products', async () =>{
    const result = await warehouse.productsByCategory('produce');
    expect(result).toEqual([
        {
            id: 3,
            name: 'bananas',
            price: 1,
            category: 'produce',
            numorders: 3                }, 
            {
            id: 7,
            name: 'broccoli',
            price: 4,
            category: 'produce',
            numorders: 5,}
    ]);
});

it('productsByCategory method should return an empty list of pasta products', async () =>{
    const result = await warehouse.productsByCategory('pasta');
    expect(result).toEqual([]);
});

});