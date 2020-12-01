const Reservation = require('../models/reservations');

module.exports = {

    //recupérer tous les reservations
    getReservations(req, res) {
        Reservation.find().then((reservations) => {
            res.send(reservations);
           // users.forEach(element => res.send(element.name));
        })
            .catch((error) => {
                res.send("il y a eu un problem")
            });
    },

    //recupérer une reservation
    getReservation(req, res) {
        const id = req.params.id;
        Reservation.findById({ _id: id }).then((reservation) => {
            res.send({ reservation });
        })
    },

    //créer une reservation
    createReservation(req, res) {
        const date = req.body.date;
        const table = req.body.table;
        const user = req.body.user;
        const reservation = new Reservation({ user, table, date });
        reservation.save().then(() => {
            res.send({ reservation });
        });
    },

    //supprimer une reservation
    deleteReservation(req, res) {
        const id = req.params.id;
        Reservation.findByIdAndRemove({ _id: id }).then((reservation) => {
            res.send({ reservation });
        });
    },

}