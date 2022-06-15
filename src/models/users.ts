//@ts-ignore
import client from '../database'

export type User = {
 id: string;
 firstName: string;
 lastName: string;
 password: string;
}

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
    async show(id:string):Promise<User[]> 
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
    //NEEDS HASHING ON PASSWORD
    async create(u: User):Promise<User[]> 
    {
        try
        {
         //@ts-ignore
         const conn = await client.connect()
         const sql = 'INSERT INTO users (firstName, lastName, password) VALUES ($1, $2, $3) RETURNING *'
         const result = await conn.query(sql, [u.firstName, u.lastName, u.password])
         conn.release()
         return result.rows[0]
        }
        catch (err)
        {
         throw new Error(`Could not create new user. Error: ${err}`)
        }
    }

}

