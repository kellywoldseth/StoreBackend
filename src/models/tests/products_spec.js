"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("../products");
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
});
