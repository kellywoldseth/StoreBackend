"use strict";
//Handles /orders routes
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var orders_1 = require("../models/orders");
var cart = new orders_1.Cart();
var create = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var order, newOrder, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                order = {
                    id: _req.body.id,
                    user_id: _req.body.user_id,
                    order_status: _req.body.order_status
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, cart.create(order)];
            case 2:
                newOrder = _a.sent();
                res.json(newOrder);
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                res.status(400);
                res.json(err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var addProduct = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var orderId, productId, quantity, addedProduct, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                orderId = _req.params.id;
                productId = _req.body.product_id;
                quantity = parseInt(_req.body.quantity);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, cart.addProduct(quantity, orderId, productId)];
            case 2:
                addedProduct = _a.sent();
                res.json(addedProduct);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                res.status(400);
                res.json(err_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var currentOrder = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currOrders;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, cart.currentOrder(_req.params.user_id)];
            case 1:
                currOrders = _a.sent();
                res.json(currOrders);
                return [2 /*return*/];
        }
    });
}); };
var completedOrders = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var pastOrders;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, cart.completedOrders(_req.params.user_id)];
            case 1:
                pastOrders = _a.sent();
                res.json(pastOrders);
                return [2 /*return*/];
        }
    });
}); };
var orderRoutes = function (app) {
    // app.post('/orders', verifyAuthToken, create);
    app.post('/orders', create);
    app.get('/orders/current/:user_id', currentOrder);
    app.get('/orders/completed/:user_id', completedOrders);
    app.post('/orders/:id/products', addProduct);
    //app.post('/orders/:id/products', verifyAuthToken, addProduct);
};
exports["default"] = orderRoutes;
