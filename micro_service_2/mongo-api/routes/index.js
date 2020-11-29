DrinkController = require('../controlleur/drink-controller');

module.exports = (server) => {
  server.get('/drinks', DrinkController.getDrinks);
  server.get('/drink/:id', DrinkController.getDrink);

  server.get('/drinks', DrinkController.getDrinks);
  server.get('/drink/:id', DrinkController.getDrink);

  server.post('/drink', DrinkController.createDrink);
  server.delete('/drink', DrinkController.deleteDrink);

}