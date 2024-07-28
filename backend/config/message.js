const mysql = require('mysql2/promise'); // Use the promise version for better error handling

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'rony@2022',
  database: 'message'
});

pool.getConnection()
  .then((connection) => {
    console.log('Connected to the MySQL server.');
    // Use the connection here
    connection.release(); // Release the connection back to the pool
  })
  .catch((err) => {
    console.error('Error connecting to the MySQL server:', err);
  });

module.exports = pool;