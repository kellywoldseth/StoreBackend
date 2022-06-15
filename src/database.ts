import dotenv from 'dotenv'
import {Pool} from 'pg'

dotenv.config()

const {
    DEVELOPMENT_POSTGRES_HOST,
    DEVELOPMENT_POSTGRES_USERNAME,
    DEVELOPMENT_POSTGRES_PASSWORD,
    DEVELOPMENT_POSTGRES_DB,
    DEVELOPMENT_POSTGRES_DBTEST,
} = process.env

const client = new Pool({
    host: DEVELOPMENT_POSTGRES_HOST,
    database: DEVELOPMENT_POSTGRES_DB,
    user: DEVELOPMENT_POSTGRES_USERNAME,
    password:DEVELOPMENT_POSTGRES_PASSWORD
})

export default client