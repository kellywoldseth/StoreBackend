import express, { Request, Response } from 'express'
import {Product, ProductInventory } from '../models/products'
import jwt from 'jsonwebtoken'

const warehouse = new ProductInventory()

const index = async (_req: Request, res: Response) =>
{
    const products = await warehouse.index()
    res.json(products)
}
  
const show = async (_req: Request, res: Response) => 
{
const product = await warehouse.show(_req.params.id)
res.json(product)
}


/*ERROR---- IT WANTS PRODUCT TO HAVE AN ID*/
const create = async (_req: Request, res: Response) => 
{
    const product: Product = {
        id: _req.body.id,
        name: _req.body.name,
        price: _req.body.price,
        category: _req.body.category,
        numOrders: _req.body.numOrders
    }
    try {
        const newProduct = await warehouse.create(product)
        res.json(newProduct)
    }
    catch(err) {
        res.status(400)
        res.json(err)
    }

}

const verifyAuthToken = (_req: Request, res: Response, next: any) => {
    
    try {
        const authorizationHeader: string = _req.headers.authorization || ''
        const token:string = authorizationHeader.split(' ')[1]
        jwt.verify(token, process.env.TOKEN_SECRET as jwt.Secret)

        next()
    } catch (error) {
        res.status(401)
    }
}
const topFive = async (_req: Request, res: Response) => {
    const products = await warehouse.topFive()
    res.json(products)
}

const productsByCategory = async (_req: Request, res: Response) => {
    const products = await warehouse.productsByCategory(_req.params.category)
    res.json(products)
}

const productsRoutes = (app: express.Application) => {
    app.get('/products', index)
    app.get('/products/:id', show)
    app.post('/products', verifyAuthToken, create)
    app.get('/products', topFive)
    app.get('/products/:category', productsByCategory)
  }


  export default productsRoutes


