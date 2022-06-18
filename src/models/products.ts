//@ts-ignore
import client from '../database'

export type Product = {
 id: string;
 name: string;
 price: number;
 category: string;
 numOrders: number;
}

export class ProductInventory{
        //index
        async index():Promise<Product[]> 
        {
            try
            {
                //@ts-ignore
                const conn = await client.connect()
                const sql = 'SELECT * FROM products'
                const result = await conn.query(sql)
                conn.release()
                return result.rows
            }
            catch (err)
            {
                throw new Error(`Could not access products. Error: ${err}`)
            }
        }

    //show
    async show(id:string):Promise<Product> 
    {
        try
        {
         //@ts-ignore
         const conn = await client.connect()
         const sql = 'SELECT * FROM products WHERE id = ($1)'
         const result = await conn.query(sql, [id])
         conn.release()
         return result.rows[0]
        }
        catch (err)
        {
         throw new Error(`Could not access product ${id}. Error: ${err}`)
        }
    }

    //create
    async create(p: Product):Promise<Product> 
    {
        try
        {
         //@ts-ignore
         const conn = await client.connect()
         const sql = 'INSERT INTO products (name, price, category) VALUES ($1, $2, $3) RETURNING *'
         const result = await conn.query(sql, [p.name, p.price, p.category])
         conn.release()
         return result.rows[0]
        }
        catch (err)
        {
         throw new Error(`Could not create new product. Error: ${err}`)
        }
    }

    //optional - top 5 most popular
    async topFive():Promise<Product[]> 
    {
        try
        {
         //@ts-ignore
         const conn = await client.connect()
         const sql = 'SELECT * FROM products ORDER BY numOrders DESC LIMIT 5';
         const result = await conn.query(sql)
         conn.release()
         return result.rows
        }
        catch (err)
        {
         throw new Error(`Could not find top five products. Error: ${err}`)
        }
    }

    //optional products by category
    async productsByCategory(category: string):Promise<Product[]> 
    {
        try
        {
         //@ts-ignore
         const conn = await client.connect()
         const sql = `SELECT * FROM products WHERE catgory=${category}`;
         const result = await conn.query(sql)
         conn.release()
         return result.rows
        }
        catch (err)
        {
         throw new Error(`Could any products in that category. Error: ${err}`)
        }
    }

}
