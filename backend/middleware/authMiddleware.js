const jwt = require('jsonwebtoken');
const user = require('../routes/user');

const authMiddleware = async (req, res, next) => {
    // 1. Extract the token from the request headers
    const token = req.header('Authorization').replace('Bearer ', '');
  
    try {
      // 2. Verify token
      const decoded = jwt.verify(token, 'your_jwt_secret');
      
      // 3. Find the user by decoded ID (assuming your token payload has a user ID)
      const user = await User.findById(decoded.userId);
      
      if (!user) {
        throw new Error();
      }
  
      // 4. Attach the user object to the request object
      req.user = user;
      next();
    } catch (error) {
      res.status(401).send({ error: 'Authentication failed.' });
    }
  };
  
  module.exports = authMiddleware;