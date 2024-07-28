const express = require('express');
const app = express();
const cart = require('../config/cart');

app.post('/', (req, res) => {
    const { userId, products } = req.body;
    const query = `INSERT INTO carts (userId, products) VALUES (?, ?)`;
    console.log(userId);
    console.log(products);
    cart.query(query, [userId, JSON.stringify(products)], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send({ message: 'Internal Server Error' });
      } else {
        res.send({ id: results.insertId, userId, products });
      }
    });
  });

// Get all the carts
app.get('/', (req, res) => {
    const query = `SELECT * FROM carts`;
    cart.query(query, (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send({ message: 'Internal Server Error' });
      } else {
        res.send(results);
      }
    });
  });

// Get cart by ID
app.get('/:cartId', (req, res) => {
    const cartId = req.params.cartId;
    const query = `SELECT * FROM carts WHERE id = ?`;
    cart.query(query, [cartId], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send({ message: 'Internal Server Error' });
      } else {
        if (results.length === 0) {
          res.status(404).send({ message: 'Cart not found' });
        } else {
          res.send(results[0]);
        }
      }
    });
  });

// Update cart by ID
app.put('/:cartId', (req, res) => {
    const cartId = req.params.cartId;
    const { userId, products } = req.body;
    const query = `UPDATE carts SET userId = ?, products = ? WHERE id = ?`;
    cart.query(query, [userId, JSON.stringify(products), cartId], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send({ message: 'Internal Server Error' });
      } else {
        res.send({ id: cartId, userId, products });
      }
    });
  });

// Delete cart by ID
app.delete('/:cartId', (req, res) => {
    const cartId = req.params.cartId;
    const query = `DELETE FROM carts WHERE id = ?`;
    cart.query(query, [cartId], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send({ message: 'Internal Server Error' });
      } else {
        res.send({ message: 'Cart deleted successfully' });
      }
    });
  });
  

module.exports = app;