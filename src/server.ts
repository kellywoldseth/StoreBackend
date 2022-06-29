//This file contains starter code that was provided to us by the Udacity staff.

import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import productsRoutes from './handlers/products';
import userRoutes from './handlers/users';
import orderRoutes from './handlers/orders';

const app: express.Application = express();
const address: string = '0.0.0.0.3000';

//DO I NEED CORS? NOT CURRENTLY WORKING. I DID DO YARN ADD CORS.
/*const corsOptions = {
    origin: "",
    optionsSuccessStatus: 200
}*/

//app.use(cors(corsOptions))

app.use(bodyParser.json());
productsRoutes(app);
userRoutes(app);
orderRoutes(app);

app.get('/', function (req: Request, res: Response) {
  res.send('Hello World!!');
});

app.listen(3000, function () {
  console.log(`starting app on: ${address}`);
});

export default app;
