const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DrinkSchema = new Schema({
    name: String,
    prix: Number
});

const Drink = mongoose.model('drink',DrinkSchema);

module.exports= Drink;