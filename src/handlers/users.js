"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
const userDatabase = new UserInfo()

const index = async (_req: Request, res: Response) =>
{
    const users = await userDatabase.index()
    res.send("users endpoint");
    console.log('testing');
    res.json(users)
}
  
const show = async (_req: Request, res: Response) =>
{
const user = await userDatabase.show(_req.params.id)
res.json(user)
}



const create = async (_req: Request, res: Response) =>
{
    const user: User = {
        id: _req.body.id,
        firstName: _req.body.firstName,
        lastName: _req.body.lastName,
        password: _req.body.password,
    }

    try {
        const newUser = await userDatabase.create(user)
        var token = jwt.sign({user: newUser}, process.env.TOKEN_SECRET  as jwt.Secret);
        res.json(token)
    }
    catch(err) {
        res.status(400)
        res.json(err)
    }
}

const authenticate = async (_req: Request, res: Response) =>
{
    const user: User = {
        id: _req.body.id,
        firstName: _req.body.firstName,
        lastName: _req.body.lastName,
        password: _req.body.password,
    }
    try {
        const newUser = await userDatabase.authenticate(user.firstName, user.lastName, user.password)
        var token = jwt.sign({user: newUser}, process.env.TOKEN_SECRET as jwt.Secret);
        res.json(token)
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
*/ 
