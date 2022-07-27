var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

/* GET html page. */
router.get('/html', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('html-view.html');
});

/* GET nunjuck page */
router.get('/nunjuck', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('nunjuck-view.html');
});

module.exports = router;
