const Booking = require('../models/booking');

exports.createBooking = async (req, res) => {
  try {
    const { name, email, price, time, cancel } = req.body;
    const booking = await Booking.create({
      name: name,
      email: email,
      price: price,
      time: time,
      cancel: cancel
    });
    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    res.status(200).json({ bookings });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const { cancel } = req.body;
    const booking = await Booking.findByPk(id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    booking.cancel = cancel;
    await booking.save();
    res.status(200).json({ message: 'Booking updated successfully', booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

