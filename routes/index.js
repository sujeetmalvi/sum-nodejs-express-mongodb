var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { content: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Express' });
});
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Express' });
});
router.get('/portfolio-details', function(req, res, next) {
  res.render('portfolio-details', { title: 'Express' });
});
router.get('/team', function(req, res, next) {
  res.render('team', { title: 'Express' });
});
router.get('/pricing', function(req, res, next) {
  res.render('pricing', { title: 'Express' });
});
router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Express' });
});
router.get('/blog-single', function(req, res, next) {
  res.render('blog-single', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

module.exports = router;
