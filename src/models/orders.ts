//@ts-ignore
import { NoSubstitutionTemplateLiteral } from 'typescript';
import client from '../database'

export type Order = {
 id: number;
 product_id: number;
 quantity: number;
 user_id: number;
 order_status: string;
}

export class Cart{
    //current order
    async currentOrder(id: string):Promise<Order[]> 
    {
        try
        {
         //@ts-ignore
         const conn = await client.connect()
         const sql = `SELECT * FROM orders INNER JOIN users ON user.id=orders.users_id WHERE order_stats = 'active'`;
         const result = await conn.query(sql)
         conn.release()
         return result.rows
        }
        catch (err)
        {
         throw new Error(`Could find current order for user ${id}. Error: ${err}`)
        }
    }

    //optional - completed orders
    async completedOrders(id: string):Promise<Order[]> 
    {
        try
        {
         //@ts-ignore
         const conn = await client.connect()
         const sql = `SELECT * FROM orders INNER JOIN users ON user.id=orders.users_id WHERE order_stats = 'completed'`;
         const result = await conn.query(sql)
         conn.release()
         return result.rows
        }
        catch (err)
        {
         throw new Error(`Could find completed orders for user ${id}. Error: ${err}`)
        }
    }

}
