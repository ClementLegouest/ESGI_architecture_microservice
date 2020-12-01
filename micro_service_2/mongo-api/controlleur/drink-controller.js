const Drink = require('../models/drinks');

module.exports = {

    //recupérer tous les boissons
    getDrinks(req, res) {
        Drink.find().then((drinks) => {
            res.send(drinks);
            // drinks.forEach(element => res.send(element.name));
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

    //créer une boisson
    createDrink(req, res) {
        const name = req.body.name;
        const price = req.body.price;
        const description = req.body.description;
        const isAlcoholic = req.body.isAlcoholic;
        const drink = new Drink({ name, price, isAlcoholic, description });
        drink.save().then(() => {
            res.send({ drink });
        });
    },

    //supprimer une boisson
    deleteDrink(req, res) {
        const id = req.params.id;
        Drink.findByIdAndRemove({ _id: id }).then((drink) => {
            res.send({ drink });
        });
    },

}