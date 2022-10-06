const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const foromSchema = new Schema({
  title: {type: String,  maxLength: 100, required: true},
  description: String,
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comments' }]
}, {
  timestamps: true,
});

module.exports = model('Forom', foromSchema);
