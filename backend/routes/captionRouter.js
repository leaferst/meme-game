const express = require('express');
const captionRouter = express.Router();
const {getAllCaptions} = require('../controllers/captionController');

// .get
// .post
// .delete / .put (/:id)

captionRouter.get('/', getAllCaptions);


module.exports = captionRouter;