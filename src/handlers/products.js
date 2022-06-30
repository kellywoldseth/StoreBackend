"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("../models/products");
const warehouse = new products_1.ProductInventory();
const index = async (_req, res) => {
    const products = await warehouse.index();
    res.json(products);
};
const show = async (_req, res) => {
    const product = await warehouse.show(_req.params.id);
    res.json(product);
};
const create = async (_req, res) => {
    const product = {
        id: _req.body.id,
        name: _req.body.name,
        price: _req.body.price,
        category: _req.body.category,
        numorders: _req.body.numorders,
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
    //app.post('/products', verifyAuthToken, create) //need help with this
    app.post('/products', create);
    app.get('/products/topFive', topFive);
    app.get('/products/category/:category', productsByCategory);
};
exports.default = productsRoutes;
