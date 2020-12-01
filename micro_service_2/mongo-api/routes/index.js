DrinkController = require('../controlleur/drink-controller');

module.exports = (server) => {
  // CREATE
  server.post('/drink', DrinkController.createDrink);

  // READ
  server.get('/drinks', DrinkController.getDrinks);
  server.get('/drink/:id', DrinkController.getDrink);

  // DELETE
  server.delete('/drink/:id', DrinkController.deleteDrink);
}