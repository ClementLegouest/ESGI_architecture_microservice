const Table = require('../models/tables');

module.exports = {

    //recupérer tous les utilisateurs
    getTables(req, res) {
        Table.find().then((tables) => {
            res.send(tables);
           // users.forEach(element => res.send(element.name));
        })
            .catch((error) => {
                res.send("il y a eu un problem")
            });
    },

    //recupérer un utilisateur
    getTable(req, res) {
        const id = req.params.id;

        Table.findById({ _id: id }).then((table) => {
            res.send({ table });
        })
    },

    //créer un utilisateur
    createTable(req, res) {
        const reserved = req.body.reserved
        const table = new Table({ reserved });
        table.save().then(() => {
            res.send({ table });
        });
    },

    //supprimer un utilisateur
    deleteTable(req, res) {
        const id = req.params.id;
        Table.findByIdAndRemove({ _id: id }).then((table) => {
            res.send({ table });
        });
    },

}