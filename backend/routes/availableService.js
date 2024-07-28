const express = require('express');
const router = express.Router();
const available = require('../config/availableService');


router.get('/', (req, res) => {
    const query = 'SELECT * FROM bookings';
  
    available.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching bookings:', err);
        res.status(500).json({ message: 'Error fetching bookings' });
      } else if (results.length === 0) {
        res.status(404).json({ message: 'No bookings found' });
      } else {
        res.status(200).json(results);
      }
    });
  });

router.post('/', (req, res) => {
    const { service, price } = req.body;
    const query = `INSERT INTO bookings (service, price) VALUES ( ?, ?)`;
    available.query(query, [service, price], (err, results) => {
        if (err) {
        console.error('Error inserting data:', err);
        res.status(500).send({ message: 'Error inserting data' });
        } else {
        res.send({ message: 'Data inserted successfully' });
        }
    });
});

module.exports = router;