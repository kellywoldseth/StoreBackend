import dotenv from 'dotenv'
import {Pool} from 'pg'

dotenv.config()

//this information is kept secure in the .env file
const {
    POSTGRES_HOST,
    POSTGRES_USERNAME,
    POSTGRES_PASSWORD,
    POSTGRES_DB,
    TEST_POSTGRES_DB,
    ENV,
} = process.env

let client: Pool = new Pool();

if(ENV === 'test') {
 client = new Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        user: POSTGRES_USERNAME,
        password: POSTGRES_PASSWORD,
        port: 5432
    })
}
else if(ENV === 'dev') {
    client = new Pool({
        host: POSTGRES_HOST,
        database: TEST_POSTGRES_DB,
        user: POSTGRES_USERNAME,
        password: POSTGRES_PASSWORD,
        port: 5432
    })
}




export default client