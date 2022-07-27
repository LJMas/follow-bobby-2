var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/html', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.redirect('html-view.html');
});

module.exports = router;
