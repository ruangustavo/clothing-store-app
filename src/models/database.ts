import { Pool } from "pg";
import { CREATE_PRODUCTS_TABLE_SCHEMA } from "./schemas/products/productsSchema";
import { CREATE_AUTH_TABLE_SCHEMA } from "./schemas/auth/authSchema";

// TODO: use 'dotenv' library
export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "clothing-store-app",
  password: "123qwe123",
  port: 5432,
});

pool.query(CREATE_PRODUCTS_TABLE_SCHEMA);
pool.query(CREATE_AUTH_TABLE_SCHEMA);
