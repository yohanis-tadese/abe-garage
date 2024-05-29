// Import the mysql2 module Promise Wrapper
const mysql = require("mysql2/promise");

// Prepare connection parameters we use to connect to the database
const dbConfig = {
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
};

// Create the connection pool
const pool = mysql.createPool(dbConfig);

// Check database connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
  } else {
    console.log("Database connected successfully!");
    connection.release();
  }
});

// Prepare a function that will execute the SQL queries asynchronously
async function query(sql, params) {
  const [rows, fields] = await pool.execute(sql, params);
  return rows;
}
// Export the query function for use in the application
module.exports = { query };
