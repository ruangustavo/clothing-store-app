export const SELECT_USER_BY_EMAIL = "SELECT * FROM users WHERE email = $1";

export const CREATE_USER =
  "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *";
