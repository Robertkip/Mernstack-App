const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Booking = sequelize.define('Booking', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    cancel: {
        type: DataTypes.ENUM('cancel', 'uncancel'),
        defaultValue: 'uncancel'
    }
}, {
    tableName: 'booking',
});

module.exports = Booking;