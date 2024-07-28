const mysql = require('mysql');

const cart = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rony@2022',
  database: 'cart_db'
});

cart.connect((err) => {
  if (err) {
    // throw err;
    console.log('Error connecting to database');
  }
  console.log('Connected to database');
});

module.exports = cart;