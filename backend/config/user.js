const mysql = require('mysql');

const user = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rony@2022',
  database: 'user_signup'
});


user.connect((err) => {
    if (err) {
      // throw err;
      console.log('Error connecting to database');
    } else {
    console.log('Connected to user_signup database');
    }
  });

module.exports = user;
