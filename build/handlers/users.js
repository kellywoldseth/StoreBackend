"use strict";
//Handles /users routes
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../models/users");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyAuthToken_1 = __importDefault(require("../utilities/verifyAuthToken"));
const userDatabase = new users_1.UserInfo();
const index = async (_req, res) => {
    try {
        const users = await userDatabase.index();
        res.json(users);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const show = async (_req, res) => {
    try {
        const user = await userDatabase.show(_req.params.id);
        res.json(user);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const create = async (_req, res) => {
    const user = {
        id: _req.body.id,
        firstname: _req.body.firstname,
        lastname: _req.body.lastname,
        password: _req.body.password,
    };
    try {
        const newUser = await userDatabase.create(user);
        var token = jsonwebtoken_1.default.sign({ user: newUser }, process.env.TOKEN_SECRET);
        res.json(token);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const authenticate = async (_req, res) => {
    const user = {
        id: _req.body.id,
        firstname: _req.body.firstname,
        lastname: _req.body.lastname,
        password: _req.body.password,
    };
    try {
        const newUser = await userDatabase.authenticate(user.firstname, user.lastname, user.password);
        var token = jsonwebtoken_1.default.sign({ user: newUser }, process.env.TOKEN_SECRET);
        res.json(token);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const userRoutes = (app) => {
    app.get('/users', verifyAuthToken_1.default, index);
    app.get('/users/:id', verifyAuthToken_1.default, show);
    app.post('/users', create);
};
exports.default = userRoutes;
