const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');



router.post('/create', bookingController.createBooking);
router.get('/all', bookingController.getBookings);
router.put('/:id', bookingController.updateBooking);

module.exports = router;