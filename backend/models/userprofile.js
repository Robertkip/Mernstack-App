const user = require('../config/user');

const getUserById = async (userId) => {
    try {
      const [rows, fields] = await db.execute('SELECT * FROM users WHERE id = ?', [userId]);
      
      if (rows.length > 0) {
        return rows[0]; // Return the first user found (assuming userId is unique)
      } else {
        return null; // Return null if user with given ID not found
      }
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      throw error; // Handle or rethrow the error as needed
    }
  };