import dotenv from 'dotenv'
import {Pool} from 'pg'

dotenv.config()

//this information is kept secure in the .env file
const {
    POSTGRES_HOST,
    POSTGRES_USERNAME,
    POSTGRES_PASSWORD,
    POSTGRES_DB,
    TEST_POSTGRES_HOST,
    TEST_POSTGRES_USERNAME,
    TEST_POSTGRES_PASSWORD,
    TEST_POSTGRES_DB,
} = process.env

const client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USERNAME,
    password: POSTGRES_PASSWORD
})

export default client