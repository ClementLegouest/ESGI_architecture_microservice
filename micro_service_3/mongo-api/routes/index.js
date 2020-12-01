TableController = require('../controlleur/tables-controller');
ReservationController = require('../controlleur/reservations-controller');

module.exports = (server) => {

  server.get('/tables', TableController.getTables);
  server.get('/table/:id', TableController.getTable);
  server.post('/table', TableController.createTable);
  server.delete('/table', TableController.deleteTable);

  server.get('/reservations', ReservationController.getReservations);
  server.get('/reservation/:id', ReservationController.getReservation);
  server.post('/reservation', ReservationController.createReservation);
  server.delete('/reservation', ReservationController.deleteReservation);

}