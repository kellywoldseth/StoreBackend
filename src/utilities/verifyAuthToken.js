"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyAuthToken = (_req, res, next) => {
    try {
        const authorizationHeader = _req.headers.authorization;
        console.log('authorizationHeader: ' + authorizationHeader);
        const token = authorizationHeader.split(' ')[1];
        jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
    }
    catch (error) {
        console.log('auth token failed');
        res.status(401);
        console.log('error: ' + error);
    }
};
exports.default = verifyAuthToken;
