"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
//this information is kept secure in the .env file
const { POSTGRES_HOST, POSTGRES_USERNAME, POSTGRES_PASSWORD, POSTGRES_DB, TEST_POSTGRES_DB, ENV, } = process.env;
let client = new pg_1.Pool();
if (ENV === 'test') {
    client = new pg_1.Pool({
        host: POSTGRES_HOST,
        database: TEST_POSTGRES_DB,
        user: POSTGRES_USERNAME,
        password: POSTGRES_PASSWORD,
        port: 5432
    });
}
else if (ENV === 'dev') {
    client = new pg_1.Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        user: POSTGRES_USERNAME,
        password: POSTGRES_PASSWORD,
        port: 5432
    });
}
exports.default = client;
