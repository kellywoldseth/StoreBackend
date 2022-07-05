//@ts-ignore
import client from '../database';

export type Order = {
  id: number;
  user_id: string;
  order_status: string;
};

export class Cart {
  //create order (like an addToCart method)
  async create(o: Order): Promise<Order> {
    try {
      //@ts-ignore
      const conn = await client.connect();
      const sql =
        'INSERT INTO orders (user_id, order_status) VALUES ($1, $2) RETURNING *';
      const result = await conn.query(sql, [o.user_id, o.order_status]);
      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not create new order. Error: ${err}`);
    }
  }

  //add product
  async addProduct(
    quantity: number,
    orderId: string,
    productId: string
  ): Promise<{
    id: number;
    quantity: number;
    order_id: string;
    product_id: string;
  }> {
    try {
      //@ts-ignore
      const conn = await client.connect();
      const sql =
        'INSERT INTO orders_products (quantity, order_id, product_id) VALUES ($1, $2, $3) RETURNING *';
      const result = await conn.query(sql, [quantity, orderId, productId]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(
        `Could not add product ${productId} to order ${orderId}. Error: ${err}`
      );
    }
  }
  //current order
  async currentOrder(userId: string): Promise<Order[]> {
    try {
      //@ts-ignore
      const conn = await client.connect();
      const sql = `SELECT * FROM orders WHERE user_id=($1) AND order_status='active'`;
      const result = await conn.query(sql, [userId]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(
        `Could not find current order for user ${userId}. Error: ${err}`
      );
    }
  }

  //completed orders
  async completedOrders(userId: string): Promise<Order[]> {
    try {
      //@ts-ignore
      const conn = await client.connect();
      const sql = `SELECT * FROM orders WHERE user_id=($1) AND order_status='completed'`;
      const result = await conn.query(sql, [userId]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(
        `Could not find completed orders for user ${userId}. Error: ${err}`
      );
    }
  }
}
