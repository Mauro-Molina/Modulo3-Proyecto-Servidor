const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const commentsSchema = new Schema({
  name: String,
  comment: String,
  forom: { type: Schema.Types.ObjectId, ref: 'Forom' }
});

module.exports = model('Comments', commentsSchema);
