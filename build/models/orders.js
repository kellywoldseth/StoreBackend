"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
//@ts-ignore
const database_1 = __importDefault(require("../database"));
class Cart {
    //create order (like an addToCart method)
    async create(o) {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'INSERT INTO orders (user_id, order_status) VALUES ($1, $2) RETURNING *';
            const result = await conn.query(sql, [o.user_id, o.order_status]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not create new order. Error: ${err}`);
        }
    }
    //add product
    async addProduct(quantity, orderId, productId) {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'INSERT INTO orders_products (quantity, order_id, product_id) VALUES ($1, $2, $3) RETURNING *';
            const result = await conn.query(sql, [quantity, orderId, productId]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not add product ${productId} to order ${orderId}. Error: ${err}`);
        }
    }
    //current order
    async currentOrder(userId) {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql = `SELECT * FROM orders WHERE user_id=($1) AND order_status='active'`;
            const result = await conn.query(sql, [userId]);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Could not find current order for user ${userId}. Error: ${err}`);
        }
    }
    //completed orders
    async completedOrders(userId) {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql = `SELECT * FROM orders WHERE user_id=($1) AND order_status='completed'`;
            const result = await conn.query(sql, [userId]);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Could not find completed orders for user ${userId}. Error: ${err}`);
        }
    }
}
exports.Cart = Cart;
