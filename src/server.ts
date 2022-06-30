//This file contains starter code that was provided to us by the Udacity staff.

import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import productsRoutes from './handlers/products';
import userRoutes from './handlers/users';
import orderRoutes from './handlers/orders';

const app: express.Application = express();
const address: string = '0.0.0.0.3000';

//CORS implementation was added by me
const corsOptions = {
  origin: '',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

//routes were added by me
productsRoutes(app);
userRoutes(app);
orderRoutes(app);

app.get('/', function (req: Request, res: Response) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log(`starting app on: ${address}`);
});

export default app;
