let express = require('express');
let router = express.Router();
let repo = require('../models/postRepository');


router.get('/', function(req, res, next) {
    res.render('sources', { title: 'Dev Resources' });
  });

module.exports = router;