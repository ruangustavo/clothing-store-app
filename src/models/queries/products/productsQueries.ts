export const SELECT_ALL_PRODUCTS = "SELECT * FROM products";

export const SELECT_PRODUCT_BY_ID = "SELECT * FROM products WHERE id = $1";

export const INSERT_PRODUCT =
  "INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *";

export const UPDATE_PRODUCT =
  "UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *";

export const DELETE_PRODUCT = "DELETE FROM products WHERE id = $1";
