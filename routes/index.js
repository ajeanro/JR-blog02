let express = require('express');
let router = express.Router();
let repo = require('../models/postRepository');

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'JR blog',
    author: 'JR',
    dataSource: repo.dataSource,
    postCount: repo.postCount(),
    posts: repo.getPosts()
  });
});

module.exports = router;
