const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();
const { getUserById } = require('../models/userprofile');

const user = require('../config/user');

const JWT_SECRET = "your-secret-key";

// Create a user
router.post('/', async (req, res) => {
    const { username, email, password } = req.body;

    user.query('SELECT email FROM users WHERE email = ?', [email], async (error, ress) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error creating user');
        } else {
            if (ress.length > 0) {
                res.status(400).send('Email already exists');
            } else {
                const saltRounds = 10;
                const hashedPassword = await bcrypt.hash(password, saltRounds);
                const results = await user.query(
                    `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`,
                    [username, email, hashedPassword],
                    (error, results) => {
                        if (error) {
                            console.error(error);
                            res.status(500).send('Error creating user');
                        } else {
                            res.status(201).send('User created successfully');
                        }
                    }
                );
            }
        }
    });
});


router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Fetch user from the database
        const user = await getUserByEmail(email, password);
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const accessToken = jwt.sign(
            { id: user.id, username: user.username, email: user.email },
            JWT_SECRET,
            { expiresIn: '1h' }
        );



        // Respond with the access token
        res.json({ accessToken });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal Server Error' }); // Generic error message for internal server errors
    }
});

router.get('/userprofile', (req, res) => {
    const userId = req.userId;
  
    // Query to retrieve the user
    const query = 'SELECT * FROM users WHERE id = ?';
    user.query(query, [userId], (err, results) => {
      if (err) {
        res.status(500).send({ message: 'Error finding user' });
        return;
      }
  
      if (results.length === 0) {
        res.status(404).send({ message: 'User not found' });
        return;
      }
  
      const user = results[0];
      res.send({ email: user.email, username: user.username });
    });
  });

async function getUserByEmail(email, password) {
    return new Promise((resolve, reject) => {
        user.query(
            `SELECT * FROM users WHERE email = ?`,
            [email],
            async (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    if (results.length > 0) {
                        const user = results[0];
                        try {
                            // Compare the provided password with the hashed password from the database
                            const isPasswordValid = await bcrypt.compare(password, user.password);
                            if (isPasswordValid) {
                                resolve(user);
                            } else {
                                resolve(null); // Password is not valid
                            }
                        } catch (error) {
                            reject(error);
                        }
                    } else {
                        resolve(null); // No user found with the given email
                    }
                }
            }
        );
    });
}




module.exports = router;