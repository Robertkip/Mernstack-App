const mysql = require('mysql');

const service = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rony@2022',
  database: 'service_db'
});

service.connect((err) => {
  if (err) {
    // throw err;
    console.log('Error connecting to database');
  }
  console.log('Connected to service_db database');
});

module.exports = service;