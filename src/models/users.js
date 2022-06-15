"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfo = void 0;
//@ts-ignore
const database_1 = __importDefault(require("../database"));
class UserInfo {
    //index
    async index() {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT * FROM users';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Could not access users. Error: ${err}`);
        }
    }
    //show
    async show(id) {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'SELECT * FROM users WHERE id = ($1)';
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not access user ${id}. Error: ${err}`);
        }
    }
    //create
    //NEEDS HASHING ON PASSWORD
    async create(u) {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'INSERT INTO users (firstName, lastName, password) VALUES ($1, $2, $3) RETURNING *';
            const result = await conn.query(sql, [u.firstName, u.lastName, u.password]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not create new user. Error: ${err}`);
        }
    }
}
exports.UserInfo = UserInfo;
