"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
const { DEVELOPMENT_POSTGRES_HOST, DEVELOPMENT_POSTGRES_USERNAME, DEVELOPMENT_POSTGRES_PASSWORD, DEVELOPMENT_POSTGRES_DB, DEVELOPMENT_POSTGRES_DBTEST, } = process.env;
const client = new pg_1.Pool({
    host: DEVELOPMENT_POSTGRES_HOST,
    database: DEVELOPMENT_POSTGRES_DB,
    user: DEVELOPMENT_POSTGRES_USERNAME,
    password: DEVELOPMENT_POSTGRES_PASSWORD
});
exports.default = client;
