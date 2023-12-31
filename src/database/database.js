require("dotenv").config();
const mysql = require("mysql");

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
};

const connection = mysql.createConnection(dbConfig);
module.exports = connection;
