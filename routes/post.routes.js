const router = require("express").Router();
const mongoose = require('mongoose');
const Post = require("../models/Posts.model");

router.post('/post', (req, res, next) => {
    const { name, description } = req.body;
   
    Post.create({ name, description })
      .then(response => res.json(response))
      .catch(err => res.json(err));
  });

router.get('/post', (req, res, next) => {
    Post.find()
      .then(allPost => res.json(allPost))
      .catch(err => res.json(err));
  });


router.get('/post/:postId', (req, res, next) => {
    const { postId } = req.params;
   
    if (!mongoose.Types.ObjectId.isValid(postId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
    Post.findById(postId)
      .then(post => res.status(200).json(post))
      .catch(error => res.json(error));
  });
   
router.put('/post/:postId', (req, res, next) => {
    const { postId } = req.params;
   
    if (!mongoose.Types.ObjectId.isValid(postId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
   
    Post.findByIdAndUpdate(postId, req.body, { new: true })
      .then((updatedPost) => res.json(updatedPost))
      .catch(error => res.json(error));
  });
   
   
 
  router.delete('/post/:postId', (req, res, next) => {
    const { postId } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(postId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
   
    Post.findByIdAndRemove(postId)
      .then(() => res.json({ message: `Removed successfully.` }))
      .catch(error => res.json(error));
  });
   

module.exports = router;