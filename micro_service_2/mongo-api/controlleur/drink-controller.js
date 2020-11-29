const Drink = require('../models/drinks');

module.exports = {

    //recupérer tous les boissons
    getDrinks(req, res) {
        Drink.find().then((drinks) => {
            res.send(drinks);
            // users.forEach(element => res.send(element.name));
        })
            .catch((error) => {
                res.send("il y a eu un problem")
            });
    },

    //recupérer une boisson
    getDrink(req, res) {
        const id = req.params.id;

        Drink.findById({ _id: id }).then((drink) => {
            res.send({ drink });
        })
    },

    //recupérer les boissons de l'api cocktail
    getDrinkFromCocktailApi(req, res) {

        var https = require('https');

        var options = {
            host: 'www.thecocktaildb.com',
            path: '/api/json/v1/1/random.php',
        };

        callback = function (response) {

            res.setHeader("Content-Type", "text/html");

            var str = '';

            //another chunk of data has been received, so append it to `str`
            response.on('data', function (chunk) {
                str += chunk;
                res.send({ str });
            });

            //the whole response has been received, so we just print it out here
            response.on('end', function () {
                console.log(JSON.parse(str));
            });
        }

        https.request(options, callback).end();
    },

}