"use strict";
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
        product_id: _req.body.product_id,
        quantity: _req.body.quantity,
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
const currentOrder = async (_req, res) => {
    const currOrders = await cart.currentOrder(_req.params.user_id);
    res.json(currOrders);
};
const completedOrders = async (_req, res) => {
    const pastOrders = await cart.completedOrders(_req.params.user_id);
    res.json(pastOrders);
};
const orderRoutes = (app) => {
    app.post('/orders', verifyAuthToken_1.default, create);
    app.get('/orders/:user_id', currentOrder);
    app.get('/orders/:user_id', completedOrders);
};
exports.default = orderRoutes;
