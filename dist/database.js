"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
var pg_1 = require("pg");
dotenv_1["default"].config();
//this information is kept secure in the .env file
var _a = process.env, POSTGRES_HOST = _a.POSTGRES_HOST, POSTGRES_USERNAME = _a.POSTGRES_USERNAME, POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD, POSTGRES_DB = _a.POSTGRES_DB, TEST_POSTGRES_DB = _a.TEST_POSTGRES_DB, ENV = _a.ENV;
var client = new pg_1.Pool();
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
exports["default"] = client;
