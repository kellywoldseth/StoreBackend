"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//any is used here because that was what the example used. 
//I don't have any better explanation than that.
var verifyAuthToken = function (_req, res, next) {
    try {
        var authorizationHeader = _req.headers.authorization;
        console.log(authorizationHeader);
        var token = authorizationHeader.split(' ')[1];
        jsonwebtoken_1["default"].verify(token, process.env.TOKEN_SECRET);
        next();
    }
    catch (error) {
        res.status(401);
    }
};
exports["default"] = verifyAuthToken;
