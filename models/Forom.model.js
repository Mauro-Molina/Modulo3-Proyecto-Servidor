const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const foromSchema = new Schema({
  title: String,
  description: String,
  comentario: [{ type: Schema.Types.ObjectId, ref: 'Comentario' }]
});

module.exports = model('Forom', foromSchema);
