const mysql = require('mysql'); // Use the promise version for better error handling

const available = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rony@2022',
  database: 'available_service'
});


available.connect((err) => {
    if (err) {
      // throw err;
      console.log('Error connecting to database');
    }
    console.log('Connected to service_db database');
  });

module.exports = available;