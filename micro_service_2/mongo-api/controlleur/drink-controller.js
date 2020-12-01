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

    //créer un utilisateur
    createDrink(req, res) {
        const name = req.body.name;
        const prix = req.body.prix
        const drink = new Drink({ name, prix });
        drink.save().then(() => {
            res.send({ drink });
        });
    },

    //supprimer un utilisateur
    deleteDrink(req, res) {
        const id = req.params.id;
        Drink.findByIdAndRemove({ _id: id }).then((drink) => {
            res.send({ drink });
        });
    },

}