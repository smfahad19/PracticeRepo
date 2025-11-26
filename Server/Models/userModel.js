import db from "../config/db.js";

export const createUser = (username, email, password, callback) => {
  const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  db.query(sql, [username, email, password], callback);
};

export const getAllUsers = (callback) => {
  db.query("SELECT * FROM users", callback);
};
