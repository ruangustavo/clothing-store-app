export const CREATE_PRODUCTS_TABLE_SCHEMA =
  "CREATE TABLE IF NOT EXISTS products (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, price NUMERIC(10, 2) NOT NULL)";

export const SELECT_ALL_PRODUCTS = "SELECT * FROM products";

export const SELECT_PRODUCT_BY_ID = "SELECT * FROM products WHERE id = $1";

export const INSERT_PRODUCT =
  "INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *";

export const UPDATE_PRODUCT =
  "UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *";

export const DELETE_PRODUCT = "DELETE FROM products WHERE id = $1";
