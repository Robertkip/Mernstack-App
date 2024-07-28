const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 9000;

const db = require('./config/database');
const pool = require('./config/message');
const cart = require('./config/cart');
const user = require('./config/user');
const service = require('./config/service');

const serviceRoutes = require('./routes/service');
const cartRoutes = require('./routes/cart')
const userRoutes = require('./routes/user');
const bookingRoutes = require('./routes/bookingRoutes');
const availableServiceRoutes = require('./routes/availableService');

app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
    origin: '*', // Replace with your client-side application's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.post('/subscribe', (req, res) => {
    const { name, email, phone, message } = req.body;

    //Email validation
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(email)) {
        return res.status(400).send('Invalid email address');
    }

    //Phone validation
    const phoneRegex = /^\+[0-9]{9,12}$/;
    if (!phoneRegex.test(phone)) {
        return res.status(400).send('Invalid phone number');
    }
    
    const query = `INSERT INTO users (name, email, phone, message) VALUES (?, ?, ?, ?)`;
    pool.execute(query, [name, email, phone, message])
      .then(() => {
        res.send('Message sent successfully!');
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Error sending message');
      });
});

app.use('/booking', bookingRoutes);
app.use('/carts', cartRoutes);
app.use('/user', userRoutes);
app.use('/services', serviceRoutes);
app.use('/available', availableServiceRoutes);
// Health check
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my Shop application' })
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});