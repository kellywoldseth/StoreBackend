"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductInventory = void 0;
//@ts-ignore
const database_1 = __importDefault(require("../database"));
class ProductInventory {
    //index
    async index() {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT * FROM products';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Could not access products. Error: ${err}`);
        }
    }
    //show
    async show(id) {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT * FROM products WHERE id = ($1)';
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not access product ${id}. Error: ${err}`);
        }
    }
    //create
    async create(p) {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'INSERT INTO products (name, price, category, numorders) VALUES ($1, $2, $3, $4) RETURNING *';
            const result = await conn.query(sql, [
                p.name,
                p.price,
                p.category,
                p.numorders,
            ]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not create new product. Error: ${err}`);
        }
    }
    //top 5 most popular
    async topFive() {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT * FROM products ORDER BY numorders DESC LIMIT 5';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Could not find top five products. Error: ${err}`);
        }
    }
    //products by category
    async productsByCategory(cat) {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT * FROM products WHERE category=($1)';
            const result = await conn.query(sql, [cat]);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Could not find any products in that category. Error: ${err}`);
        }
    }
}
exports.ProductInventory = ProductInventory;
