import express, { Request, Response } from 'express'
import {User, UserInfo } from '../models/users'

const userDatabase = new UserInfo()

const index = async (_req: Request, res: Response) =>
{
    const users = await userDatabase.index()
    res.json(users)
}
  
const show = async (_req: Request, res: Response) => 
{
const user = await userDatabase.show(_req.params.id)
res.json(user)
}


/*ERROR---- IT WANTS USER TO HAVE AN ID*/
/*PASSWORD HASHING*/
const create = async (_req: Request, res: Response) => 
{
    try {
        const user: User = {
            firstName: _req.body.firstName,
            lastName: _req.body.lastName,
            password: _req.body.password,
        }
    
    const newUser = await userDatabase.create(user)
    res.json(newUser)
    }
    catch(err) {
        res.status(400)
        res.json(err)
    }

}

const userRoutes = (app: express.Application) => {
    app.get('/users', index)
    app.get('/users/:id', show)
    app.post('/users', create)
  }


  export default userRoutes

