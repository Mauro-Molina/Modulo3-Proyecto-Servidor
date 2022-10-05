const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const comentarioSchema = new Schema({
  name: String,
  comment: String,
});

module.exports = model('Forom', comentarioSchema);
