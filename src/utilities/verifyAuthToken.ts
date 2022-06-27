import express, {Request, Response} from "express";
import jwt, { Secret } from "jsonwebtoken"

const verifyAuthToken = (_req: Request, res: Response, next: any) => {
    
    try {
        const authorizationHeader = _req.headers.authorization
        console.log('authorizationHeader: ' + authorizationHeader)
        const token:string = authorizationHeader!.split(' ')[1]
        jwt.verify(token, process.env.TOKEN_SECRET as jwt.Secret)
        next()
    } catch (error) {
        console.log('auth token failed')
        res.status(401)
        console.log("error: " + error)
    }
}

export default verifyAuthToken;