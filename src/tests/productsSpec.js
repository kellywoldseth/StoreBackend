"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("../models/products");
const warehouse = new products_1.ProductInventory();
describe("Testing Products Model", () => {
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
    /*TEST THAT ALL METHODS WORK*/
    /*TO DO STILL!!!!!!!!!!!!!!*/
    it('create method should return created product', async () => {
        const newProduct = await warehouse.create({
            id: '1',
            name: 'bananas',
            price: 1,
            category: 'produce',
            numOrders: 4
        });
        expect(newProduct).toEqual({
            id: '1',
            name: 'bananas',
            price: 1,
            category: 'produce',
            numOrders: 4
        });
    });
    it('show method should return one product', async () => {
        const result = await warehouse.show("1");
        expect(result).toEqual({
            id: '1',
            name: 'bananas',
            price: 1,
            category: 'produce',
            numOrders: 4
        });
    });
    it('index method should return a list of products', async () => {
        const result = await warehouse.index();
        expect(result).toEqual([
            {
                id: '1',
                name: 'bananas',
                price: 1,
                category: 'produce',
                numOrders: 4
            }
        ]);
    });
    /*
    it('topFive method should return a list of five products', async () =>{
        const result = await warehouse.topFive();
        expect(result).toEqual([
            {
                id: '1',
                name: 'bananas',
                price: 1,
                category: 'produce',
                numOrders: 4
                }
        ]);
    });
    */
    it('productsByCategory method should return a list of products', async () => {
        const result = await warehouse.productsByCategory('produce');
        expect(result).toEqual([
            {
                id: '1',
                name: 'bananas',
                price: 1,
                category: 'produce',
                numOrders: 4
            }
        ]);
    });
});
