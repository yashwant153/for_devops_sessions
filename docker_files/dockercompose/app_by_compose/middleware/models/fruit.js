const { Schema, model } = require('mongoose');

const fruitSchema = new Schema({
  fruitName: String,
  price: Number,
  organic: Boolean
}); 

const Fruit = model('Fruit', fruitSchema);

module.exports = Fruit;