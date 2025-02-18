"use strict";
//Handles /orders routes
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = require("../models/orders");
const verifyAuthToken_1 = __importDefault(require("../utilities/verifyAuthToken"));
const cart = new orders_1.Cart();
const create = async (_req, res) => {
    const order = {
        id: _req.body.id,
        user_id: _req.body.user_id,
        order_status: _req.body.order_status,
    };
    try {
        const newOrder = await cart.create(order);
        res.json(newOrder);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const addProduct = async (_req, res) => {
    const orderId = _req.params.id;
    const productId = _req.body.product_id;
    const quantity = parseInt(_req.body.quantity);
    try {
        const addedProduct = await cart.addProduct(quantity, orderId, productId);
        res.json(addedProduct);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const currentOrder = async (_req, res) => {
    try {
        const currOrders = await cart.currentOrder(_req.params.user_id);
        res.json(currOrders);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const completedOrders = async (_req, res) => {
    try {
        const pastOrders = await cart.completedOrders(_req.params.user_id);
        res.json(pastOrders);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const orderRoutes = (app) => {
    app.post('/orders', verifyAuthToken_1.default, create);
    app.get('/orders/current/:user_id', verifyAuthToken_1.default, currentOrder);
    app.get('/orders/completed/:user_id', verifyAuthToken_1.default, completedOrders);
    app.post('/orders/:id/products', verifyAuthToken_1.default, addProduct);
};
exports.default = orderRoutes;
