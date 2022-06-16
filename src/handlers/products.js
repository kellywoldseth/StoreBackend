"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("../models/products");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const warehouse = new products_1.ProductInventory();
const index = async (_req, res) => {
    const products = await warehouse.index();
    res.json(products);
};
const show = async (_req, res) => {
    const product = await warehouse.show(_req.params.id);
    res.json(product);
};
/*ERROR---- IT WANTS PRODUCT TO HAVE AN ID*/
const create = async (_req, res) => {
    const product = {
        name: _req.body.name,
        price: _req.body.price,
        category: _req.body.category,
        numOrders: _req.body.numOrders
    };
    try {
        const newProduct = await warehouse.create(product);
        res.json(newProduct);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const verifyAuthToken = (_req, res, next) => {
    try {
        const authorizationHeader = _req.headers.authorization;
        const token = authorizationHeader.split(' ')[1];
        const decoded = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
        next();
    }
    catch (error) {
        res.status(401);
    }
};
const topFive = async (_req, res) => {
    const products = await warehouse.topFive();
    res.json(products);
};
const productsByCategory = async (_req, res) => {
    const products = await warehouse.productsByCategory(_req.params.category);
    res.json(products);
};
const productsRoutes = (app) => {
    app.get('/products', index);
    app.get('/products/:id', show);
    app.post('/products', verifyAuthToken, create);
    app.get('/products', topFive);
    app.get('/products/:category', productsByCategory);
};
exports.default = productsRoutes;
