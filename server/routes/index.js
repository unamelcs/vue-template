var express = require('express');
var router = express.Router();

// /* GET page. */
// router.get("*", function(req, res, next) {
//   res.sendfile("public/dist/index.html");
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
