"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
//@ts-ignore
const database_1 = __importDefault(require("../database"));
class Cart {
    //current order
    async currentOrder(id) {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql = `SELECT * FROM orders INNER JOIN users ON user.id=orders.users_id WHERE order_stats = 'active'`;
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Could find current order for user ${id}. Error: ${err}`);
        }
    }
    //optional - completed orders
    async completedOrders(id) {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql = `SELECT * FROM orders INNER JOIN users ON user.id=orders.users_id WHERE order_stats = 'completed'`;
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Could find completed orders for user ${id}. Error: ${err}`);
        }
    }
}
exports.Cart = Cart;
