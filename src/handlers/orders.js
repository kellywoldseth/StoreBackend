"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = require("../models/orders");
const cart = new orders_1.Cart();
const currentOrder = async (_req, res) => {
    const currOrders = await cart.currentOrder(_req.params.user_id);
    res.json(currOrders);
};
const completedOrders = async (_req, res) => {
    const pastOrders = await cart.completedOrders(_req.params.user_id);
    res.json(pastOrders);
};
const orderRoutes = (app) => {
    app.get('/orders/:user_id', currentOrder);
    app.get('/orders/:user_id', completedOrders);
};
exports.default = orderRoutes;
