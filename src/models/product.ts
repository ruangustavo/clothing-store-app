import { pool } from "./database";

interface ProductType {
  id: number;
  name: string;
  price: number;
}

type ProductTypeWithoutId = Omit<ProductType, "id">;

class Product {
  static async findAll(): Promise<ProductType[]> {
    const query = "SELECT * FROM products";
    const { rows } = await pool.query(query);
    return rows;
  }

  static async findById(id: number): Promise<ProductType[]> {
    const query = "SELECT * FROM products WHERE id = $1";
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  }

  static async create(product: ProductTypeWithoutId): Promise<ProductType[]> {
    const { name, price } = product;
    const query =
      "INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *";
    const { rows } = await pool.query(query, [name, price]);
    return rows[0];
  }

  static async update(
    id: number,
    product: ProductTypeWithoutId
  ): Promise<ProductType[]> {
    const { name, price } = product;
    const query =
      "UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *";
    const { rows } = await pool.query(query, [name, price, id]);
    return rows[0];
  }

  static async delete(id: number): Promise<void> {
    const query = "DELETE FROM products WHERE id = $1";
    await pool.query(query, [id]);
  }
}
