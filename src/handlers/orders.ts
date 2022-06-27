import express, { Request, Response } from 'express'
import {Order, Cart } from '../models/orders'
import verifyAuthToken from '../utilities/verifyAuthToken'

const cart = new Cart()


const create = async (_req: Request, res: Response) =>
{
    const order: Order = {
        id: _req.body.id,
        product_id: _req.body.product_id,
        quantity: _req.body.quantity,
        user_id: _req.body.user_id,
        order_status: _req.body.order_status,
       }
       try {
        const newOrder = await cart.create(order)
        res.json(newOrder)
    }
    catch(err) {
        res.status(400)
        res.json(err)
    }
}

const currentOrder = async (_req: Request, res: Response) =>
{
    const currOrders = await cart.currentOrder(_req.params.user_id)
    res.json(currOrders)
}

const completedOrders = async (_req: Request, res: Response) =>
{
    const pastOrders = await cart.completedOrders(_req.params.user_id)
    res.json(pastOrders)
}


const orderRoutes = (app: express.Application) => {
    app.post('/orders', verifyAuthToken, create)
    app.get('/orders/:user_id', currentOrder)
    app.get('/orders/:user_id', completedOrders)
  }


  export default orderRoutes
