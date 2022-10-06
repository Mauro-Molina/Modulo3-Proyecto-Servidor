const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const foromSchema = new Schema({
  title: String,
  description: String,
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comments' }]
});

module.exports = model('Forom', foromSchema);
