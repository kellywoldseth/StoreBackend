import express, { Request, Response } from 'express';
import jwt, { Secret } from 'jsonwebtoken';

const verifyAuthToken = (req: Request, res: Response, next: any): void => {
  try {
    const authorizationHeader = req.headers.authorization;
    const token = (authorizationHeader as string).split(' ')[1];
    jwt.verify(token, process.env.TOKEN_SECRET as jwt.Secret);
    next();
  } catch (error) {
    res.status(401);
  }
};

export default verifyAuthToken;
