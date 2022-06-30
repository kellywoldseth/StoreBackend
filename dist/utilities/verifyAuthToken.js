"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var verifyAuthToken = function (_req, res, next) {
    try {
        var authorizationHeader = _req.headers.authorization;
        console.log('AuthorizationHeader: ' + authorizationHeader);
        var token = authorizationHeader.split(' ')[1];
        jsonwebtoken_1["default"].verify(token, process.env.TOKEN_SECRET);
        next();
    }
    catch (error) {
        console.log('auth token failed');
        res.status(401);
        console.log('error: ' + error);
    }
};
exports["default"] = verifyAuthToken;
