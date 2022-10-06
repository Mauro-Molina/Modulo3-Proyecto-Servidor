const router = require("express").Router();
const mongoose = require('mongoose');

const Forom = require('../models/Forom.model');
const Comments = require('../models/Comments.model');


router.post('/forom', (req, res, next) => {
  const { title, description } = req.body;

  Forom.create({ title, description, comments: [] })
    .then(response => res.json(response))
    .catch(err => res.json(err));
});

router.get('/forom', (req, res, next) => {
    Forom.find()
      .populate('comments')
      .then(allForom => res.json(allForom))
      .catch(err => res.json(err));
  });

router.get('/forom/:foromId', (req, res, next) => {
    const { foromId } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(foromId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
 
    Forom.findById(foromId)
      .populate('comments')
      .then(forom => res.status(200).json(forom))
      .catch(error => res.json(error));
  });
  
router.put('/forom/:foromId', (req, res, next) => {
    const { foromId } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(foromId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
  
    Forom.findByIdAndUpdate(foromId, req.body, { new: true })
      .then((updatedForom) => res.json(updatedForom))
      .catch(error => res.json(error));
  });
  
router.delete('/forom/:foromId', (req, res, next) => {
    const { foromId } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(foromId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
  
    Forom.findByIdAndRemove(foromId)
      .then(() => res.json({ message: `Project with ${foromId} is removed successfully.` }))
      .catch(error => res.json(error));
  });


module.exports = router;
