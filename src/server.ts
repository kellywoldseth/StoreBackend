//This file contains starter code that was provided to us by the Udacity staff.

import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'

const app: express.Application = express()
const address: string = "0.0.0.0.3000"


//DO I NEED CORS? NOT CURRENTLY WORKING. I DID DO YARN ADD CORS.
/*const corsOptions = {
    origin: "",
    optionsSuccessStatus: 200
}*/

//app.use(cors(corsOptions))

app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})


export default app;