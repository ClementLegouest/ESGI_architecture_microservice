const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tableSchema = new Schema({
    reserved : String,
});

const table = mongoose.model('table', tableSchema);

module.exports = table;