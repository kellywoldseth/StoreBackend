//@ts-ignore
import client from '../database';

export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  numorders: number;
};

export class ProductInventory {
  //index
  async index(): Promise<Product[]> {
    try {
      //@ts-ignore
      const conn = await client.connect();
      const sql = 'SELECT * FROM products';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not access products. Error: ${err}`);
    }
  }

  //show
  async show(id: string): Promise<Product> {
    try {
      //@ts-ignore
      const conn = await client.connect();
      const sql = 'SELECT * FROM products WHERE id = ($1)';
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not access product ${id}. Error: ${err}`);
    }
  }

  //create
  async create(p: Product): Promise<Product> {
    try {
      //@ts-ignore
      const conn = await client.connect();
      const sql =
        'INSERT INTO products (name, price, category, numorders) VALUES ($1, $2, $3, $4) RETURNING *';
      const result = await conn.query(sql, [
        p.name,
        p.price,
        p.category,
        p.numorders,
      ]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not create new product. Error: ${err}`);
    }
  }

  //optional - top 5 most popular
  async topFive(): Promise<Product[]> {
    try {
      //@ts-ignore
      const conn = await client.connect();
      const sql = 'SELECT * FROM products ORDER BY numorders DESC LIMIT 5';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not find top five products. Error: ${err}`);
    }
  }

  //optional products by category
  async productsByCategory(cat: string): Promise<Product[]> {
    try {
      //@ts-ignore
      const conn = await client.connect();
      const sql = 'SELECT * FROM products WHERE category=($1)';
      const result = await conn.query(sql, [cat]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(
        `Could not find any products in that category. Error: ${err}`
      );
    }
  }
}
