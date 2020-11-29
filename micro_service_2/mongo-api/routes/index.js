DrinkController = require('../controlleur/drink-controller');

module.exports = (server) => {
  server.get('/drinks', DrinkController.getDrinks);
  server.get('/drink/:id', DrinkController.getDrink);
  server.get('/theCoctailsApi', DrinkController.getDrinkFromCocktailApi);

  server.get('/front.html', function (request, response) {
    response.sendfile('./front.html');
  });

  //server.delete('/movie',MovieController.delete);
  //server.delete('/user',UserController.deleteUser); 

}