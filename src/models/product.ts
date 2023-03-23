import { pool } from "./database";
import {
  SELECT_ALL_PRODUCTS,
  SELECT_PRODUCT_BY_ID,
  INSERT_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "./queries/products/productsQueries";

interface ProductType {
  id: number;
  name: string;
  price: number;
}

type ProductTypeWithoutId = Omit<ProductType, "id">;

export class Product {
  static async findAll(): Promise<ProductType[]> {
    const { rows } = await pool.query(SELECT_ALL_PRODUCTS);
    return rows;
  }

  static async findById(id: number): Promise<ProductType> {
    const { rows } = await pool.query(SELECT_PRODUCT_BY_ID, [id]);
    return rows[0];
  }

  static async create(product: ProductTypeWithoutId): Promise<ProductType[]> {
    const queryResult = await pool.query(INSERT_PRODUCT, [
      product.name,
      product.price,
    ]);
    return queryResult.rows[0];
  }

  static async update(
    id: number,
    product: ProductTypeWithoutId
  ): Promise<ProductType[]> {
    const queryResult = await pool.query(UPDATE_PRODUCT, [
      product.name,
      product.price,
      id,
    ]);
    return queryResult.rows[0];
  }

  static async delete(id: number): Promise<void> {
    await pool.query(DELETE_PRODUCT, [id]);
  }
}
