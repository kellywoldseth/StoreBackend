//@ts-ignore
import client from '../database'
import bcrypt from 'bcrypt'

export type User = {
 id: string;
 firstName: string;
 lastName: string;
 password: string;
}

const pepper = process.env.BCRYPT_PASSWOORD || '';
const salt = process.env.SALT_ROUNDS || ''; 
export class UserInfo{
   
    //index
   async index():Promise<User[]> 
   {
       try
       {
        //@ts-ignore
        const conn = await client.connect()
        const sql = 'SELECT * FROM users'
        const result = await conn.query(sql)
        conn.release()
        return result.rows
       }
       catch (err)
       {
        throw new Error(`Could not access users. Error: ${err}`)
       }
   }

    //show
    async show(id:string):Promise<User> 
    {
        try
        {
         //@ts-ignore
         const conn = await client.connect()
         const sql = 'SELECT * FROM users WHERE id = ($1)'
         const result = await conn.query(sql, [id])
         conn.release()
         return result.rows[0]
        }
        catch (err)
        {
         throw new Error(`Could not access user ${id}. Error: ${err}`)
        }
    }

    //create
    async create(u: User):Promise<User> 
    {
        try
        {
         //@ts-ignore
         const conn = await client.connect()
         const sql = 'INSERT INTO users (firstName, lastName, password) VALUES ($1, $2, $3) RETURNING *'
         
         
         const hash = bcrypt.hashSync(u.password + pepper, parseInt(salt));
         const result = await conn.query(sql, [u.firstName, u.lastName, hash])
         conn.release()
         return result.rows[0]
        }
        catch (err)
        {
         throw new Error(`Could not create new user. Error: ${err}`)
        }
    }

    //authenticate
    async authenticate(firstName: string, lastName: string, password: string): Promise<User | null> {
        const conn = await client.connect()
        const sql = 'SELECT password FROM users WHERE firstName=($1) WHERE lastName=($2)'
        const result = await conn.query(sql, [firstName, lastName])
        if(result.rows.length)
        {
            const user = result.rows[0]
            if(bcrypt.compareSync(password+pepper, user.password))
                return user
        }
        return null
    }

}

