const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const commentsSchema = new Schema({
  name: String,
  comment: String,
},
 {
    timestamps: true,
  });

module.exports = model('Comments', commentsSchema);
