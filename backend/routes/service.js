const express = require('express');
// const moment = require('moment');
const router = express.Router();
const services = require('../config/service');



router.post('/', (req, res) => {
    const { email, date, time, service } = req.body;

    //validate email
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      res.status(400).send({ message: 'Please enter a valid email' });
      return;
    }
    //validate date
    if (!date) {
      res.status(400).send({ message: 'Date is required' });
      return;
    }
    //validate time
    if (!time) {
      res.status(400).send({ message: 'Time is required' });
      return;
    }
    //validate service
    if (!service) {
      res.status(400).send({ message: 'Service is required' });
      return;
    }

    //insert data
    const query = `INSERT INTO services (email, date, time, service) VALUES (?, ?, ?, ?)`;
    services.query(query, [email, date, time, service], (err, results) => {
      if (err) {
        console.error('error inserting:', err);
        res.status(500).send({ message: 'Error inserting data' });
      } else {
        res.send({ message: 'Data inserted successfully' });
      }
    });
  });

//fetch data using email
router.get('/:email', (req, res) => {
  const email = req.params.email;
  const query = `SELECT * FROM services WHERE email = ?`;

  services.query(query, [email], (err, results) => {
    if (err) {
      console.error('Error getting data:', err);
      res.status(500).send({ message: 'Error getting data' });
    } else {
      if (results.length === 0) {
        res.status(404).send({ message: 'Email not found' });
      } else {
        res.send(results);
      }
    }
  });
});


//get the data of the service
router.get('/', (req, res) => {
    const query = `SELECT * FROM services`;
    services.query(query, (err, results) => {
      if (err) {
        console.error('error getting data:', err);
        res.status(500).send({ message: 'Error getting data' });
      } else {
        res.send(results);
      }
    });
  });

  //get data by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM services WHERE id = ?`;
    services.query(query, [id], (err, results) => {
      if (err) {
        console.error('error getting data:', err);
        res.status(500).send({ message: 'Error getting data' });
      } else {
        if (results.length === 0) {
          res.status(404).send({ message: 'Data not found' });
        } else {
          res.send(results[0]);
        }
      }
    });
  });

//delete the data using Id
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM services WHERE id = ?`;
    services.query(query, [id], (err, results) => {
      if (err) {
        console.error('error deleting data:', err);
        res.status(500).send({ message: 'Error deleting data' });
      } else {
        if (results.affectedRows === 0) {
          res.status(404).send({ message: 'Data not found' });
        } else {
          res.send({ message: 'Data deleted successfully' });
        }
      }
    });
  });

module.exports = router;