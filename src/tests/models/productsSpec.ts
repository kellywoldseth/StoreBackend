import { Product, ProductInventory } from '../../models/products';

const warehouse = new ProductInventory();

describe('Testing PRODUCTS Model', () => {
  //methods should be defined
  it('should have an index method', () => {
    expect(warehouse.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(warehouse.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(warehouse.create).toBeDefined();
  });

  it('should have a topFive method', () => {
    expect(warehouse.topFive).toBeDefined();
  });

  it('should have a productsByCategory method', () => {
    expect(warehouse.productsByCategory).toBeDefined();
  });

  //testing all methods

  //user1 (joseph fromm) was created in tests/handlers/ordersSpec file
  //user2 (colin fromm) was created in tests/handlers/productsSpec file
  //user3 (leif woldseth) was created in tests/handlers/usersSpec file
  //user4 (kelly woldseth) was created in tests/models/ordersSpec file

  //applesProduct(id=1) was created in tests/handlers/ordersSpec file
  //cakeProduct(id=2) was created in tests/handlers/productsSpec file
  //eggsProduct(id=3) was created in tests/models/ordersSpec file

  it('index method should return a list of products', async () => {
    const result = await warehouse.index();
    expect(result).toEqual([
      {
        id: 1,
        name: 'apples',
        price: 1,
        category: 'produce',
        numorders: 8,
      },
      {
        id: 2,
        name: 'cake',
        price: 3,
        category: 'bakery',
        numorders: 1,
      },
      {
        id: 3,
        name: 'eggs',
        price: 4,
        category: 'dairy',
        numorders: 5,
      },
    ]);
  });

  it('create method should return created product', async () => {
    const newProduct = await warehouse.create({
      id: 4,
      name: 'bananas',
      price: 1,
      category: 'produce',
      numorders: 3,
    });
    expect(newProduct).toEqual({
      id: 4,
      name: 'bananas',
      price: 1,
      category: 'produce',
      numorders: 3,
    });
    expect(newProduct.name).toEqual('bananas');
  });

  it('show method should return one product', async () => {
    const result = await warehouse.show('4');
    expect(result).toEqual({
      id: 4,
      name: 'bananas',
      price: 1,
      category: 'produce',
      numorders: 3,
    });
  });

  it('show method should return undefined if product does not exist', async () => {
    const result = await warehouse.show('16');
    expect(result).toBeUndefined();
  });

  it('topFive method should return a list of top five products ranked by numorders', async () => {
    const prod1 = await warehouse.create({
      id: 5,
      name: 'bread',
      price: 3,
      category: 'bakery',
      numorders: 6,
    });

    const prod2 = await warehouse.create({
      id: 6,
      name: 'milk',
      price: 3,
      category: 'dary',
      numorders: 2,
    });

    const result = await warehouse.topFive();
    expect(result).toEqual([
      {
        id: 1,
        name: 'apples',
        price: 1,
        category: 'produce',
        numorders: 8,
      },
      {
        id: 5,
        name: 'bread',
        price: 3,
        category: 'bakery',
        numorders: 6,
      },
      {
        id: 3,
        name: 'eggs',
        price: 4,
        category: 'dairy',
        numorders: 5,
      },
      {
        id: 4,
        name: 'bananas',
        price: 1,
        category: 'produce',
        numorders: 3,
      },
      {
        id: 6,
        name: 'milk',
        price: 3,
        category: 'dary',
        numorders: 2,
      },
    ]);
  });

  it('productsByCategory method should return a list of produce products', async () => {
    const result = await warehouse.productsByCategory('produce');
    expect(result).toEqual([
      {
        id: 1,
        name: 'apples',
        price: 1,
        category: 'produce',
        numorders: 8,
      },
      {
        id: 4,
        name: 'bananas',
        price: 1,
        category: 'produce',
        numorders: 3,
      },
    ]);
  });

  it('productsByCategory method should return an empty list of pasta products', async () => {
    const result = await warehouse.productsByCategory('pasta');
    expect(result).toEqual([]);
  });
});
