"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfo = void 0;
//@ts-ignore
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const pepper = process.env.BCRYPT_PASSWOORD || '';
const salt = process.env.SALT_ROUNDS || '';
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
    async create(u) {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql = 'INSERT INTO users (firstName, lastName, password) VALUES ($1, $2, $3) RETURNING *';
            const hash = bcrypt_1.default.hashSync(u.password + pepper, parseInt(salt));
            const result = await conn.query(sql, [u.firstName, u.lastName, hash]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not create new user. Error: ${err}`);
        }
    }
    //authenticate
    async authenticate(firstName, lastName, password) {
        const conn = await database_1.default.connect();
        const sql = 'SELECT password FROM users WHERE firstName=($1) WHERE lastName=($2)';
        const result = await conn.query(sql, [firstName, lastName]);
        if (result.rows.length) {
            const user = result.rows[0];
            if (bcrypt_1.default.compareSync(password + pepper, user.password))
                return user;
        }
        return null;
    }
}
exports.UserInfo = UserInfo;
