const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
    user: Number,
    table: Number,
    date: Date
});

const Reservation = mongoose.model('reservation', ReservationSchema);

module.exports = Reservation;