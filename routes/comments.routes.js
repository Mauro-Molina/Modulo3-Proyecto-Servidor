const router = require("express").Router();
const mongoose = require('mongoose');

const Forom = require('../models/Forom.model');
const Comments = require('../models/Comments.model');

router.post('/comments', (req, res, next) => {
  const { name, comment, foromId } = req.body;

  Comments.create({ name, comment, forom: foromId })
    .then(newComments => {
      return Forom.findByIdAndUpdate(foromId, { $push: { forom: newComments._id } } );
    })
    .then(response => res.json(response))
    .catch(err => res.json(err));
});

module.exports = router;
