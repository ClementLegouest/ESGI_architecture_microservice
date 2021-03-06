const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DrinkSchema = new Schema({
    name: String,
    price: Number,
    isAlcoholic: String,
    description: String
});

const Drink = mongoose.model('drink',DrinkSchema);

module.exports= Drink;