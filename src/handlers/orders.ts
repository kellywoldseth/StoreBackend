import express, { Request, Response } from 'express'
import {Order, Cart } from '../models/orders'

const cart = new Cart()

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
    app.get('/orders/:user_id', currentOrder)
    app.get('/orders/:user_id', completedOrders)
  }

  export default orderRoutes
